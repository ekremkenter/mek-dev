// Wraps markdown tables in a scrollable container so wide research tables
// scroll sideways on phones instead of breaking the layout.
export default function rehypeWrapTables() {
  const wrap = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === "element" && child.tagName === "table") {
        return {
          type: "element",
          tagName: "div",
          properties: { className: ["table-wrap"] },
          children: [child],
        };
      }
      wrap(child);
      return child;
    });
  };
  return (tree) => wrap(tree);
}
