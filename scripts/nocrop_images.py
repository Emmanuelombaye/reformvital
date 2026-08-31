"""Switch remaining image styles from cover → contain (Yucca no-crop)."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src"


def main() -> None:
    files = list(ROOT.rglob("*.tsx")) + list(ROOT.rglob("*.css"))
    changed: list[str] = []
    for f in files:
        text = f.read_text(encoding="utf-8")
        orig = text
        text = text.replace('objectFit: "cover"', 'objectFit: "contain"')
        text = text.replace("objectFit: 'cover'", "objectFit: 'contain'")
        text = re.sub(
            r'objectPosition: "center [^"]+"',
            'objectPosition: "center center"',
            text,
        )
        text = text.replace('objectPosition: "center top"', 'objectPosition: "center center"')
        text = text.replace("object-fit: cover !important", "object-fit: contain !important")
        text = text.replace("object-fit: cover", "object-fit: contain")
        if text != orig:
            f.write_text(text, encoding="utf-8")
            changed.append(str(f.relative_to(ROOT)))

    print(f"changed {len(changed)}")
    for c in changed:
        print(f"  {c}")

    still = []
    for f in files:
        tt = f.read_text(encoding="utf-8")
        if 'object-fit: cover' in tt or 'objectFit: "cover"' in tt:
            still.append(str(f.relative_to(ROOT)))
    print("still cover", still)


if __name__ == "__main__":
    main()
