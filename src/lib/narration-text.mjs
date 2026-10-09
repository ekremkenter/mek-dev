// The text a post's narration reads: the title, then the prose. Figures,
// tables, images, code and link-only citations are skipped; headings and list
// items become their own sentences. Shared by scripts/tts/narrate.mjs (which
// voices it) and the post page (which checks the audio still matches it).
import { createHash } from "node:crypto";

const sentence = (p) => (/[.!?:;"”)]$/.test(p) ? p : `${p}.`);

export function narrationText(title, markdown) {
  let s = markdown
    .replace(/<figure[\s\S]*?<\/figure>/g, "\n\n")
    .replace(/```[\s\S]*?```/g, "\n\n")
    .replace(/^\|.*\|[ \t]*$/gm, "")
    .replace(/^\*Researched and drafted with Claude[^\n]*$/gm, "")
    .replace(/^Researched and drafted with Claude[^\n]*$/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    // "(... [IATA](url); [ARC](url))": citations add nothing read aloud
    .replace(/\s*\((?:\s*\[[^\]]+\]\([^)]*\)\s*;?)+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/^#{1,6}\s+(.+)$/gm, "\n$1\n")
    .replace(/^\s*(?:[-*]|\d+\.)\s+/gm, "\n")
    .replace(/^\s*-{3,}\s*$/gm, "")
    .replace(/[*`]/g, "");

  const paragraphs = s
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean)
    .map(sentence);
  return [sentence(title), ...paragraphs].join("\n\n");
}

export const textHash = (text) => createHash("sha256").update(text).digest("hex").slice(0, 12);
