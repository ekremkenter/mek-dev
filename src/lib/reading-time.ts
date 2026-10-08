// Minutes to read a markdown body: counts prose words only, skipping inline
// figures (SVG markup), HTML tags and link targets.
export function readingMinutes(markdown: string | undefined, wordsPerMinute = 230): number {
  if (!markdown) return 1;
  const prose = markdown
    .replace(/<figure[\s\S]*?<\/figure>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/[#*_>`|[\]]/g, " ");
  const words = prose.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
