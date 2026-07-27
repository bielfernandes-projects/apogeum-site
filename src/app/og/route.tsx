import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Apogeum Digital
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#d4a843",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Sua Marca no Topo.
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Sites institucionais de alta performance, codados do zero.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
