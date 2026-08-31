from __future__ import annotations

import re
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://reformvital.vercel.app"
brand = (ROOT / "src" / "brand.config.ts").read_text(encoding="utf-8")

# Therapy slugs live under services[*].therapies
services = re.search(r"services:\s*\[(.*?)\n  \],", brand, re.S)
assert services
therapy_slugs = sorted(set(re.findall(r'slug:\s*"([a-z0-9-]+)"', services.group(1))))
print("therapy", len(therapy_slugs), therapy_slugs)

bad = []
for s in therapy_slugs:
    path = f"/treatments/{s}"
    try:
        with urlopen(Request(BASE + path, headers={"User-Agent": "a"}), timeout=35) as r:
            print(r.status, path)
            if r.status >= 400:
                bad.append(path)
    except Exception as e:
        print("ERR", path, e)
        bad.append(path)

print("bad", bad)
