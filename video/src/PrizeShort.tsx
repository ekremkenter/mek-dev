import type { ReactNode } from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { background, c, display, mono, Scene, sans, useT } from "./theme";
import { AUDIO_SECONDS, beat, pages } from "./prize-timing";

const Eyebrow = () => (
  <div
    style={{
      position: "absolute",
      top: 150,
      left: 90,
      fontFamily: mono,
      fontSize: 30,
      letterSpacing: "0.18em",
      color: c.accentStrong,
    }}
  >
    ESSAY · MEK.DEV
  </div>
);

export const Clock = () => (
  <Scene from={0} to={beat.boardIn - 0.3}>
    <div style={{ position: "absolute", top: 600, width: "100%", textAlign: "center" }}>
      <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 250, color: c.ink, letterSpacing: "-0.02em" }}>23:40</div>
    </div>
  </Scene>
);

const BoardRow = ({ time, dest, status, alert }: { time: string; dest: string; status: ReactNode; alert?: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 36,
      padding: "26px 30px",
      borderTop: `2px solid #2a3532`,
      background: alert ? `rgba(242, 184, 75, ${0.14 * alert})` : undefined,
      borderRadius: alert ? 12 : 0,
      fontFamily: mono,
      fontSize: 50,
      color: c.boardText,
    }}
  >
    <span style={{ color: "#f3f6f5", width: 170 }}>{time}</span>
    <span style={{ flex: 1 }}>{dest}</span>
    <span>{status}</span>
  </div>
);

export const Board = () => {
  const { ramp, pop } = useT();
  const flip = ramp(beat.cancelled, 0.3);
  const status = (
    <span style={{ display: "inline-block", transform: `scaleY(${Math.abs(1 - 2 * flip)})` }}>
      {flip < 0.5 ? (
        <span>ON TIME</span>
      ) : (
        <span style={{ color: c.amber, fontWeight: 500 }}>CANCELLED</span>
      )}
    </span>
  );
  const chip = (at: number, label: string) => (
    <div
      style={{
        opacity: ramp(at, 0.3),
        transform: `scale(${0.85 + 0.15 * pop(at)})`,
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "18px 28px",
        border: `2px solid ${c.line}`,
        borderRadius: 999,
        fontFamily: sans,
        fontWeight: 500,
        fontSize: 40,
        color: c.soft,
      }}
    >
      <span style={{ color: c.amber, fontFamily: mono }}>✕</span>
      <span style={{ textDecoration: "line-through", textDecorationColor: c.faint }}>{label}</span>
    </div>
  );
  return (
    <Scene from={beat.boardIn} to={beat.phoneIn - 0.2}>
      <div
        style={{
          position: "absolute",
          top: 330,
          left: 90,
          width: 860,
          background: c.board,
          border: `2px solid ${c.line}`,
          borderRadius: 28,
          padding: "26px 20px 18px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 36,
            padding: "6px 30px 20px",
            fontFamily: mono,
            fontSize: 26,
            letterSpacing: "0.14em",
            color: "#7f938d",
          }}
        >
          <span style={{ width: 170 }}>TIME</span>
          <span style={{ flex: 1 }}>DESTINATION</span>
          <span>STATUS</span>
        </div>
        <BoardRow time="23:05" dest="NEW YORK" status="BOARDING" />
        <BoardRow time="23:40" dest="TORONTO" status={status} alert={flip >= 0.5 ? 1 : 0} />
        <BoardRow time="23:55" dest="SINGAPORE" status="ON TIME" />
      </div>
      <div style={{ position: "absolute", top: 830, left: 90, display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
        {chip(beat.noApp, "The airline's app")}
        {chip(beat.noQueue, "The transfer desk queue")}
      </div>
    </Scene>
  );
};

const Bubble = ({ at, side, children, glow = 0 }: { at: number; side: "in" | "out"; children: ReactNode; glow?: number }) => {
  const { ramp, pop } = useT();
  const p = pop(at);
  return (
    <div
      style={{
        alignSelf: side === "out" ? "flex-end" : "flex-start",
        maxWidth: 600,
        opacity: ramp(at, 0.2),
        transform: `translateY(${(1 - p) * 30}px) scale(${0.9 + 0.1 * p})`,
        transformOrigin: side === "out" ? "right bottom" : "left bottom",
        padding: "26px 34px",
        borderRadius: 34,
        background: side === "out" ? c.accent : c.bubble,
        color: side === "out" ? c.bg : c.ink,
        border: side === "in" ? `2px solid ${c.line}` : undefined,
        boxShadow: glow ? `0 0 ${60 * glow}px rgba(70, 194, 177, ${0.45 * glow})` : undefined,
        fontFamily: sans,
        fontWeight: 500,
        fontSize: 46,
        lineHeight: 1.3,
      }}
    >
      {children}
    </div>
  );
};

const Typing = () => {
  const { t, ramp } = useT();
  if (t < beat.typing || t > beat.reply) return null;
  return (
    <div
      style={{
        alignSelf: "flex-start",
        opacity: ramp(beat.typing, 0.2),
        display: "flex",
        gap: 14,
        padding: "30px 36px",
        borderRadius: 34,
        background: c.bubble,
        border: `2px solid ${c.line}`,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            background: c.soft,
            opacity: 0.35 + 0.65 * Math.max(0, Math.sin((t - beat.typing) * 7 - i * 0.9)),
          }}
        />
      ))}
    </div>
  );
};

