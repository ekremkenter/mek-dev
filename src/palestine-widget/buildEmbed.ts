import { build } from "esbuild";
import postCSS from "esbuild-postcss";
import { config as configEnv } from "dotenv";

configEnv();

build({
  entryPoints: ["./src/palestine-widget/entry.tsx"],
  outfile: "public/palestine/widget.js",
  bundle: true,
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  sourcemap: false,
  jsx: "automatic",
  write: true,
  logLevel: "info",
  define: {
    "process.env": JSON.stringify({}),
  },
})
  .then(console.log)
  .catch(console.error);

build({
  entryPoints: ["./src/palestine-widget/root.css"],
  outfile: "public/palestine/widget.css",
  bundle: true,
  minify: true,
  external: ["*.svg"],
  logLevel: "info",
  plugins: [postCSS()],
})
  .then(console.log)
  .catch(console.error);
