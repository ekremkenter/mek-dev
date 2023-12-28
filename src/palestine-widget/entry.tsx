import { StrictMode } from "react";
import Banner, { BannerProps } from "@/components/banner";
import { createRoot } from "react-dom/client";

type Props = BannerProps | {};
let container = document.getElementById(`palestine-container`);
if (!container) {
  container = document.createElement("div");
  container.id = `palestine-container`;
  document.body.appendChild(container);
}

const data: Props = JSON.parse(
  document.currentScript?.getAttribute("data-config") || "{}",
);

container.attachShadow({ mode: "open" });

if (container.shadowRoot !== null) {
  const wrapper = document.createElement("div");
  wrapper.id = `palestine-wrapper`;

  const baseUrl = document.currentScript?.baseURI;

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = baseUrl + "/widget.css";
  container.shadowRoot.appendChild(style);

  const span = document.createElement("span");
  container.appendChild(span);
  container.shadowRoot.appendChild(wrapper);

  document.body.style.paddingTop = "68px";

  const root = createRoot(wrapper);

  root.render(
    <StrictMode>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
        }}
      >
        <Banner {...data} />
      </div>
    </StrictMode>,
  );
}
