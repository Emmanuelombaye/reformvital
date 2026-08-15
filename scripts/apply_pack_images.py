"""Copy Reform Vital MensRx-style pack A/B pairs into public/images/packs."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ASSETS = Path(r"C:\Users\Administrator\.cursor\projects\i-ceo-finalversionreform\assets")
OUT = Path(r"I:\ceo\finalversionreform\public\images\packs")

PAIRS = [
    "enclomiphene",
    "glp1",
    "tirz",
    "tadalafil",
    "trt",
    "nad",
    "bpc",
    "hair",
    "serm",
]


def cover(img: Image.Image, tw: int = 1024, th: int = 1024) -> Image.Image:
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    resized = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    print("Exporting pack A/B pairs...", flush=True)
    for key in PAIRS:
        for suffix in ("a", "b"):
            src = ASSETS / f"rv-pack-{key}-{suffix}.png"
            if not src.exists():
                print(f"  SKIP {src.name}", flush=True)
                continue
            dest = OUT / f"{key}-{suffix}.png"
            cover(Image.open(src).convert("RGB")).save(dest, "PNG", compress_level=1)
            print(f"  {dest.name}", flush=True)
    print("Done.", flush=True)


if __name__ == "__main__":
    main()
