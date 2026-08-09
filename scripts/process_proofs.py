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

# Invoice redactions, in original 2517x10232 coordinates:
#   employee name, customer ID, bank transaction ref, and the QR code
#   (its payload could not be verified, so it is covered rather than risked).
INVOICE_REDACTIONS = [
    (790, 2196, 2085, 2290),
    (790, 2300, 1425, 2396),
    (1735, 4238, 2460, 4326),
    (700, 8480, 2010, 9880),
]

# name -> (source file, redactions, target width, tile cols, tile rows)
DOCS = {
    "certificate": ("license_png.png", [], 1440, 4, 3),
    "certificate-uv": ("license_uv_png.png", [], 1440, 4, 3),
    "invoice": ("invoice.png", INVOICE_REDACTIONS, 1000, 2, 8),
}


def strip_metadata(im: Image.Image) -> Image.Image:
    """Rebuild the image from raw pixels so no metadata survives."""
    clean = Image.new(im.mode, im.size)
    clean.putdata(list(im.getdata()))
    return clean


def process(src_dir: Path, name: str, source: str, redactions, target_w, cols, rows):
    im = Image.open(src_dir / source).convert("RGB")
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
