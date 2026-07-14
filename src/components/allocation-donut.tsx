"use client";

import { useState } from "react";

// Categorical palette, validated for the dark surface with the skill's
// validate_palette.js (mode dark): worst adjacent CVD ΔE 41.3, all in the
// L 0.48–0.67 band, all ≥ 3:1 contrast. Fixed order — never cycled.
const COLORS = ["#c98500", "#199e70", "#3987e5", "#d55181", "#9085e9"];

export type AllocationSlice = {
  label: string;
  percent: number;
  note: string;
};

type AllocationDonutProps = {
  slices: readonly AllocationSlice[];
  centerTop: string;
  centerBottom: string;
};

export function AllocationDonut({
  slices,
  centerTop,
  centerBottom,
}: AllocationDonutProps) {
  const [active, setActive] = useState<number | null>(null);

  const size = 260;
  const stroke = 30;
  const radius = (size - stroke) / 2 - 4;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const gap = 5;

  let acc = 0;
  const arcs = slices.map((slice, index) => {
    const len = (slice.percent / 100) * circumference;
    const dash = Math.max(len - gap, 0.001);
    const arc = {
      index,
      color: COLORS[index % COLORS.length],
      dasharray: `${dash} ${circumference - dash}`,
      dashoffset: -acc,
    };
    acc += len;
    return arc;
  });

  const activeSlice = active != null ? slices[active] : null;

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
      <div
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="Token allocation donut chart"
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={stroke}
          />
          <g transform={`rotate(-90 ${center} ${center})`}>
            {arcs.map((arc) => (
              <circle
                key={arc.index}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={arc.color}
                strokeWidth={active === arc.index ? stroke + 6 : stroke}
                strokeDasharray={arc.dasharray}
                strokeDashoffset={arc.dashoffset}
                style={{
                  transition: "stroke-width 250ms ease, opacity 250ms ease",
                  opacity: active == null || active === arc.index ? 1 : 0.32,
                  cursor: "pointer",
                }}
                onMouseEnter={() => setActive(arc.index)}
                onMouseLeave={() => setActive(null)}
              />
            ))}
          </g>
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          {activeSlice ? (
            <>
              <span className="text-3xl font-semibold text-white tabular-nums">
                {activeSlice.percent}%
              </span>
              <span className="mt-1 max-w-[9.5rem] text-xs leading-4 text-white/60">
                {activeSlice.label}
              </span>
            </>
          ) : (
            <>
              <span className="text-2xl font-semibold text-white">
                {centerTop}
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
                {centerBottom}
              </span>
            </>
          )}
        </div>
      </div>

      <ul className="w-full max-w-md space-y-2.5">
        {slices.map((slice, index) => (
          <li
            key={slice.label}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className={`flex items-start gap-3 rounded-2xl border px-4 py-3 transition ${
              active === index
                ? "border-white/20 bg-white/5"
                : "border-white/8"
            }`}
          >
            <span
              aria-hidden
              className="mt-1 h-3 w-3 shrink-0 rounded-sm"
              style={{ background: COLORS[index % COLORS.length] }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-white">
                  {slice.label}
                </span>
                <span className="font-mono text-sm tabular-nums text-white/80">
                  {slice.percent}%
                </span>
              </div>
              <p className="mt-0.5 text-xs leading-5 text-white/55">
                {slice.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
