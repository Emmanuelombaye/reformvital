"""Re-encode public/images WebP for faster loads (smaller dims + quality)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(r"I:\ceo\finalversionreform")
IMG = ROOT / "public" / "images"

# (substring match on relative posix path, max_edge, quality)
RULES: list[tuple[str, int, int]] = [
    ("hero-commercial", 1400, 72),
    ("packs/", 720, 64),
    ("vial-", 720, 64),
    ("doctor-", 900, 68),
    ("doctor_", 900, 68),
]


def rule_for(rel: str) -> tuple[int, int]:
    for needle, edge, q in RULES:
        if needle in rel:
            return edge, q
    # Default content photos
    return 1200, 68


def main() -> None:
    files = sorted(IMG.rglob("*.webp"))
    before = 0
    after = 0
    for src in files:
        rel = src.relative_to(IMG).as_posix()
        edge, quality = rule_for(rel)
        im = Image.open(src)
        has_alpha = "A" in im.getbands()
        w, h = im.size
        long_edge = max(w, h)
        if long_edge > edge:
            scale = edge / long_edge
            im = im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
        before += src.stat().st_size
        if has_alpha:
            im = im.convert("RGBA")
        else:
            im = im.convert("RGB")
        im.save(src, "WEBP", quality=quality, method=6)
        after += src.stat().st_size
        print(f"  {rel}: {w}x{h} -> {im.size[0]}x{im.size[1]} q={quality}", flush=True)
    print(f"\n{before/1e6:.2f}MB -> {after/1e6:.2f}MB ({100*after/max(1,before):.0f}%)")


if __name__ == "__main__":
    main()