export const Chat = () => {
  const { t, ramp } = useT();
  const glow = ramp(beat.wins, 0.3) * (1 - ramp(beat.wins + 1.2, 0.6));
  const stamp = (at: number, text: string, side: "in" | "out") => (
    <div
      style={{
        alignSelf: side === "out" ? "flex-end" : "flex-start",
        opacity: ramp(at, 0.3),
        fontFamily: mono,
        fontSize: 28,
        color: c.faint,
        margin: "-6px 12px 0",
      }}
    >
      {text}
    </div>
  );
  return (
    <Scene from={beat.phoneIn} to={beat.decade - 0.2}>
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 110,
          width: 820,
          height: 780,
          borderRadius: 48,
          border: `2px solid ${c.line}`,
          background: c.surface,
          padding: "34px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <div style={{ textAlign: "center", fontFamily: mono, fontSize: 28, color: c.faint, letterSpacing: "0.14em", marginBottom: 10 }}>
          {t < beat.reply ? "23:40" : "23:41"} · ASSISTANT
        </div>
        {t >= beat.ask && <Bubble at={beat.ask} side="out">Get me to Toronto by tomorrow night.</Bubble>}
        {t >= beat.ask && stamp(beat.ask, "23:40", "out")}
        <Typing />
        {t >= beat.reply && (
          <Bubble at={beat.reply} side="in" glow={glow}>
            Done. 07:15 tomorrow, seat 24A, hotel booked.
          </Bubble>
        )}
        {t >= beat.reply && stamp(beat.reply, "23:41", "in")}
      </div>
    </Scene>
  );
};

const Decade = () => {
  const { ramp, pop } = useT();
  const pill = (at: number, label: string) => (
    <span
      style={{
        opacity: ramp(at, 0.3),
        transform: `scale(${0.8 + 0.2 * pop(at)})`,
        display: "inline-block",
        padding: "16px 34px",
        borderRadius: 999,
        border: `2px solid ${c.accent}`,
        color: c.accentStrong,
        fontFamily: mono,
        fontSize: 40,
        letterSpacing: "0.12em",
      }}
    >
      {label}
    </span>
  );
  return (
    <Scene from={beat.decade} to={beat.title - 0.2}>
      <div style={{ position: "absolute", top: 420, left: 90, width: 860 }}>
        <div style={{ fontFamily: mono, fontSize: 34, color: c.faint, letterSpacing: "0.16em" }}>MY INDUSTRY SPENT</div>
        <div style={{ fontFamily: display, fontWeight: 700, fontSize: 120, lineHeight: 1.02, color: c.ink, marginTop: 18 }}>
          A decade rebuilding how airlines sell
        </div>
        <div style={{ display: "flex", gap: 22, marginTop: 50 }}>
          {pill(beat.decade + 3.2, "OFFERS")}
          {pill(beat.decade + 3.9, "ORDERS")}
        </div>
      </div>
    </Scene>
  );
};

const Title = () => {
  const { t, ramp } = useT();
  const outro = ramp(AUDIO_SECONDS - 0.1, 0.5);
  return (
    <Scene from={beat.title} to={999}>
      <div style={{ position: "absolute", top: 400, left: 90, width: 880 }}>
        <div style={{ fontFamily: mono, fontSize: 32, color: c.accentStrong, letterSpacing: "0.16em" }}>AN ESSAY</div>
        <div style={{ fontFamily: display, fontWeight: 700, fontSize: 132, lineHeight: 1, color: c.ink, marginTop: 22 }}>
          The Prize Comes After the Order
        </div>
        <div style={{ width: 120, height: 8, background: c.accent, borderRadius: 4, marginTop: 44, transform: `scaleX(${ramp(beat.title + 0.4, 0.6)})`, transformOrigin: "left" }} />
        {t >= AUDIO_SECONDS - 0.1 && (
          <div style={{ opacity: outro, transform: `translateY(${(1 - outro) * 24}px)`, marginTop: 70 }}>
            <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 44, color: c.soft }}>Read it, or listen (8 min):</div>
            <div style={{ fontFamily: mono, fontWeight: 500, fontSize: 64, color: c.accentStrong, marginTop: 14 }}>mek.dev/blog</div>
            <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 40, color: c.ink, marginTop: 70 }}>Mustafa Ekrem Kenter</div>
            <div style={{ fontFamily: sans, fontSize: 30, color: c.faint, marginTop: 10 }}>Narrated by an AI clone of my voice.</div>
          </div>
        )}
      </div>
    </Scene>
  );
};

const Captions = () => {
  const { t } = useT();
  if (t > AUDIO_SECONDS) return null;
  const page = pages.find((p, i) => t >= p[0].start - 0.05 && t < (pages[i + 1]?.[0].start ?? p[p.length - 1].end + 0.6));
  if (!page) return null;
  return (
    <div
      style={{
        position: "absolute",
        top: 1200,
        left: 90,
        width: 860,
        textAlign: "center",
        fontFamily: sans,
        fontWeight: 800,
        fontSize: 70,
        lineHeight: 1.15,
        textShadow: "0 4px 24px rgba(0,0,0,0.6)",
      }}
    >
      {page.map((w, i) => (
        <span key={i} style={{ color: t >= w.start ? (t < w.end ? c.accentStrong : c.ink) : "rgba(227,236,233,0.45)" }}>
          {w.text}
          {i < page.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
};

export const PrizeShort = () => (
  <AbsoluteFill style={{ background }}>
    <Audio src={staticFile("prize-short.mp3")} />
    <Eyebrow />
    <Clock />
    <Board />
    <Chat />
    <Decade />
    <Title />
    <Captions />
  </AbsoluteFill>
);
