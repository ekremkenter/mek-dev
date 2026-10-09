// The full "The Prize Comes After the Order" as a 16:9 video essay: a cold
// open built from the Short's scenes, a title card, then every sentence on
// screen as it is spoken, with chapter cards, the essay's two figures, its
// stats and its five recommendations. Timings come from prize-script.json
// (scripts/build-prize.mjs).
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import script from "./prize-script.json";
import { Board, Chat, Clock } from "./PrizeShort";
import { InlineSvg } from "./svg";
import { background, c, display, mono, sans, useT } from "./theme";

type Word = { t: string; s: number; e: number; b?: boolean };
type Sentence = { words: Word[]; start: number; end: number };
type Heading = { type: "heading"; text: string; section: string; start: number; end: number };
type Para = { type: "para"; section: string; sentences: Sentence[]; start: number; end: number; list?: number; lead?: string };
type Block = Heading | Para | { type: "figure"; figure: number; section: string };

const blocks = script.blocks as Block[];
const paras = blocks.filter((b): b is Para => b.type === "para");
const headings = blocks.filter((b): b is Heading => b.type === "heading");
const listItems = paras.filter((p) => p.list);

const { coldOpen, titleCardSeconds, audioEnd, figures, figCss, title } = script;
export const COLD_SECONDS = coldOpen.audioTo - coldOpen.audioFrom;
export const BODY_FROM = COLD_SECONDS + titleCardSeconds;
export const BODY_SECONDS = audioEnd + 0.6 - coldOpen.audioTo;
export const OUTRO_SECONDS = 7;
export const VIDEO_SECONDS = BODY_FROM + BODY_SECONDS + OUTRO_SECONDS;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

// figures stay up from the paragraph that sets them up to the section's end
const firstWords = (p: Para) => p.sentences[0].words.map((w) => w.t).join(" ");
const figureWindows = [
  { figure: 0, from: paras.find((p) => firstWords(p).startsWith("That's the finding"))!.start },
  { figure: 1, from: paras.find((p) => firstWords(p).startsWith("Two uncertainties"))!.start },
].map((w) => {
  const next = headings.find((h) => h.start > w.from);
  return { ...w, to: next ? next.start - 0.3 : audioEnd };
});

/* ---------- pieces ---------- */

const Header = ({ section }: { section?: string }) => (
  <div style={{ position: "absolute", top: 64, left: 120, display: "flex", gap: 22, fontFamily: mono, fontSize: 24, letterSpacing: "0.16em" }}>
    <span style={{ color: c.accentStrong }}>MEK.DEV · ESSAY</span>
    {section && <span style={{ color: c.faint }}>/ {section.toUpperCase()}</span>}
  </div>
);

