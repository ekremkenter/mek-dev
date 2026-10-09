// Builds src/prize-script.json for the long video: the essay's structure
// (headings, paragraphs, list items, bold spans, figures) with every word
// timed against the narration, by aligning the essay text to Whisper's word
// timestamps (data/prize.whisper-words.json). Also writes out/prize-chapters.txt
// and out/prize.srt for the YouTube upload.
//
//   node scripts/build-prize.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const POST = "../src/content/blog/the-prize-comes-after-the-order.md";
const CSS = "../src/styles/global.css";
const WHISPER = "data/prize.whisper-words.json";
// where the narration's sections sit in the video (see PrizeVideo.tsx)
const COLD_OPEN = { audioFrom: 2.0, audioTo: 33.6 };
const TITLE_CARD_SECONDS = 3.2;
const BODY_OFFSET = COLD_OPEN.audioTo - COLD_OPEN.audioFrom + TITLE_CARD_SECONDS - COLD_OPEN.audioTo; // video = audio + this

const md = readFileSync(POST, "utf8").split(/^---$/m).slice(2).join("---");
const title = readFileSync(POST, "utf8").match(/^title:\s*"?(.+?)"?\s*$/m)[1];

// figures out, placeholders in
const figures = [];
let body = md.replace(/<figure>[\s\S]*?<\/figure>/g, (f) => {
  const svg = f.match(/<svg[\s\S]*<\/svg>/)[0];
  figures.push({
    id: figures.length,
    svg,
    title: (f.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] ?? "",
    caption: ((f.match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] ?? "").replace(/<[^>]+>/g, ""),
  });
  return `\n\n@@FIG${figures.length - 1}@@\n\n`;
});
body = body.replace(/^\*Researched and drafted with Claude[^\n]*$/m, "");

// inline markdown to plain text with ⟦bold⟧ markers
const inline = (s) =>
  s
    .replace(/\s*\((?:\s*\[[^\]]+\]\([^)]*\)\s*;?)+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "⟦$1⟧")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

