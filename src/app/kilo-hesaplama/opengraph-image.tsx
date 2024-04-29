import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export function generateImageMetadata() {
  return [
    {
      id: "og",
      alt: "Kilo Hesaplama",
      size,
      contentType: "image/png",
    },
  ];
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "rgb(23,23,23) linear-gradient(180deg, rgba(23,23,23,1) 0%, rgba(30,27,75,1) 100%)",
          width: "100%",
          height: "100%",
          color: "white",
          fontSize: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "1rem",
            background: "rgba(0,0,0,0.7)",
            padding: "2rem",
            maxWidth: "90%",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              paddingBottom: "2rem",
            }}
          >
            Kilo Hesaplama
          </div>
          <div>İdeal kilonuzu hesaplamak için boyunuzu yazınız.</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
