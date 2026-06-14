import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(4,5,11,1), rgba(22,27,38,1), rgba(212,177,106,0.95))",
          color: "white",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        CC
      </div>
    ),
    size,
  );
}
