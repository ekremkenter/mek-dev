// YouTube thumbnail for the long video, 1280x720
import { AbsoluteFill } from "remotion";
import { background, c, display, mono, sans } from "./theme";

const Row = ({ time, dest, status, alert, first }: { time: string; dest: string; status: string; alert?: boolean; first?: boolean }) => (
  <div
    style={{
      display: "flex",
      gap: 22,
      padding: "16px 20px",
      whiteSpace: "nowrap",
      borderTop: first ? "none" : "2px solid #2a3532",
      background: alert ? "rgba(242, 184, 75, 0.16)" : undefined,
      borderRadius: alert ? 10 : 0,
      fontFamily: mono,
      fontSize: 31,
      color: c.boardText,
    }}
  >
    <span style={{ color: "#f3f6f5", width: 96 }}>{time}</span>
    <span style={{ flex: 1 }}>{dest}</span>
    <span style={{ color: alert ? c.amber : undefined, fontWeight: alert ? 500 : 400 }}>{status}</span>
  </div>
);

export const PrizeThumb = () => (
  <AbsoluteFill style={{ background }}>
    <div style={{ position: "absolute", left: 70, top: 0, bottom: 0, width: 560, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontFamily: mono, fontSize: 24, letterSpacing: "0.16em", color: c.accentStrong }}>ESSAY · MEK.DEV</div>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 92, lineHeight: 0.98, color: c.ink, marginTop: 18 }}>
        The Prize Comes After the Order
      </div>
      <div style={{ width: 110, height: 9, borderRadius: 5, background: c.accent, marginTop: 34 }} />
    </div>
    <div style={{ position: "absolute", right: 56, top: 120, width: 600 }}>
      <div style={{ background: c.board, border: `2px solid ${c.line}`, borderRadius: 22, padding: "16px 12px 10px" }}>
        <Row time="23:05" dest="NEW YORK" status="BOARDING" first />
        <Row time="23:40" dest="TORONTO" status="CANCELLED" alert />
        <Row time="23:55" dest="SINGAPORE" status="ON TIME" />
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: 30 }}>
        <div
          style={{
            padding: "18px 26px",
            borderRadius: 26,
            background: c.bubble,
            border: `2px solid ${c.line}`,
            boxShadow: "0 0 50px rgba(70, 194, 177, 0.35)",
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 34,
            lineHeight: 1.25,
            color: c.ink,
          }}
        >
          Done. 07:15 tomorrow,
          <br />
          seat 24A, hotel booked.
        </div>
        <span style={{ fontFamily: mono, fontSize: 26, color: c.faint, paddingBottom: 8 }}>23:41</span>
      </div>
    </div>
  </AbsoluteFill>
);
