// Sentence timings (seconds) in public/prize-short.mp3, which is 2.0s-33.6s of
// the "The Prize Comes After the Order" narration (title cut). Boundaries come
// from the pauses in the audio; words inside a sentence are spread by length.
export const sentences = [
  { start: 0.18, end: 2.18, text: "It's 23:40 at a connecting hub." },
  { start: 2.69, end: 7.2, text: "A passenger from Lagos watches her Toronto connection disappear from the departures board." },
  { start: 7.8, end: 9.13, text: "She doesn't open the airline's app." },
  { start: 9.63, end: 11.51, text: "She doesn't join the queue at the transfer desk." },
  { start: 12.03, end: 12.91, text: "She tells her phone:" },
  { start: 13.4, end: 15.22, text: "“Get me to Toronto by tomorrow night.”" },
  { start: 15.9, end: 20.21, text: "Whoever answers that sentence first, fast, correctly and within the rules," },
  { start: 20.61, end: 21.75, text: "wins her next booking." },
  { start: 22.42, end: 27.45, text: "My industry has spent a decade rebuilding how airlines sell, with offers and orders." },
  { start: 28.06, end: 31.32, text: "Whether that work pays off will be decided here, after the sale." },
];

export const AUDIO_SECONDS = 31.6;
export const OUTRO_SECONDS = 4;

export type Word = { text: string; start: number; end: number };

// spread each sentence's time over its words, weighted by length; punctuation
// at a word's end gets a little extra time, as speech pauses there
export const words: Word[] = sentences.flatMap(({ start, end, text }) => {
  const parts = text.split(" ");
  const weight = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, "").length + 2 + (/[,.:;”]$/.test(w) ? 2 : 0);
  const total = parts.reduce((n, w) => n + weight(w), 0);
  let t = start;
  return parts.map((w) => {
    const d = ((end - start) * weight(w)) / total;
    const word = { text: w, start: t, end: t + d };
    t += d;
    return word;
  });
});

// caption pages: up to 3 words, breaking early after punctuation
export const pages: Word[][] = (() => {
  const out: Word[][] = [];
  let page: Word[] = [];
  for (const w of words) {
    page.push(w);
    if (page.length === 3 || /[,.:;”]$/.test(w.text)) {
      out.push(page);
      page = [];
    }
  }
  if (page.length) out.push(page);
  return out;
})();

// beats the visuals key off
export const beat = {
  boardIn: 2.6,
  cancelled: 5.9, // "disappear"
  noApp: 7.8,
  noQueue: 9.63,
  phoneIn: 12.03,
  ask: 13.4,
  typing: 15.9,
  reply: 17.6,
  wins: 20.61,
  decade: 22.42,
  title: 28.06,
};
