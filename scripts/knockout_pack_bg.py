"""Remove studio backgrounds from pack/vial shots with rembg (transparent WebP)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image
from rembg import remove

ROOT = Path(__file__).resolve().parents[1]
PACKS = ROOT / "public" / "images" / "packs"
IMAGES = ROOT / "public" / "images"


def knock_out(path: Path) -> None:
    src = Image.open(path).convert("RGBA")
    cut = remove(src)
    if not isinstance(cut, Image.Image):
        cut = Image.open(cut).convert("RGBA")  # type: ignore[arg-type]
    else:
        cut = cut.convert("RGBA")

    # Keep original size
    if cut.size != src.size:
        cut = cut.resize(src.size, Image.LANCZOS)

    cut.save(path, "WEBP", quality=90, method=4)
    alpha = cut.getchannel("A")
    hist = alpha.histogram()
    clear_pct = 100.0 * sum(hist[:8]) / max(sum(hist), 1)
    print(f"  {path.relative_to(ROOT)}  cleared~{clear_pct:.0f}%", flush=True)


def main() -> None:
    targets = sorted(PACKS.glob("*.webp")) + sorted(IMAGES.glob("vial-*.webp"))
    print(f"rembg knockout on {len(targets)} product images...", flush=True)
    for path in targets:
        knock_out(path)
    print("Done.", flush=True)


if __name__ == "__main__":
    main()
