"""Crop client collage sheets and place each shot into the best-matching site slot.

Treatment product heroes that have no thematic client photo are left alone here —
those are regenerated separately (MensRx-style studio product art).
"""
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
    """Typical sheets — 3 top + 2 bottom."""
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
    """Batch 5 — 2 top + 3 bottom."""
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


def crop_3top_3bot(img: Image.Image, ids: list[str]) -> dict[str, Image.Image]:
    """Sheet 8 — six cells (41–46)."""
    w, h = img.size
    y0 = detect_header_y(img)
    ch = h - y0
    th = ch // 2
    out: dict[str, Image.Image] = {}
    for i, cid in enumerate(ids[:3]):
        x0, x1 = i * w // 3, (i + 1) * w // 3
        out[cid] = img.crop((x0, y0, x1, y0 + th))
    for i, cid in enumerate(ids[3:]):
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
    ]:
        crops.update(fn(Image.open(CLIENT / fname), ids))

    # Sheet 8 — full 6-cell grid
    crops.update(
        crop_3top_3bot(
            Image.open(CLIENT / "PNG image 8.png"),
            ["41a", "42a", "43a", "44a", "45a", "46"],
        )
    )
    # Prefer sheet-8 lifestyle/product cells under stable ids where useful
    crops["42"] = crops["42a"]  # kitchen supplements (sheet 8)
    crops["43"] = crops["43a"]  # reading Outlive
    crops["44"] = crops["44a"]  # outdoor meditation / yoga sunset
    crops["45s8"] = crops["45a"]  # Daily Longevity sachets product

    # Sheet 9 — recovery + evening ritual; foam-roll 41 and bedtime 45 win
    sheet9 = crop_3top_2bot(
        Image.open(CLIENT / "PNG image 9.png"),
        ["41", "42b", "43b", "44b", "45"],
    )
    crops["41"] = sheet9["41"]
    crops["45"] = sheet9["45"]
    crops["42b"] = sheet9["42b"]  # Omega-3 / Daily Longevity / Magnesium bottles
    crops["44b"] = sheet9["44b"]  # coastal dinner toast

    return crops


# Strip contact-sheet ID numbers (usually bottom-left) from every client crop.
DEFAULT_TRIM: dict[str, float] = {
    "left_pct": 0.1,
    "bottom_pct": 0.14,
    "right_pct": 0.02,
    "top_pct": 0.02,
}

