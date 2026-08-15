"""Resize MensRx-style regenerated product/doctor art into public/images slots.

CLIENT-FIRST POLICY: Do NOT run this after replace_client_images.py unless you
intentionally want studio product art back. Prefer client crops via
replace_client_images.py / export_client_treatments.py.
"""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(r"I:\ceo\finalversionreform")
ASSETS = Path(r"C:\Users\Administrator\.cursor\projects\i-ceo-finalversionreform\assets")
OUT = ROOT / "public" / "images"


def cover(img: Image.Image, tw: int, th: int) -> Image.Image:
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    resized = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def save(src: Path, dest_name: str, w: int, h: int, fmt: str = "PNG") -> None:
    img = Image.open(src).convert("RGB")
    out = cover(img, w, h)
    dest = OUT / dest_name
    if fmt == "JPEG":
        out.save(dest, "JPEG", quality=90)
    else:
        out.save(dest, "PNG", compress_level=1)
    print(f"  {dest_name} <- {src.name} ({w}x{h})", flush=True)


def main() -> None:
    print(
        "WARNING: This overwrites client photos with studio regen art.\n"
        "Prefer: python scripts/replace_client_images.py\n"
        "Aborting by default. Set ALLOW_REGEN=1 to force.",
        flush=True,
    )
    if os.environ.get("ALLOW_REGEN") != "1":
        return

    OUT.mkdir(parents=True, exist_ok=True)
    print("Applying regenerated MensRx-style assets...", flush=True)

    glp1 = ASSETS / "gen-glp1.png"
    save(glp1, "Tirzepatide.png", 2752, 1536)
    save(glp1, "tirzepatide_hero.png", 1024, 1024)
    save(glp1, "weight_loss_glp1.png", 1024, 1024)
    save(glp1, "resource-glp1.jpg", 1536, 1024, "JPEG")

    ser = ASSETS / "gen-sermorelin.png"
    save(ser, "Sermorelin.png", 2752, 1536)
    save(ser, "sermorelin_hero.png", 1024, 1024)

    nad = ASSETS / "gen-nad.png"
    save(nad, "NAD+ Cellular.png", 2752, 1536)
    save(nad, "nad_cellular.png", 1024, 1024)

    neo = ASSETS / "gen-neuropeptide.png"
    save(neo, "Neuropeptide.png", 2752, 1536)

    bre = ASSETS / "gen-bremelanotide.png"
    save(bre, "Bremelanotide.png", 2752, 1536)

    hair = ASSETS / "gen-minoxidil.png"
    save(hair, "Minoxidil.png", 2752, 1536)

    save(ASSETS / "gen-delivery.png", "how-step-delivery.png", 1024, 1024)
    save(ASSETS / "gen-doctor-wasef.png", "doctor-wasef.png", 1024, 1024)
    save(ASSETS / "gen-doctor-wasef.png", "doctor_portrait.png", 1024, 1024)
    save(ASSETS / "gen-doctor-sakla.png", "doctor-sakla.png", 1024, 1024)

    print("Done.")


if __name__ == "__main__":
    main()
