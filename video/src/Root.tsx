import { Composition, Still } from "remotion";
import { PrizeShort } from "./PrizeShort";
import { PrizeThumb } from "./PrizeThumb";
import { PrizeVideo, VIDEO_SECONDS } from "./PrizeVideo";
import { AUDIO_SECONDS, OUTRO_SECONDS } from "./prize-timing";

export const FPS = 30;

export const Root = () => (
  <>
    <Composition
      id="PrizeShort"
      component={PrizeShort}
      width={1080}
      height={1920}
      fps={FPS}
      durationInFrames={Math.ceil((AUDIO_SECONDS + OUTRO_SECONDS) * FPS)}
    />
    <Composition
      id="PrizeVideo"
      component={PrizeVideo}
      width={1920}
      height={1080}
      fps={FPS}
      durationInFrames={Math.ceil(VIDEO_SECONDS * FPS)}
    />
    <Still id="PrizeThumb" component={PrizeThumb} width={1280} height={720} />
  </>
);
