"""Crop client collage sheets and overwrite site images at exact dimensions."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(r"I:\ceo\finalversionreform")
CLIENT = ROOT / "public" / "clients changes"
OUT = ROOT / "public" / "images"


def detect_header_y(img: Image.Image, max_scan: int = 80) -> int:
    px = img.convert("RGB")
    w, h = img.size
    for y in range(max_scan):
        row = [px.getpixel((x, y)) for x in range(0, w, max(1, w // 40))]
        white = sum(1 for r, g, b in row if r > 240 and g > 240 and b > 240)
        if white / len(row) < 0.85:
            return max(0, y - 2)
    return 48


def cover_crop(img: Image.Image, tw: int, th: int) -> Image.Image:
    sw, sh = img.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    resized = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def trim_contact_label(
    img: Image.Image,
    *,
    left_pct: float = 0.0,
    top_pct: float = 0.0,
    right_pct: float = 0.0,
    bottom_pct: float = 0.0,
) -> Image.Image:
    """Remove contact-sheet number overlays from collage cell edges."""
    w, h = img.size
    return img.crop(
        (
            int(w * left_pct),
            int(h * top_pct),
            max(int(w * left_pct) + 1, w - int(w * right_pct)),
            max(int(h * top_pct) + 1, h - int(h * bottom_pct)),
        )
    )


def crop_batch1(img: Image.Image) -> dict[str, Image.Image]:
    """1536x1024 — 2 top + 3 bottom (01–05)."""
    w, h = img.size
    y0 = detect_header_y(img)
    ch = h - y0
    th = ch // 2
    return {
        "01": img.crop((0, y0, w // 2, y0 + th)),
        "02": img.crop((w // 2, y0, w, y0 + th)),
        "03": img.crop((0, y0 + th, w // 3, h)),
        "04": img.crop((w // 3, y0 + th, 2 * w // 3, h)),
        "05": img.crop((2 * w // 3, y0 + th, w, h)),
    }


def crop_3top_2bot(img: Image.Image, ids: list[str]) -> dict[str, Image.Image]:
    """1402x1122 — 3 top + 2 bottom."""
    w, h = img.size
    y0 = detect_header_y(img)
    ch = h - y0
    th = int(ch * 0.56)
    top_ids, bot_ids = ids[:3], ids[3:]
    out: dict[str, Image.Image] = {}
    for i, cid in enumerate(top_ids):
        x0, x1 = i * w // 3, (i + 1) * w // 3
        out[cid] = img.crop((x0, y0, x1, y0 + th))
    for i, cid in enumerate(bot_ids):
        x0, x1 = i * w // 2, (i + 1) * w // 2
        out[cid] = img.crop((x0, y0 + th, x1, h))
    return out


def crop_2top_3bot(img: Image.Image, ids: list[str]) -> dict[str, Image.Image]:
    """1402x1122 — 2 top + 3 bottom (batch 5)."""
    w, h = img.size
    y0 = detect_header_y(img)
    ch = h - y0
    th = ch // 2
    out: dict[str, Image.Image] = {}
    out[ids[0]] = img.crop((0, y0, w // 2, y0 + th))
    out[ids[1]] = img.crop((w // 2, y0, w, y0 + th))
    for i, cid in enumerate(ids[2:]):
        x0, x1 = i * w // 3, (i + 1) * w // 3
        out[cid] = img.crop((x0, y0 + th, x1, h))
    return out


def load_all_crops() -> dict[str, Image.Image]:
    crops: dict[str, Image.Image] = {}

    crops.update(crop_batch1(Image.open(CLIENT / "PNG image.png")))

    for fname, fn, ids in [
        ("PNG image 2.png", crop_3top_2bot, ["11", "12", "13", "14", "15"]),
        ("PNG image 3.png", crop_3top_2bot, ["16", "17", "18", "19", "20"]),
        ("PNG image 4.png", crop_3top_2bot, ["21", "22", "23", "24", "25"]),
        ("PNG image 5.png", crop_2top_3bot, ["26", "27", "28", "29", "30"]),
        ("PNG image 6.png", crop_3top_2bot, ["31", "32", "33", "34", "35"]),
        ("PNG image 7.png", crop_3top_2bot, ["36", "37", "38", "39", "40"]),
        ("PNG image 8.png", crop_3top_2bot, ["41", "42", "43", "44", "46"]),
    ]:
        crops.update(fn(Image.open(CLIENT / fname), ids))

    # Sheet 9 — recovery shots; 41 foam roll overrides sheet 8's 41
    sheet9 = crop_3top_2bot(
        Image.open(CLIENT / "PNG image 9.png"),
        ["41", "42", "43", "44", "45"],
    )
    crops["41"] = sheet9["41"]
    crops["45"] = sheet9["45"]

    return crops


# client_id -> (output filename, width, height, format, optional trim dict)
REPLACEMENTS: list[tuple[str, str, int, int, str, dict[str, float] | None]] = [
    # Heroes — trim bottom-left contact-sheet labels (01, 03, etc.)
    ("01", "hero-commercial-wide.png", 1536, 1024, "PNG", {"left_pct": 0.08, "bottom_pct": 0.12}),
    ("03", "hero-commercial-mobile.png", 1024, 1536, "PNG", {"left_pct": 0.08, "bottom_pct": 0.12}),
    # How it works
    ("01", "how-step-consult.png", 1024, 1024, "PNG", None),
    ("02", "how-step-physician.png", 1024, 1024, "PNG", None),
    ("29", "how-step-delivery.png", 1024, 1024, "PNG", None),
    ("38", "how-step-ongoing.png", 1024, 1024, "PNG", None),
    # AI coach
    ("38", "ai_coach_dashboard.png", 1536, 1024, "PNG", None),
    ("39", "ai_coach_patient.png", 1536, 1024, "PNG", None),
    ("26", "ai_coach_doctor.png", 1536, 1024, "PNG", None),
    # Health academy / resources
    ("17", "resource-glp1.jpg", 1536, 1024, "JPEG", None),
    ("22", "resource-hormones.jpg", 1536, 1024, "JPEG", None),
    ("38", "resource-ai-coach.jpg", 1536, 1024, "JPEG", None),
    ("43", "resource-longevity.jpg", 1536, 1024, "JPEG", None),
    ("41", "resource-recovery.jpg", 1536, 1024, "JPEG", None),
    # Treatments page category tiles
    ("17", "weight_loss_glp1.png", 1024, 1024, "PNG", None),
    ("01", "tirzepatide_hero.png", 1024, 1024, "PNG", {"left_pct": 0.08, "bottom_pct": 0.12}),
    ("27", "hero_showcase.png", 1024, 1024, "PNG", None),
    ("32", "sermorelin_hero.png", 1024, 1024, "PNG", None),
    ("41", "bpc_tissue.png", 1024, 1024, "PNG", None),
    ("21", "nad_cellular.png", 1024, 1024, "PNG", None),
    ("05", "longevity_nad.png", 1024, 1024, "PNG", None),
    ("26", "doctor_portrait.png", 1024, 1024, "PNG", None),
    # Treatments homepage featured block
    ("01", "Tirzepatide.png", 2752, 1536, "PNG", {"left_pct": 0.08, "bottom_pct": 0.12}),
    ("26", "doctor-wasef.png", 1024, 1024, "PNG", None),
    ("32", "doctor-sakla.png", 1024, 1024, "PNG", None),
    ("14", "1.png", 2752, 1536, "PNG", None),
    ("30", "2.png", 2752, 1536, "PNG", None),
    ("39", "3.png", 2752, 1536, "PNG", None),
    ("40", "4.png", 2752, 1536, "PNG", None),
    ("35", "5.png", 2752, 1536, "PNG", None),
    ("24", "6.png", 2752, 1536, "PNG", None),
    ("44", "7.png", 2752, 1536, "PNG", None),
    ("45", "8.png", 2752, 1536, "PNG", None),
    ("22", "TRTTestosterone.png", 2752, 1536, "PNG", None),
    ("32", "Sermorelin.png", 2752, 1536, "PNG", None),
    ("41", "Recovery & Tissue.png", 2752, 1536, "PNG", None),
    ("43", "NAD+ Cellular.png", 2752, 1536, "PNG", None),
    ("42", "Neuropeptide.png", 2752, 1536, "PNG", None),
    ("29", "Bremelanotide.png", 2752, 1536, "PNG", None),
    ("46", "Minoxidil.png", 2752, 1536, "PNG", None),
    ("41", "recovery_bpc157.png", 1024, 1024, "PNG", None),
    # Remaining unused client crops → photo-less sections
    ("04", "about-villa.png", 1536, 1024, "PNG", None),
    ("11", "why-personalized.png", 1024, 1024, "PNG", None),
    ("12", "membership-hero.png", 1536, 1024, "PNG", None),
    ("13", "story-habits.png", 1536, 1024, "PNG", None),
    ("15", "portal-performance.png", 1536, 1024, "PNG", None),
    ("16", "member-nutrition.png", 1024, 1024, "PNG", None),
    ("18", "why-support.png", 1024, 1024, "PNG", None),
    ("19", "academy-nutrition.png", 1024, 1024, "PNG", None),
    ("20", "academy-recipes.png", 1024, 1024, "PNG", None),
    ("23", "why-wellness.png", 1024, 1024, "PNG", None),
    ("25", "about-longevity.png", 1536, 1024, "PNG", None),
    ("28", "member-clinical.png", 1024, 1024, "PNG", None),
    ("31", "start-wellness.png", 1024, 1280, "PNG", None),
    ("33", "why-evidence.png", 1024, 1024, "PNG", None),
    ("34", "academy-supplements.png", 1024, 1024, "PNG", None),
    ("36", "story-nutrition.png", 1024, 1024, "PNG", None),
    ("37", "member-renew.png", 1536, 1024, "PNG", None),
]


def save(crop: Image.Image, path: Path, w: int, h: int, fmt: str) -> None:
    out = cover_crop(crop.convert("RGB"), w, h)
    path.parent.mkdir(parents=True, exist_ok=True)
    if fmt == "JPEG":
        out.save(path, "JPEG", quality=88, optimize=True)
    else:
        out.save(path, "PNG", optimize=True)
    print(f"  {path.name} <- {w}x{h} ({fmt})")


def main() -> None:
    print("Loading client crops...")
    crops = load_all_crops()
    print(f"  {len(crops)} crops available: {sorted(crops.keys())}")

    print("\nReplacing site images...")
    for cid, fname, w, h, fmt, trim in REPLACEMENTS:
        if cid not in crops:
            print(f"  SKIP {fname} — missing crop {cid}")
            continue
        crop = crops[cid]
        if trim:
            crop = trim_contact_label(crop, **trim)
        save(crop, OUT / fname, w, h, fmt)

    print("\nDone.")


if __name__ == "__main__":
    main()
