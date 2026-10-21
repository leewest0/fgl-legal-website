import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { firm } from "@/lib/content";

export const ogSize = { width: 1200, height: 630 };

const root = process.cwd();
const asset = (p: string) => readFile(path.join(root, p));

export async function renderOgImage({
  kicker,
  title,
  byline,
}: {
  kicker: string;
  title: string;
  byline: string;
}) {
  const [fraunces, inter, icon] = await Promise.all([
    asset("assets/fonts/Fraunces-SemiBold.ttf"),
    asset("assets/fonts/Inter-SemiBold.ttf"),
    asset("app/icon.png"),
  ]);
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;
  const titleSize = title.length > 80 ? 54 : title.length > 50 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#072a1d",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(21,121,74,0.55), transparent 55%)",
          color: "#f5f1e7",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -20,
            top: 40,
            fontFamily: "Fraunces",
            fontSize: 560,
            lineHeight: 1,
            color: "#c1962f",
            opacity: 0.12,
          }}
        >
          {"}"}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={64} height={64} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, letterSpacing: 1 }}>{firm.name}</span>
            <span style={{ fontSize: 15, letterSpacing: 5, color: "#c1962f" }}>
              {firm.chambers.toUpperCase()}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 40, height: 2, backgroundColor: "#c1962f" }} />
            <span style={{ fontSize: 20, letterSpacing: 5, color: "#c1962f" }}>
              {kicker.toUpperCase()}
            </span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontFamily: "Fraunces",
              fontSize: titleSize,
              lineHeight: 1.12,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(245,241,231,0.18)",
            paddingTop: 24,
            fontSize: 22,
            color: "rgba(245,241,231,0.75)",
          }}
        >
          <span>{byline}</span>
          <span style={{ color: "#c1962f" }}>
            {firm.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 600, style: "normal" },
      ],
    },
  );
}
