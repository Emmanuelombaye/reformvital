"""Export MensRx-style vial product art into public/images (therapy product slots only)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ASSETS = Path(r"C:\Users\Administrator\.cursor\projects\i-ceo-finalversionreform\assets")
OUT = Path(r"I:\ceo\finalversionreform\public\images")


def cover(img: Image.Image, tw: int, th: int) -> Image.Image:
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    resized = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def save(src: Path, dest: str, w: int, h: int) -> None:
    out = cover(Image.open(src).convert("RGB"), w, h)
    path = OUT / dest
    out.save(path, "PNG", compress_level=1)
    print(f"  {dest} <- {src.name} ({w}x{h})", flush=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    print("Applying MensRx-style vial product images...", flush=True)

    # Square + wide variants used across catalog / detail / homepage product card
    pairs = [
        ("vial-glp1.png", ["vial-glp1.png", "Tirzepatide.png", "tirzepatide_hero.png", "weight_loss_glp1.png"]),
        ("vial-sermorelin.png", ["vial-sermorelin.png", "Sermorelin.png", "sermorelin_hero.png"]),
        ("vial-nad.png", ["vial-nad.png", "NAD+ Cellular.png", "nad_cellular.png"]),
        ("vial-neuropeptide.png", ["vial-neuropeptide.png", "Neuropeptide.png"]),
        ("vial-bpc.png", ["vial-bpc.png", "Recovery & Tissue.png", "bpc_tissue.png", "recovery_bpc157.png"]),
        ("vial-trt.png", ["vial-trt.png", "TRTTestosterone.png"]),
        ("vial-hair.png", ["vial-hair.png", "Minoxidil.png"]),
        ("vial-pt141.png", ["vial-pt141.png", "Bremelanotide.png"]),
    ]

    for src_name, dests in pairs:
        src = ASSETS / src_name
        if not src.exists():
            print(f"  SKIP missing {src_name}", flush=True)
            continue
        for dest in dests:
            # Hero-wide for large banners; square for tiles
            if dest.endswith("Tirzepatide.png") or "Cellular" in dest or dest in {
                "Sermorelin.png",
                "Recovery & Tissue.png",
                "TRTTestosterone.png",
                "Neuropeptide.png",
                "Bremelanotide.png",
                "Minoxidil.png",
            }:
                save(src, dest, 2752, 1536)
            else:
                save(src, dest, 1024, 1024)

    # resource GLP-1 article thumb
    glp = ASSETS / "vial-glp1.png"
    if glp.exists():
        img = cover(Image.open(glp).convert("RGB"), 1536, 1024)
        img.save(OUT / "resource-glp1.jpg", "JPEG", quality=90)
        print("  resource-glp1.jpg", flush=True)

    print("Done.", flush=True)


if __name__ == "__main__":
    main()
