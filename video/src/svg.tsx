// Turns an SVG string (the essay's figures) into React elements, so it renders
// inline and picks up the page's CSS and fonts. Scripts, foreignObject and
// on* handlers are dropped rather than passed through.
import type { ReactNode } from "react";

const camel = (s: string) => s.replace(/[-:]([a-z])/g, (_, ch: string) => ch.toUpperCase());

const styleObject = (css: string) =>
  Object.fromEntries(
    css
      .split(";")
      .map((d) => d.split(":").map((x) => x.trim()))
      .filter(([k, v]) => k && v)
      .map(([k, v]) => [camel(k), v]),
  );

const toReact = (node: Node, key: number): ReactNode => {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const el = node as Element;
  const tag = el.tagName;
  if (/^(script|foreignObject)$/i.test(tag)) return null;
  const props: Record<string, unknown> = { key };
  for (const { name, value } of Array.from(el.attributes)) {
    if (/^on/i.test(name) || /^xmlns/.test(name)) continue;
    if (name === "class") props.className = value;
    else if (name === "style") props.style = styleObject(value);
    else if (/^(data|aria)-/.test(name)) props[name] = value;
    else props[camel(name)] = value;
  }
  const children = Array.from(el.childNodes).map(toReact);
  const Tag = tag as unknown as React.ElementType;
  return <Tag {...props}>{children.length ? children : undefined}</Tag>;
};

export const InlineSvg = ({ markup, width }: { markup: string; width: string }) => {
  const doc = new DOMParser().parseFromString(markup, "image/svg+xml");
  const root = doc.documentElement;
  root.setAttribute("width", width);
  return <>{toReact(root, 0)}</>;
};
