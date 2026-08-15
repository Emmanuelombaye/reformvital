"""Export only the homepage-critical client crops (fast)."""
from __future__ import annotations

import replace_client_images as r

NEEDED = {
    "how-step-delivery.png",
    "featured-metabolic.png",
    "doctor-wasef.png",
    "doctor_portrait.png",
    "doctor-sakla.png",
}


def main() -> None:
    print("Loading crops...", flush=True)
    crops = r.load_all_crops()
    for cid, fname, w, h, fmt, trim in r.REPLACEMENTS:
        if fname not in NEEDED:
            continue
        if cid not in crops:
            print(f"SKIP {fname}", flush=True)
            continue
        crop = crops[cid]
        if trim:
            crop = r.trim_contact_label(crop, **trim)
        r.save(crop, r.OUT / fname, w, h, fmt)
    print("Done.", flush=True)


if __name__ == "__main__":
    main()
