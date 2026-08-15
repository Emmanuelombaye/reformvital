"""Compress public/images to WebP and rewrite site paths.

Photos are re-encoded as WebP (quality ~80) with a max long edge of 1920.
Keeps alpha when present. Updates src/ + key scripts to point at .webp.
"""
from __future__ import annotations

import re
from pathlib import Path

from PIL import Image

ROOT = Path(r"I:\ceo\finalversionreform")
IMG_ROOT = ROOT / "public" / "images"
MAX_EDGE = 1920
WEBP_QUALITY = 80
REWRITE_GLOBS = (
    "src/**/*.{ts,tsx,js,jsx,css,module.css}",
    "scripts/**/*.py",
)


def resize_max_edge(im: Image.Image, max_edge: int = MAX_EDGE) -> Image.Image:
    w, h = im.size
    long_edge = max(w, h)
    if long_edge <= max_edge:
        return im
    scale = max_edge / long_edge
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    return im.resize((nw, nh), Image.LANCZOS)


def to_webp(src: Path) -> Path | None:
    if src.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
        return None
    dest = src.with_suffix(".webp")
    im = Image.open(src)
    has_alpha = "A" in im.getbands()
    im = resize_max_edge(im)
    if has_alpha:
        im = im.convert("RGBA")
        im.save(dest, "WEBP", quality=WEBP_QUALITY, method=4)
    else:
        im = im.convert("RGB")
        im.save(dest, "WEBP", quality=WEBP_QUALITY, method=4)
    return dest


def collect_conversions() -> list[tuple[Path, Path]]:
    pairs: list[tuple[Path, Path]] = []
    for src in sorted(IMG_ROOT.rglob("*")):
        if not src.is_file():
            continue
        if src.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        # Skip already-paired junk
        if src.name.startswith("."):
            continue
        dest = to_webp(src)
        if dest:
            pairs.append((src, dest))
            before = src.stat().st_size
            after = dest.stat().st_size
            rel = src.relative_to(IMG_ROOT)
            print(
                f"  {rel}  {before/1024:.0f}KB -> {dest.name} {after/1024:.0f}KB "
                f"({100 * after / before:.0f}%)",
                flush=True,
            )
    return pairs


def web_path(p: Path) -> str:
    rel = p.relative_to(ROOT / "public").as_posix()
    return "/" + rel


def rewrite_references(pairs: list[tuple[Path, Path]]) -> int:
    mapping = {web_path(old): web_path(new) for old, new in pairs}
    # Filename-only map for OUT / "hero.png" style script entries under public/images
    name_map = {old.name: new.name for old, new in pairs}

    files = [
        f
        for f in list((ROOT / "src").rglob("*")) + list((ROOT / "scripts").rglob("*.py"))
        if f.is_file() and f.suffix.lower() in {".ts", ".tsx", ".js", ".jsx", ".css", ".py", ".md", ".json"}
    ]
    # Do not rewrite this optimizer itself mid-run
    files = [f for f in files if f.name != "optimize_public_images.py"]

    keys = sorted(mapping.keys(), key=len, reverse=True)
    name_keys = sorted(name_map.keys(), key=len, reverse=True)
    changed_files = 0
    for f in files:
        text = f.read_text(encoding="utf-8")
        orig = text
        for old in keys:
            text = text.replace(old, mapping[old])
        # Only rewrite bare filenames that appear as public image outputs
        if f.suffix == ".py" and "replace_client_images" in f.name:
            for old_name in name_keys:
                text = text.replace(f'"{old_name}"', f'"{name_map[old_name]}"')
                text = text.replace(f"'{old_name}'", f"'{name_map[old_name]}'")
        if text != orig:
            f.write_text(text, encoding="utf-8")
            changed_files += 1
            print(f"  rewrite {f.relative_to(ROOT)}", flush=True)
    return changed_files


def delete_originals(pairs: list[tuple[Path, Path]]) -> None:
    for old, new in pairs:
        if new.exists() and old.exists():
            old.unlink()


def main() -> None:
    print("Encoding WebP…")
    pairs = collect_conversions()
    before = sum(a.stat().st_size for a, _ in pairs)
    after = sum(b.stat().st_size for _, b in pairs)
    print(f"\nAssets: {len(pairs)} files  {before/1e6:.1f}MB -> {after/1e6:.1f}MB")

    print("\nRewriting references…")
    n = rewrite_references(pairs)
    print(f"  {n} files updated")

    print("\nRemoving bulky originals…")
    delete_originals(pairs)
    remaining = sum(p.stat().st_size for p in IMG_ROOT.rglob("*") if p.is_file())
    print(f"public/images now {remaining/1e6:.1f}MB")
    print("Done.")


if __name__ == "__main__":
    main()
