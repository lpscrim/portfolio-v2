import { ImageResponse } from "next/og";

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#141414",
          color: "#fdfdfc",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#6C9A8B" }}>
          lpscrim.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
            Web Design &amp; Development
          </div>
          <div style={{ display: "flex", fontSize: 36, marginTop: 32, color: "#EED2CC" }}>
            Fast, modern websites built with Next.js &amp; React
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 40, justifyContent: "space-between" }}>
          <span>Lewis Scrimgeour</span>
          <span style={{ color: "#E8998D" }}>Isle of Skye · Scotland · UK</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
