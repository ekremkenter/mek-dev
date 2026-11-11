// Renders a card template (HTML) to a PNG with headless Chrome, using the
// site's own fonts from node_modules.
//   pnpm card scripts/cards/<name>.wide.html public/og/<post id>.png            1200×630 link preview
//   pnpm card scripts/cards/<name>.square.html public/social/<post id>-square.png 1200 1200
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const [template, out, width = "1200", height = "630"] = process.argv.slice(2);
if (!template || !out) {
  console.error("usage: pnpm card <template.html> <out.png> [width height]");
  process.exit(2);
}
const fontsource = pathToFileURL(path.resolve("node_modules/@fontsource")).href;
const html = readFileSync(template, "utf8").replaceAll("{{fontsource}}", fontsource);
const page = path.join(mkdtempSync(path.join(tmpdir(), "card-")), "card.html");
writeFileSync(page, html);
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--allow-file-access-from-files",
  "--force-device-scale-factor=1",
  `--window-size=${width},${height}`,
  `--screenshot=${path.resolve(out)}`,
  pathToFileURL(page).href,
], { stdio: "ignore" });
console.log(`${out}: ${width}×${height}`);
