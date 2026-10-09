// Narrates a blog post in Ekrem's cloned ElevenLabs voice, uploads the MP3 to
// the cdn-mek R2 bucket (served at cdn.mek.app) and records it in
// src/data/narration.json, which the post page reads.
//
//   node --env-file=.env scripts/tts/narrate.mjs <post-id> [--dry-run] [--force]
//
// --dry-run prints the text and character count without spending quota.
// Voiced chunks are cached in .cache/narration/, so a failed upload can be
// retried without paying for the audio again.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { narrationText, textHash } from "../../src/lib/narration-text.mjs";

const VOICE_ID = "YoS6aGDDEwIDM9n43TdV"; // "MEK", cloned from Ekrem's voice
const MODEL_ID = "eleven_v4";
const CHUNK_CHARS = 9000; // eleven_v4 takes at most 10,000 characters per request
const ACCOUNT_ID = "7df993260f5328b7db9d5ce4dfa7edb9"; // personal account, not the work ones
const BUCKET = "cdn-mek";
const PREFIX = "mek.dev/audio";
const PUBLIC_BASE = "https://cdn.mek.app";
const DATA_FILE = "src/data/narration.json";

const [id, ...flags] = process.argv.slice(2);
const dryRun = flags.includes("--dry-run");
const force = flags.includes("--force");
if (!id) throw new Error("usage: narrate.mjs <post-id> [--dry-run] [--force]");

const source = readFileSync(`src/content/blog/${id}.md`, "utf8");
const [, frontmatter, body] = source.split(/^---$/m);
const title = frontmatter.match(/^title:\s*"?(.+?)"?\s*$/m)[1];
const text = narrationText(title, body);
const hash = textHash(text);

const data = existsSync(DATA_FILE) ? JSON.parse(readFileSync(DATA_FILE, "utf8")) : {};
if (data[id]?.textHash === hash && !force) {
  console.log(`${id}: narration is current (${hash}); use --force to redo it`);
  process.exit(0);
}

// split on paragraph boundaries so each request stays under the model's limit
const chunks = [];
for (const para of text.split("\n\n")) {
  const last = chunks.at(-1);
  if (last && last.length + para.length + 2 <= CHUNK_CHARS) chunks[chunks.length - 1] = `${last}\n\n${para}`;
  else chunks.push(para);
}

console.log(`${id}: ${text.length} characters in ${chunks.length} request(s), text ${hash}`);
if (dryRun) {
  console.log(`\n${text}`);
  process.exit(0);
}

const key = process.env.ELEVENLABS_API_KEY;
if (!key) throw new Error("ELEVENLABS_API_KEY is not set (run with --env-file=.env)");

const cacheDir = join(".cache/narration", id, hash);
mkdirSync(cacheDir, { recursive: true });

const parts = [];
let previousRequestIds = [];
for (const [i, chunk] of chunks.entries()) {
  const part = join(cacheDir, `part-${i}.mp3`);
  parts.push(part);
  if (existsSync(part)) {
    console.log(`  part ${i + 1}/${chunks.length}: cached`);
    previousRequestIds = [];
    continue;
  }
  const request = async (withContext) => {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: { "xi-api-key": key, "content-type": "application/json" },
        body: JSON.stringify({
          text: chunk,
          model_id: MODEL_ID,
          // keeps intonation continuous across chunk boundaries
          ...(withContext && previousRequestIds.length && { previous_request_ids: previousRequestIds.slice(-3) }),
        }),
      },
    );
    return res;
  };
  let res = await request(true);
  if (res.status === 400 && previousRequestIds.length) res = await request(false);
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 300)}`);
  writeFileSync(part, Buffer.from(await res.arrayBuffer()));
  const requestId = res.headers.get("request-id");
  if (requestId) previousRequestIds.push(requestId);
  console.log(`  part ${i + 1}/${chunks.length}: ${chunk.length} characters voiced`);
}

// join the parts, downmix to mono and re-encode: speech doesn't need stereo 128k
const file = join(cacheDir, `${id}.mp3`);
const list = join(cacheDir, "parts.txt");
writeFileSync(list, parts.map((p) => `file '${p.split("/").at(-1)}'`).join("\n"));
execFileSync("ffmpeg", [
  "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", list,
  "-ac", "1", "-codec:a", "libmp3lame", "-b:a", "96k",
  "-metadata", `title=${title}`,
  "-metadata", "artist=Mustafa Ekrem Kenter",
  "-metadata", "comment=Narrated by an AI clone of the author's voice (ElevenLabs)",
  file,
]);
const seconds = Math.round(
  Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString()),
);

const objectKey = `${PREFIX}/${id}.${hash}.mp3`;
execFileSync(
  "npx",
  [
    "wrangler", "r2", "object", "put", `${BUCKET}/${objectKey}`,
    "--file", file, "--content-type", "audio/mpeg",
    "--cache-control", "public, max-age=31536000, immutable", "--remote",
  ],
  { stdio: "inherit", env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT_ID } },
);

data[id] = {
  src: `${PUBLIC_BASE}/${objectKey}`,
  seconds,
  bytes: statSync(file).size,
  textHash: hash,
  voice: "cloned",
  model: MODEL_ID,
  generated: new Date().toISOString().slice(0, 10),
};
writeFileSync(DATA_FILE, `${JSON.stringify(data, null, 2)}\n`);
console.log(`${id}: ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")} at ${data[id].src}`);