# Thematic client-photo placements only (no mismatched treatment product fills).
# trim=None → DEFAULT_TRIM; pass {} to skip trimming for a specific asset.
REPLACEMENTS: list[tuple[str, str, int, int, str, dict[str, float] | None]] = [
    # ── Heroes (Batch 1) ──
    ("01", "hero-commercial-wide.png", 1536, 1024, "PNG", None),
    ("03", "hero-commercial-mobile.png", 1024, 1536, "PNG", None),
    # ── How it works ──
    ("01", "how-step-consult.png", 1024, 1024, "PNG", None),
    ("02", "how-step-physician.png", 1024, 1024, "PNG", None),
    ("27", "how-step-delivery.png", 1024, 1024, "PNG", None),  # clinic / pharmacy facility
    ("38", "how-step-ongoing.png", 1024, 1024, "PNG", None),
    # Homepage featured metabolic block — client lifestyle (not studio product)
    ("18", "featured-metabolic.png", 2752, 1536, "PNG", None),
    # Medical team — client clinical scenes (prefer over AI portraits)
    ("26", "doctor-wasef.png", 1024, 1024, "PNG", None),
    ("26", "doctor_portrait.png", 1024, 1024, "PNG", None),
    ("32", "doctor-sakla.png", 1024, 1024, "PNG", None),
    # ── AI coach ──
    ("38", "ai_coach_dashboard.png", 1536, 1024, "PNG", None),
    ("39", "ai_coach_patient.png", 1536, 1024, "PNG", None),
    ("26", "ai_coach_doctor.png", 1536, 1024, "PNG", None),
    # ── Resources / academy ──
    ("22", "resource-hormones.jpg", 1536, 1024, "JPEG", None),
    ("38", "resource-ai-coach.jpg", 1536, 1024, "JPEG", None),
    ("43", "resource-longevity.jpg", 1536, 1024, "JPEG", None),
    ("41", "resource-recovery.jpg", 1536, 1024, "JPEG", None),
    ("19", "academy-nutrition.png", 1024, 1024, "PNG", None),
    ("20", "academy-recipes.png", 1024, 1024, "PNG", None),
    ("42b", "academy-supplements.png", 1024, 1024, "PNG", None),
    ("17", "resource-nutrition-bowl.jpg", 1536, 1024, "JPEG", None),
    # ── Facility / recovery lifestyle tiles ──
    ("27", "hero_showcase.png", 1024, 1024, "PNG", None),
    ("41", "bpc_tissue.png", 1024, 1024, "PNG", None),
    ("41", "recovery_bpc157.png", 1024, 1024, "PNG", None),
    ("41", "Recovery & Tissue.png", 2752, 1536, "PNG", None),
    ("05", "longevity_nad.png", 1024, 1024, "PNG", None),
    # TRT / hormones — gym strength is on-theme
    ("22", "TRTTestosterone.png", 2752, 1536, "PNG", None),
    # ── Treatment heroes — CLIENT photos only (replace prior studio regen) ──
    # GLP-1 / weight loss → telehealth consult + metabolic lifestyle
    ("01", "Tirzepatide.png", 2752, 1536, "PNG", None),
    ("01", "tirzepatide_hero.png", 1024, 1024, "PNG", None),
    ("18", "weight_loss_glp1.png", 1024, 1024, "PNG", None),
    ("18", "resource-glp1.jpg", 1536, 1024, "JPEG", None),
    # Growth hormone / Sermorelin → morning vitality lifestyle
    ("21", "Sermorelin.png", 2752, 1536, "PNG", None),
    ("21", "sermorelin_hero.png", 1024, 1024, "PNG", None),
    # NAD+ / longevity therapy → IV clinical renewal (best client match)
    ("37", "NAD+ Cellular.png", 2752, 1536, "PNG", None),
    ("28", "nad_cellular.png", 1024, 1024, "PNG", None),
    # Cognitive peptides → focus / mindfulness
    ("33", "Neuropeptide.png", 2752, 1536, "PNG", None),
    # Sexual wellness → couple lifestyle
    ("46", "Bremelanotide.png", 2752, 1536, "PNG", None),
    # Hair — no hair-specific shoot; polished lifestyle male is closest client fit
    ("14", "Minoxidil.png", 2752, 1536, "PNG", None),
    # ── Transformations (results lifestyle) ──
    ("14", "1.png", 2752, 1536, "PNG", None),
    ("30", "2.png", 2752, 1536, "PNG", None),
    ("39", "3.png", 2752, 1536, "PNG", None),
    ("40", "4.png", 2752, 1536, "PNG", None),
    ("35", "5.png", 2752, 1536, "PNG", None),
    ("24", "6.png", 2752, 1536, "PNG", None),
    ("44b", "7.png", 2752, 1536, "PNG", None),
    ("45", "8.png", 2752, 1536, "PNG", None),
    # ── About / membership / why / start / portal ──
    ("04", "about-villa.png", 1536, 1024, "PNG", None),
    ("25", "about-longevity.png", 1536, 1024, "PNG", None),
    ("12", "membership-hero.png", 1536, 1024, "PNG", None),
    ("15", "portal-performance.png", 1536, 1024, "PNG", None),
    ("31", "start-wellness.png", 1024, 1280, "PNG", None),
    ("11", "why-personalized.png", 1024, 1024, "PNG", None),
    ("18", "why-support.png", 1024, 1024, "PNG", None),
    ("23", "why-wellness.png", 1024, 1024, "PNG", None),
    ("32", "why-evidence.png", 1024, 1024, "PNG", None),
    ("13", "story-habits.png", 1536, 1024, "PNG", None),
    ("36", "story-nutrition.png", 1024, 1024, "PNG", None),
    ("16", "member-nutrition.png", 1024, 1024, "PNG", None),
    ("28", "member-clinical.png", 1024, 1024, "PNG", None),
    ("37", "member-renew.png", 1536, 1024, "PNG", None),
    ("29", "member-rx.png", 1024, 1024, "PNG", None),
    ("21", "lifestyle-morning.png", 1024, 1024, "PNG", None),
    ("33", "lifestyle-education.png", 1024, 1024, "PNG", None),
    ("44", "lifestyle-mindfulness.png", 1536, 1024, "PNG", None),
    ("45s8", "product-sachets.png", 1024, 1024, "PNG", None),
    ("46", "lifestyle-toast.png", 2752, 1536, "PNG", None),
]


def save(crop: Image.Image, path: Path, w: int, h: int, fmt: str) -> None:
    out = cover_crop(crop.convert("RGB"), w, h)
    path.parent.mkdir(parents=True, exist_ok=True)
    # Avoid optimize=True — extremely slow on large PNG exports on Windows.
    if fmt == "JPEG":
        out.save(path, "JPEG", quality=88)
    else:
        out.save(path, "PNG", compress_level=1)
    print(f"  {path.name} <- {w}x{h} ({fmt})", flush=True)


def main() -> None:
    print("Loading client crops...")
    crops = load_all_crops()
    print(f"  {len(crops)} crops available: {sorted(crops.keys())}")

    print("\nReplacing site images (thematic client photos only)...")
    for cid, fname, w, h, fmt, trim in REPLACEMENTS:
        if cid not in crops:
            print(f"  SKIP {fname} — missing crop {cid}")
            continue
        crop = crops[cid]
        # None → default sheet-number trim; {} → no trim
        effective = DEFAULT_TRIM if trim is None else trim
        if effective:
            crop = trim_contact_label(crop, **effective)
        save(crop, OUT / fname, w, h, fmt)

    print("\nDone.")


if __name__ == "__main__":
    main()
