"""Propagate Scriptful-style vials (drug name + concentration only, no site logo).

Copies public/images/vials/*.png into legacy branded product slots so every
page shows unbranded product art like Scriptful.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
VIALS = ROOT / "public" / "images" / "vials"
IMAGES = ROOT / "public" / "images"
PACKS = IMAGES / "packs"

SEMA = VIALS / "semaglutide.png"
TIRZ = VIALS / "tirzepatide.png"
SEMA_THUMB = VIALS / "semaglutide-thumb.png"
TIRZ_THUMB = VIALS / "tirzepatide-thumb.png"


def cover(img: Image.Image, tw: int, th: int) -> Image.Image:
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    resized = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def export_pair(src: Path, dest: Path, w: int, h: int, fmt: str) -> None:
    if not src.exists():
        print(f"  SKIP missing source {src}", flush=True)
        return
    img = cover(Image.open(src).convert("RGB"), w, h)
    dest.parent.mkdir(parents=True, exist_ok=True)
    if fmt == "webp":
        img.save(dest, "WEBP", quality=88, method=6)
    else:
        img.save(dest, "PNG", compress_level=1)
    print(f"  {dest.relative_to(ROOT)} <- {src.name} ({w}x{h})", flush=True)


def main() -> None:
    if not SEMA.exists() or not TIRZ.exists():
        raise SystemExit("Missing Scriptful vials in public/images/vials/")

    print("Applying Scriptful vials sitewide...", flush=True)

    # Legacy root slots (webp)
    webp_jobs = [
        (SEMA, IMAGES / "resource-glp1.webp", 1536, 1024),
        (SEMA, IMAGES / "weight_loss_glp1.webp", 1536, 1024),
        (TIRZ, IMAGES / "tirzepatide_hero.webp", 1536, 1024),
        (TIRZ, IMAGES / "member-rx.webp", 1536, 1024),
        (SEMA, IMAGES / "featured-metabolic.webp", 1536, 1024),
    ]
    for src, dest, w, h in webp_jobs:
        export_pair(src, dest, w, h, "webp")

    # Pack pairs — only the two weight programs remain
    pack_jobs = [
        (SEMA, PACKS / "glp1-a.webp", 1024, 1024),
        (TIRZ, PACKS / "glp1-b.webp", 1024, 1024),
        (SEMA, PACKS / "tirz-a.webp", 1024, 1024),
        (TIRZ, PACKS / "tirz-b.webp", 1024, 1024),
    ]
    for src, dest, w, h in pack_jobs:
        export_pair(src, dest, w, h, "webp")

    # Square thumbs for tiles
    thumb_jobs = [
        (SEMA_THUMB, IMAGES / "vial-semaglutide.webp", 1024, 1024),
        (TIRZ_THUMB, IMAGES / "vial-tirzepatide.webp", 1024, 1024),
    ]
    for src, dest, w, h in thumb_jobs:
        export_pair(src, dest, w, h, "webp")

    # PNG aliases used by older paths
    png_jobs = [
        (SEMA, IMAGES / "Semaglutide.png", 2752, 1536),
        (TIRZ, IMAGES / "Tirzepatide.png", 2752, 1536),
        (SEMA, IMAGES / "vial-glp1.png", 1024, 1024),
        (TIRZ, IMAGES / "vial-tirz.png", 1024, 1024),
    ]
    for src, dest, w, h in png_jobs:
        export_pair(src, dest, w, h, "png")

    print("Done.", flush=True)


if __name__ == "__main__":
    main()