// the sentence being read, sized to fit its box, words lit as they're spoken
const Spoken = ({ sentence, a, width, height, maxFont }: { sentence: Sentence; a: number; width: number; height: number; maxFont: number }) => {
  const chars = sentence.words.reduce((n, w) => n + w.t.length + 1, 0);
  const fontSize = Math.floor(Math.min(maxFont, Math.sqrt((height * width) / (chars * 0.5 * 1.28))));
  const fade = clamp01((a - sentence.start + 0.25) / 0.25);
  return (
    <div style={{ width, opacity: fade, fontFamily: sans, fontWeight: 600, fontSize, lineHeight: 1.22, letterSpacing: "-0.01em" }}>
      {sentence.words.map((w, i) => {
        const spoken = a >= w.s;
        const now = spoken && a < w.e;
        const color = now ? c.accentStrong : spoken ? (w.b ? c.accentStrong : c.ink) : "rgba(227,236,233,0.28)";
        return (
          <span key={i} style={{ color, fontWeight: w.b ? 800 : 600 }}>
            {w.t}
            {i < sentence.words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </div>
  );
};

const ChapterCard = ({ heading, a }: { heading: Heading; a: number }) => {
  const k = clamp01((a - heading.start + 0.3) / 0.4);
  const n = headings.indexOf(heading) + 1;
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 160px", opacity: k }}>
      <div style={{ fontFamily: mono, fontSize: 40, color: c.accentStrong, letterSpacing: "0.16em" }}>
        {String(n).padStart(2, "0")} / {String(headings.length).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: display,
          fontWeight: 700,
          fontSize: 132,
          lineHeight: 1.02,
          color: c.ink,
          marginTop: 28,
          maxWidth: 1500,
          transform: `translateY(${(1 - k) * 30}px)`,
        }}
      >
        {heading.text}
      </div>
      <div style={{ width: 140, height: 8, borderRadius: 4, background: c.accent, marginTop: 48, transform: `scaleX(${k})`, transformOrigin: "left" }} />
    </AbsoluteFill>
  );
};

const FigurePanel = ({ figure, k }: { figure: number; k: number }) => {
  const f = figures[figure];
  return (
    <div style={{ opacity: k, transform: `translateX(${(1 - k) * 40}px)`, width: 1200 }}>
      <div className="fig-host" style={{ background: c.surface, border: `2px solid ${c.line}`, borderRadius: 22, padding: 18 }}>
        <InlineSvg markup={f.svg} width="100%" />
      </div>
      <div style={{ fontFamily: sans, fontSize: 22, lineHeight: 1.45, color: c.faint, marginTop: 18 }}>{f.caption}</div>
    </div>
  );
};

const ListPanel = ({ a }: { a: number }) => (
  <div style={{ width: 720, display: "grid", gap: 26 }}>
    {listItems.map((p, i) => {
      const shown = a >= p.start - 0.3;
      const next = listItems[i + 1];
      const active = shown && (!next || a < next.start - 0.3);
      return (
        <div key={p.list} style={{ display: "flex", gap: 24, opacity: shown ? (active ? 1 : 0.55) : 0.12 }}>
          <span style={{ fontFamily: mono, fontSize: 30, color: active ? c.accentStrong : c.faint, paddingTop: 6 }}>
            {String(p.list).padStart(2, "0")}
          </span>
          <span style={{ fontFamily: display, fontWeight: 700, fontSize: active ? 46 : 38, lineHeight: 1.12, color: active ? c.ink : c.soft }}>
            {(p.lead ?? "").replace(/\.$/, "")}
          </span>
        </div>
      );
    })}
  </div>
);

// a bold stat inside a sentence, e.g. "21.5% of US agency transactions"
const StatPanel = ({ words, k }: { words: Word[]; k: number }) => {
  const [head, ...rest] = words.map((w) => w.t.replace(/[,.]$/, ""));
  return (
    <div style={{ width: 640, opacity: k, transform: `scale(${0.92 + 0.08 * k})`, transformOrigin: "left center" }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 230, lineHeight: 0.95, color: c.accentStrong }}>{head}</div>
      {rest.length > 0 && <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 46, color: c.soft, marginTop: 18 }}>{rest.join(" ")}</div>}
    </div>
  );
};

const Column = ({ left, right, children }: { left?: number; right?: number; children: React.ReactNode }) => (
  <div style={{ position: "absolute", left, right, top: 0, bottom: 0, display: "flex", alignItems: "center" }}>{children}</div>
);

/* ---------- segments ---------- */

const ColdOpen = () => {
  const { t } = useT();
  const a = t + coldOpen.audioFrom;
  const sentence = paras
    .flatMap((p) => p.sentences)
    .filter((s) => s.start < coldOpen.audioTo && s.start <= a + 0.15)
    .at(-1);
  return (
    <AbsoluteFill>
      <Header />
      {/* the Short's 1080x1920 scenes, scaled into the left half */}
      <div style={{ position: "absolute", left: 70, top: 150, width: 1080, height: 1920, transform: "scale(0.72)", transformOrigin: "top left" }}>
        <Clock />
        <Board />
        <Chat />
      </div>
      <Column left={950}>{sentence && <Spoken key={sentence.start} sentence={sentence} a={a} width={850} height={620} maxFont={64} />}</Column>
    </AbsoluteFill>
  );
};

const TitleCard = () => {
  const { ramp } = useT();
  const k = ramp(0, 0.5);
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 160px", opacity: k * (1 - ramp(titleCardSeconds - 0.35, 0.35)) }}>
      <div style={{ fontFamily: mono, fontSize: 32, color: c.accentStrong, letterSpacing: "0.16em" }}>AN ESSAY BY MUSTAFA EKREM KENTER</div>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 170, lineHeight: 0.98, color: c.ink, marginTop: 30, maxWidth: 1500, transform: `translateY(${(1 - k) * 30}px)` }}>
        {title}
      </div>
      <div style={{ width: 160, height: 10, borderRadius: 5, background: c.accent, marginTop: 56, transform: `scaleX(${ramp(0.3, 0.6)})`, transformOrigin: "left" }} />
    </AbsoluteFill>
  );
};

