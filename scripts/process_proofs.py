"""
Prepare treasury proof documents for publication.

Pipeline per image:
  1. redact personal data (boxes are in ORIGINAL pixel coordinates)
  2. strip ALL metadata (dpi / Software / EXIF) by rebuilding the pixel data
  3. downscale to a web size — no full-resolution original is ever shipped
  4. slice into tiles, so no single clean file exists in the DOM or network tab

Requires Pillow:  pip install pillow

Usage:
    python scripts/process_proofs.py --src "D:/CryptoCoin/good"

To add a new asset: drop its images in the source folder, add an entry to DOCS
below (with any redaction boxes), rerun, then paste the printed values into
src/lib/treasury.ts.

Note: this protects against casual reuse and metadata leaks. It cannot stop a
screenshot — the visible watermark is what makes a captured copy traceable.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "public" / "proofs"

REDACT_FILL = (26, 26, 26)

# invoice1.png (1969x7442) already has the sensitive fields physically taped over
# before being photographed. These two bars only close the small gaps the tape
# left at the line ends (a first initial, the client-ID prefix letter, the desk
# number) so the redaction reads as deliberate and complete.
INVOICE_REDACTIONS = [
    (560, 1583, 1570, 1642),   # Cashier   — leftover initial + "Desk #2"
    (560, 1648, 1010, 1707),   # Client ID — leftover prefix letter
]

# The QR is left visible at the owner's request. It could not be decoded here
# even from the un-watermarked source, so it is very unlikely to be scannable
# for visitors either — it reads as receipt detail, not as a working link.

# name -> (source file, redactions, target width, tile cols, tile rows)
SOURCES = Path(r"D:\CryptoCoin\Исходники")

DOCS = {
    "gold-bar": (SOURCES / "gold.png", [], 900, 3, 6),
    "certificate": ("license_png.png", [], 1440, 4, 3),
    "certificate-uv": ("license_uv_png.png", [], 1440, 4, 3),
    "invoice": (SOURCES / "invoice1.png", INVOICE_REDACTIONS, 1000, 2, 8),
}


def strip_metadata(im: Image.Image) -> Image.Image:
    """Rebuild the image from raw pixels so no metadata survives."""
    clean = Image.new(im.mode, im.size)
    clean.putdata(list(im.getdata()))
    return clean


def process(src_dir: Path, name: str, source, redactions, target_w, cols, rows):
    # entries may carry their own absolute path, otherwise resolve against --src
    path = Path(source)
    im = Image.open(path if path.is_absolute() else src_dir / path).convert("RGB")
    original = im.size

    if redactions:
        draw = ImageDraw.Draw(im)
        for box in redactions:
            draw.rectangle(box, fill=REDACT_FILL)

    im = strip_metadata(im)

    target_h = round(im.height * target_w / im.width)
    im = im.resize((target_w, target_h), Image.LANCZOS)

    doc_dir = OUT / name
    doc_dir.mkdir(parents=True, exist_ok=True)
    for old in doc_dir.glob("*.webp"):
        old.unlink()

    total = 0
    for r in range(rows):
        for c in range(cols):
            tile = im.crop(
                (
                    round(im.width * c / cols),
                    round(im.height * r / rows),
                    round(im.width * (c + 1) / cols),
                    round(im.height * (r + 1) / rows),
                )
            )
            path = doc_dir / f"r{r}c{c}.webp"
            tile.save(path, "WEBP", quality=86, method=6)
            total += path.stat().st_size

    print(
        f"{name:16s} {original[0]}x{original[1]} -> {im.width}x{im.height}"
        f"  {cols*rows} tiles  {total/1024:.0f} KB"
    )
    return {"name": name, "w": im.width, "h": im.height, "cols": cols, "rows": rows}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--src",
        default=r"D:\CryptoCoin\good",
        help="folder holding the original document scans",
    )
    args = parser.parse_args()
    src_dir = Path(args.src)

    OUT.mkdir(parents=True, exist_ok=True)
    results = [process(src_dir, n, *cfg) for n, cfg in DOCS.items()]

    print("\n--- paste into src/lib/treasury.ts ---")
    for m in results:
        print(
            f'doc: {{ id: "{m["name"]}", cols: {m["cols"]}, rows: {m["rows"]}, '
            f'width: {m["w"]}, height: {m["h"]} }},'
        )


if __name__ == "__main__":
    main()
