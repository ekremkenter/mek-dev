import { Composition } from "remotion";
import { PrizeShort } from "./PrizeShort";
import { AUDIO_SECONDS, OUTRO_SECONDS } from "./prize-timing";

export const FPS = 30;

export const Root = () => (
  <Composition
    id="PrizeShort"
    component={PrizeShort}
    width={1080}
    height={1920}
    fps={FPS}
    durationInFrames={Math.ceil((AUDIO_SECONDS + OUTRO_SECONDS) * FPS)}
  />
);