const Body = () => {
  const { t } = useT();
  const a = t + coldOpen.audioTo;
  const heading = headings.find((h) => a >= h.start - 0.3 && a < h.start + 2.6);
  const para = paras.filter((p) => p.start >= coldOpen.audioTo - 0.5 && p.start <= a + 0.15).at(-1);
  const sentence = para?.sentences.filter((s) => s.start <= a + 0.15).at(-1) ?? para?.sentences[0];
  const section = [...headings].reverse().find((h) => h.start <= a + 0.3)?.text;

  if (heading) {
    return (
      <AbsoluteFill>
        <Header />
        <ChapterCard heading={heading} a={a} />
      </AbsoluteFill>
    );
  }
  if (!para || !sentence) return <Header section={section} />;

  const fig = figureWindows.find((w) => a >= w.from - 0.2 && a < w.to);
  const bold = para.list ? [] : sentence.words.filter((w) => w.b);
  const spoken = (width: number, height: number, maxFont: number) => (
    <Spoken key={sentence.start} sentence={sentence} a={a} width={width} height={height} maxFont={maxFont} />
  );

  let layout;
  if (fig) {
    layout = (
      <>
        <Column left={110}>{spoken(470, 680, 46)}</Column>
        <Column right={90}>
          <FigurePanel figure={fig.figure} k={clamp01((a - fig.from + 0.2) / 0.5)} />
        </Column>
      </>
    );
  } else if (para.list) {
    layout = (
      <>
        <Column left={120}>
          <ListPanel a={a} />
        </Column>
        <Column left={960}>{spoken(840, 640, 58)}</Column>
      </>
    );
  } else if (bold.length) {
    layout = (
      <>
        <Column left={120}>{spoken(900, 640, 60)}</Column>
        <Column left={1150}>
          <StatPanel words={bold} k={clamp01((a - sentence.start + 0.2) / 0.4)} />
        </Column>
      </>
    );
  } else {
    layout = (
      <Column left={160} right={160}>
        {spoken(1600, 600, 80)}
      </Column>
    );
  }

  return (
    <AbsoluteFill>
      <Header section={section} />
      {layout}
    </AbsoluteFill>
  );
};

const Outro = () => {
  const { ramp } = useT();
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 160px", opacity: ramp(0.1, 0.6) }}>
      <div style={{ fontFamily: mono, fontSize: 30, color: c.accentStrong, letterSpacing: "0.16em" }}>READ IT, OR LISTEN</div>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 120, lineHeight: 1, color: c.ink, marginTop: 26, maxWidth: 1500 }}>{title}</div>
      <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 40, color: c.soft, marginTop: 40 }}>
        The essay, its 8-minute narration and the 39-minute research report behind it:
      </div>
      <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 64, color: c.accentStrong, marginTop: 18 }}>mek.dev/blog</div>
      <div style={{ display: "flex", gap: 40, alignItems: "baseline", marginTop: 80 }}>
        <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 38, color: c.ink }}>Mustafa Ekrem Kenter</span>
        <span style={{ fontFamily: sans, fontSize: 28, color: c.faint }}>Narrated by an AI clone of my voice.</span>
      </div>
    </AbsoluteFill>
  );
};

// thin progress line with a tick at each chapter
const Progress = () => {
  const { t } = useT();
  const ticks = [COLD_SECONDS, ...headings.map((h) => h.start - coldOpen.audioTo + BODY_FROM)];
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 6, background: c.line }}>
      <div style={{ width: `${(100 * t) / VIDEO_SECONDS}%`, height: "100%", background: c.accent }} />
      {ticks.map((x) => (
        <div key={x} style={{ position: "absolute", left: `${(100 * x) / VIDEO_SECONDS}%`, top: 0, width: 4, height: 6, background: c.bg }} />
      ))}
    </div>
  );
};

/* ---------- composition ---------- */

export const PrizeVideo = () => {
  const { fps } = useVideoConfig();
  const f = (s: number) => Math.round(s * fps);
  const audio = staticFile("prize-full.mp3");
  // the site's figure palette, with the dark theme's values
  const css =
    `.fig-host{--mek-ink:${c.ink};--mek-soft:${c.soft};--mek-faint:${c.faint};--mek-line:${c.line};` +
    `--mek-line-strong:${c.lineStrong};--mek-accent:${c.accent};--mek-surface:${c.surface};` +
    `--font-sans:${sans};--font-display:${display};--font-mono:${mono};}${figCss}`;
  return (
    <AbsoluteFill style={{ background }}>
      <style>{css}</style>
      <Sequence durationInFrames={f(COLD_SECONDS)}>
        <Audio src={audio} trimBefore={f(coldOpen.audioFrom)} trimAfter={f(coldOpen.audioTo)} />
        <ColdOpen />
      </Sequence>
      <Sequence from={f(COLD_SECONDS)} durationInFrames={f(titleCardSeconds)}>
        <Audio src={audio} trimBefore={0} trimAfter={f(script.titleAudio[1] + 0.25)} />
        <TitleCard />
      </Sequence>
      <Sequence from={f(BODY_FROM)} durationInFrames={f(BODY_SECONDS)}>
        <Audio src={audio} trimBefore={f(coldOpen.audioTo)} />
        <Body />
      </Sequence>
      <Sequence from={f(BODY_FROM + BODY_SECONDS)}>
        <Outro />
      </Sequence>
      <Progress />
    </AbsoluteFill>
  );
};
