"""Overwrite remaining treatment slots with client crops (client-first policy)."""
from __future__ import annotations

import replace_client_images as r

NEEDED = {
    "Tirzepatide.png",
    "tirzepatide_hero.png",
    "weight_loss_glp1.png",
    "resource-glp1.jpg",
    "Sermorelin.png",
    "sermorelin_hero.png",
    "NAD+ Cellular.png",
    "nad_cellular.png",
    "Neuropeptide.png",
    "Bremelanotide.png",
    "Minoxidil.png",
}


def main() -> None:
    print("Loading crops...", flush=True)
    crops = r.load_all_crops()
    for cid, fname, w, h, fmt, trim in r.REPLACEMENTS:
        if fname not in NEEDED:
            continue
        if cid not in crops:
            print(f"SKIP {fname} missing {cid}", flush=True)
            continue
        crop = crops[cid]
        if trim:
            crop = r.trim_contact_label(crop, **trim)
        r.save(crop, r.OUT / fname, w, h, fmt)
    print("Done — all listed treatment slots now use client photos.", flush=True)


if __name__ == "__main__":
    main()
