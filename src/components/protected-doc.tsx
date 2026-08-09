"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { withBasePath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

export type ProofDoc = {
  id: string;
  cols: number;
  rows: number;
  width: number;
  height: number;
};

/**
 * Renders a document as a grid of image tiles rather than one file.
 *
 * The source images are watermarked, stripped of metadata and downscaled before
 * slicing, and no full-resolution original is ever shipped — so the DOM and the
 * network tab only ever expose fragments. Copy deterrents (no context menu, no
 * drag, no selection, no iOS long-press callout) sit on top of that.
 *
 * This raises the cost of reuse; it cannot defeat a screenshot. The visible
 * watermark is what makes a captured copy traceable.
 */
function TileGrid({ doc, className }: { doc: ProofDoc; className?: string }) {
  const tiles = Array.from({ length: doc.rows * doc.cols }, (_, i) => ({
    row: Math.floor(i / doc.cols),
    col: i % doc.cols,
  }));

  return (
    <div
      className={cn("relative select-none", className)}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${doc.cols}, 1fr)`,
        aspectRatio: `${doc.width} / ${doc.height}`,
        WebkitTouchCallout: "none",
      }}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      {tiles.map((tile) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${tile.row}-${tile.col}`}
          src={withBasePath(`/proofs/${doc.id}/r${tile.row}c${tile.col}.webp`)}
          alt=""
          draggable={false}
          loading="lazy"
          className="pointer-events-none block h-full w-full select-none"
        />
      ))}
      {/* transparent shield: any click/right-click lands here, never on a tile */}
      <div
        className="absolute inset-0"
        style={{ gridArea: "1 / 1 / -1 / -1" }}
        aria-hidden
      />
    </div>
  );
}

export function ProtectedDoc({
  doc,
  caption,
  meta,
  zoomLabel,
  onOpen,
  className,
  frameClassName,
}: {
  doc: ProofDoc;
  caption: string;
  meta?: string;
  zoomLabel: string;
  onOpen: () => void;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <figure className={cn("flex flex-col", className)}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${caption} — ${zoomLabel}`}
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl border border-white/12 bg-black/25",
          "transition duration-300 hover:border-[var(--gold-soft)]/45",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-bright)]",
          frameClassName,
        )}
      >
        <TileGrid doc={doc} className="h-full w-full" />

        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2.5 pt-8 text-[11px] font-medium text-white/0 transition group-hover:text-white/90">
          🔍 {zoomLabel}
        </span>
      </button>

      <figcaption className="mt-3 px-0.5">
        <div className="text-sm font-semibold text-white">{caption}</div>
        {meta ? (
          <div className="mt-0.5 font-mono text-xs text-white/45">{meta}</div>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function DocLightbox({
  doc,
  caption,
  meta,
  closeLabel,
  onClose,
}: {
  doc: ProofDoc | null;
  caption: string;
  meta?: string;
  closeLabel: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!doc) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [doc, onClose]);

  if (!doc || !mounted) return null;

  const isTall = doc.height / doc.width > 1.4;

  // Rendered into <body>: the page's <main> is `isolate z-10`, which would trap
  // this overlay inside that stacking context and let the sticky site header
  // (z-30, a sibling of main) paint over the close button.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-sm"
      onContextMenu={(event) => event.preventDefault()}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
    >
      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">
            {caption}
          </div>
          {meta ? (
            <div className="mt-0.5 truncate font-mono text-xs text-white/45">
              {meta}
            </div>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="flex h-11 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-95"
        >
          <span aria-hidden className="text-base leading-none">
            ✕
          </span>
          <span className="hidden sm:inline">{closeLabel}</span>
        </button>
      </div>

      {/* clicking the empty space around the document also closes */}
      <div className="relative flex-1 overflow-auto p-4 sm:p-6" onClick={onClose}>
        <div
          className={cn(
            "mx-auto",
            isTall ? "max-w-[min(520px,92vw)]" : "max-w-[min(1200px,94vw)]",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <TileGrid doc={doc} />
        </div>
      </div>

      {/* always-reachable close, even after scrolling a long document */}
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="fixed bottom-6 left-1/2 z-20 flex h-12 -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/80 px-6 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur transition hover:bg-white/15 active:scale-95"
      >
        <span aria-hidden>✕</span>
        {closeLabel}
      </button>
    </div>,
    document.body,
  );
}
