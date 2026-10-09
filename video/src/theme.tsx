// mek.dev's dark theme, fonts and animation helpers shared by the videos
import type { CSSProperties, ReactNode } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/BricolageGrotesque";
import { loadFont as loadSans } from "@remotion/google-fonts/PublicSans";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

export const display = loadDisplay("normal", { weights: ["700"], subsets: ["latin"] }).fontFamily;
export const sans = loadSans("normal", { weights: ["400", "500", "600", "800"], subsets: ["latin"] }).fontFamily;
export const mono = loadMono("normal", { weights: ["400", "500"], subsets: ["latin"] }).fontFamily;

export const c = {
  bg: "#0e1514",
  surface: "#141d1b",
  bubble: "#1c2725",
  ink: "#e3ece9",
  soft: "#a0b2ad",
  faint: "#7d8f8a",
  line: "#253230",
  lineStrong: "#55665f",
  accent: "#46c2b1",
  accentStrong: "#74d6c8",
  board: "#111a18",
  boardText: "#cfdcd8",
  amber: "#f2b84b",
};

export const background = `radial-gradient(1200px 900px at 50% 30%, #13201d 0%, ${c.bg} 70%)`;

// time in seconds within the current Sequence, plus ramps and springs on it
export const useT = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const ramp = (at: number, dur = 0.4) =>
    interpolate(t, [at, at + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pop = (at: number) => spring({ frame: frame - at * fps, fps, config: { damping: 16, stiffness: 140 } });
  return { t, ramp, pop };
};

// fades and slides its children in at `from` and out at `to` (seconds)
export const Scene = ({
  from,
  to,
  children,
  style,
}: {
  from: number;
  to: number;
  children: ReactNode;
  style?: CSSProperties;
}) => {
  const { t, ramp } = useT();
  if (t < from - 0.01 || t > to + 0.5) return null;
  const opacity = ramp(from, 0.35) * (1 - ramp(to, 0.35));
  const y = (1 - ramp(from, 0.45)) * 40 - ramp(to, 0.35) * 40;
  return <AbsoluteFill style={{ opacity, transform: `translateY(${y}px)`, ...style }}>{children}</AbsoluteFill>;
};