// blocks: heading | para (maybe a list item) | figure
const blocks = [];
let section = "Opening";
for (const raw of body.split(/\n\s*\n/)) {
  const block = raw.trim();
  if (!block) continue;
  const fig = block.match(/^@@FIG(\d+)@@$/);
  if (fig) {
    blocks.push({ type: "figure", figure: Number(fig[1]), section });
    continue;
  }
  const h = block.match(/^##\s+(.+)$/);
  if (h) {
    section = h[1].trim();
    blocks.push({ type: "heading", text: section, section });
    continue;
  }
  if (/^\d+\.\s/.test(block)) {
    for (const item of block.split(/\n(?=\d+\.\s)/)) {
      const n = Number(item.match(/^(\d+)\./)[1]);
      blocks.push({ type: "para", text: inline(item.replace(/^\d+\.\s+/, "")), list: n, section });
    }
    continue;
  }
  blocks.push({ type: "para", text: inline(block), section });
}

// sentences and words, each word knowing whether it is bold
const tokens = []; // flat list for alignment
for (const b of blocks) {
  if (b.type === "heading") {
    b.words = b.text.split(" ").map((t) => ({ t }));
    tokens.push(...b.words);
    continue;
  }
  if (b.type !== "para") continue;
  if (b.list) b.lead = (b.text.match(/^⟦([^⟧]+)⟧/) || [])[1];
  let bold = false;
  b.sentences = b.text
    .split(/(?<=[.!?:]["”]?)\s+(?=[A-Z“"0-9⟦])/)
    .map((s) => ({
      words: s.split(" ").map((w) => {
        const opens = w.includes("⟦");
        const closes = w.includes("⟧");
        const word = { t: w.replace(/[⟦⟧]/g, ""), b: bold || opens };
        if (opens) bold = true;
        if (closes) bold = false;
        return word;
      }),
    }));
  for (const s of b.sentences) tokens.push(...s.words);
}

// align essay words to Whisper's words (longest common subsequence)
const norm = (w) => w.toLowerCase().replace(/(\d):(\d)/g, "$1$2").replace(/[^a-z0-9%$]/g, "");
const heard = JSON.parse(readFileSync(WHISPER, "utf8")).map((w) => ({ ...w, n: norm(w.w) }));
// the narration starts with the title, which isn't in the body
const titleWords = title.split(" ").length;
const H = heard.slice(titleWords);
const A = tokens.map((t) => norm(t.t));
const m = A.length;
const n = H.length;
const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
for (let i = 1; i <= m; i++)
  for (let j = 1; j <= n; j++)
    dp[i][j] = A[i - 1] && A[i - 1] === H[j - 1].n ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
for (let i = m, j = n; i > 0 && j > 0; ) {
  if (A[i - 1] && A[i - 1] === H[j - 1].n) {
    tokens[i - 1].s = H[j - 1].s;
    tokens[i - 1].e = H[j - 1].e;
    i--;
    j--;
  } else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
  else j--;
}
const matched = tokens.filter((t) => t.s !== undefined).length;

// unmatched words share the gap between their timed neighbours, by length
for (let i = 0; i < tokens.length; ) {
  if (tokens[i].s !== undefined) {
    i++;
    continue;
  }
  let j = i;
  while (j < tokens.length && tokens[j].s === undefined) j++;
  const from = i > 0 ? tokens[i - 1].e : heard[titleWords]?.s ?? 0;
  const to = j < tokens.length ? tokens[j].s : heard.at(-1).e;
  const weight = (t) => t.t.length + 1;
  const total = tokens.slice(i, j).reduce((a, t) => a + weight(t), 0);
  let at = from;
  for (let k = i; k < j; k++) {
    const d = ((to - from) * weight(tokens[k])) / total;
    tokens[k].s = +at.toFixed(2);
    tokens[k].e = +(at + d).toFixed(2);
    at += d;
  }
  i = j;
}

// spans
for (const b of blocks) {
  if (b.type === "heading") {
    b.start = b.words[0].s;
    b.end = b.words.at(-1).e;
  } else if (b.type === "para") {
    for (const s of b.sentences) {
      s.start = s.words[0].s;
      s.end = s.words.at(-1).e;
    }
    b.start = b.sentences[0].start;
    b.end = b.sentences.at(-1).end;
  }
}

// figure palette from the site, so figures look the same in the video
const css = readFileSync(CSS, "utf8");
const figCss = css.slice(css.indexOf("/* inline SVG figure palette"), css.indexOf("/* post hero"));

const audioEnd = heard.at(-1).e;
writeFileSync(
  "src/prize-script.json",
  `${JSON.stringify({ title, titleAudio: [0, heard[titleWords - 1].e], coldOpen: COLD_OPEN, titleCardSeconds: TITLE_CARD_SECONDS, audioEnd, blocks, figures, figCss }, null, 1)}\n`,
);

// YouTube chapters and subtitles, in video time
mkdirSync("out", { recursive: true });
const ts = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
const chapters = [
  // YouTube ignores all chapters if any is under 10s, so the 3s title card has none
  "0:00 23:40 at a connecting hub",
  ...blocks.filter((b) => b.type === "heading").map((b) => `${ts(b.start + BODY_OFFSET)} ${b.text}`),
];
writeFileSync("out/prize-chapters.txt", `${chapters.join("\n")}\n`);

// the first heading starts a moment before the cold open's cut, but plays in the body
const toVideo = (a) =>
  a < COLD_OPEN.audioTo - 0.3 ? a - COLD_OPEN.audioFrom : a + BODY_OFFSET;
const srtTime = (s) => {
  const ms = Math.max(0, Math.round(s * 1000));
  const p = (x, l = 2) => String(x).padStart(l, "0");
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
};
const cues = [];
for (const b of blocks) {
  if (b.type !== "para") continue;
  for (const s of b.sentences) {
    // at most ~10 words per cue
    for (let i = 0; i < s.words.length; i += 10) {
      const ws = s.words.slice(i, i + 10);
      cues.push([toVideo(ws[0].s), toVideo(ws.at(-1).e), ws.map((w) => w.t).join(" ")]);
    }
  }
}
const titleCue = [COLD_OPEN.audioTo - COLD_OPEN.audioFrom + 0.2, COLD_OPEN.audioTo - COLD_OPEN.audioFrom + 2.2, `${title}.`];
cues.splice(cues.findIndex((c) => c[0] > titleCue[0]), 0, titleCue);
writeFileSync(
  "out/prize.srt",
  cues.map(([a, b, t], i) => `${i + 1}\n${srtTime(a)} --> ${srtTime(b)}\n${t}\n`).join("\n"),
);

// Turkish subtitles from data/prize.tr.json: one translation per sentence (in
// order), split into cues at "|" and timed by length within the sentence, so
// Turkish word order isn't forced into the English cue boundaries. Headings
// and the title are spoken too, so they get cues as well.
const tr = JSON.parse(readFileSync("data/prize.tr.json", "utf8"));
const sentences = blocks.filter((b) => b.type === "para").flatMap((b) => b.sentences);
if (tr.sentences.length !== sentences.length) {
  throw new Error(`prize.tr.json has ${tr.sentences.length} sentences, the essay has ${sentences.length}`);
}
const trCues = [[titleCue[0], titleCue[1], tr.title]];
for (const h of blocks.filter((b) => b.type === "heading")) {
  trCues.push([toVideo(h.start), Math.max(toVideo(h.end), toVideo(h.start) + 2), tr.headings[h.text]]);
}
sentences.forEach((s, i) => {
  const parts = tr.sentences[i].split("|").map((p) => p.trim());
  const total = parts.reduce((n, p) => n + p.length, 0);
  let at = toVideo(s.start);
  const span = toVideo(s.end) - toVideo(s.start);
  for (const p of parts) {
    const d = (span * p.length) / total;
    trCues.push([at, at + d, p]);
    at += d;
  }
});
trCues.sort((a, b) => a[0] - b[0]);
// Turkish runs longer than the English it times against, so cues lead by a
// moment and linger into the following pause, without overlapping
for (let i = 0; i < trCues.length; i++) {
  const prevEnd = i > 0 ? trCues[i - 1][1] + 0.05 : 0;
  const nextStart = i < trCues.length - 1 ? trCues[i + 1][0] - 0.05 : Infinity;
  trCues[i][0] = Math.max(prevEnd, trCues[i][0] - 0.15);
  trCues[i][1] = Math.min(nextStart, trCues[i][1] + 1.0);
}
writeFileSync(
  "out/prize.tr.srt",
  trCues.map(([a, b, t], i) => `${i + 1}\n${srtTime(a)} --> ${srtTime(b)}\n${t}\n`).join("\n"),
);
const cps = trCues.map(([a, b, t]) => t.length / (b - a)).sort((x, y) => y - x);
console.log(`tr cues ${trCues.length}, reading speed median ${cps[cps.length >> 1].toFixed(1)} cps, max ${cps[0].toFixed(1)} cps`);

console.log(`words ${tokens.length}, timed from Whisper ${matched} (${((100 * matched) / tokens.length).toFixed(1)}%)`);
console.log(`audio ${ts(audioEnd)}, video body offset ${BODY_OFFSET.toFixed(2)}s`);
console.log(chapters.join("\n"));
