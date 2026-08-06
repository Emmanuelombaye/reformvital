"""Generate downloadable PDF files for Health Academy guides."""
from __future__ import annotations

import re
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "downloads" / "guides"

GUIDES = [
    {
        "slug": "longevity-blueprint",
        "title": "Longevity Blueprint",
        "desc": "A physician-aligned roadmap for cellular health and healthy aging.",
        "sections": [
            ("Foundation", "Longevity starts with sleep, movement, nutrition, and stress—not shortcuts. Reform Vital builds on these pillars with physician-guided protocols."),
            ("Biomarkers to Track", "Metabolic panel, inflammatory markers, hormone baseline, body composition, and HbA1c—reviewed quarterly with your provider."),
            ("Your Next Step", "Schedule a consultation to build a personalized longevity plan based on your labs and goals."),
        ],
    },
    {
        "slug": "executive-health-guide",
        "title": "Executive Health Guide",
        "desc": "Performance-focused wellness for busy professionals.",
        "sections": [
            ("Time-Efficient Care", "Telehealth assessments, secure messaging, and cold-chain delivery fit demanding schedules without sacrificing clinical oversight."),
            ("Energy & Focus", "Hormone optimization, metabolic health, and sleep hygiene compound for sustainable executive performance."),
            ("Your Next Step", "Start with an online assessment—most intakes take under 5 minutes."),
        ],
    },
    {
        "slug": "weight-optimization-guide",
        "title": "Weight Optimization Guide",
        "desc": "GLP-1 therapy expectations, nutrition, and sustainable habits.",
        "sections": [
            ("Setting Expectations", "Medical weight loss is a partnership. Typical progress is gradual over 12–24 weeks with provider titration."),
            ("Nutrition Essentials", "Prioritize protein, hydration, and structured meals. Use Health Academy calculators for personalized targets."),
            ("Your Next Step", "Begin your health assessment to see if physician-guided GLP-1 therapy is appropriate for you."),
        ],
    },
    {
        "slug": "hormone-health-guide",
        "title": "Hormone Health Guide",
        "desc": "TRT, women's hormones, and when labs matter.",
        "sections": [
            ("Labs First", "Never start hormone therapy without baseline labs and physician interpretation."),
            ("Monitoring", "Follow-up panels every 3–6 months ensure safety and efficacy."),
            ("Your Next Step", "Meet with a licensed provider to review symptoms and order appropriate panels."),
        ],
    },
    {
        "slug": "understanding-your-labs",
        "title": "Understanding Your Labs",
        "desc": "Decode metabolic panels, hormones, and inflammation markers.",
        "sections": [
            ("Common Panels", "CMP, lipid panel, HbA1c, testosterone (total/free), thyroid, and hs-CRP are frequently used in optimization care."),
            ("Reading Trends", "A single number matters less than direction over time—your provider reviews both."),
            ("Your Next Step", "Request a metabolic panel through your Reform Vital assessment."),
        ],
    },
    {
        "slug": "healthy-aging-handbook",
        "title": "Healthy Aging Handbook",
        "desc": "Preventive strategies for energy, mobility, and cognition.",
        "sections": [
            ("Movement", "Resistance training 2–3× weekly preserves lean mass during weight loss and aging."),
            ("Cognition", "Sleep, social connection, and metabolic health support long-term brain health."),
            ("Your Next Step", "Explore preventive wellness programs with ongoing provider monitoring."),
        ],
    },
    {
        "slug": "sleep-guide",
        "title": "Sleep Guide",
        "desc": "Recovery, circadian rhythm, and hormone connection.",
        "sections": [
            ("Circadian Basics", "Consistent wake times anchor your hormone cycle. Morning light exposure helps."),
            ("Sleep & Hormones", "Poor sleep elevates cortisol and disrupts appetite hormones—undermining GLP-1 and TRT outcomes."),
            ("Your Next Step", "Take the Sleep Assessment in Health Academy tools and share results with your provider."),
        ],
    },
    {
        "slug": "nutrition-playbook",
        "title": "Nutrition Playbook",
        "desc": "Protein, macros, and meal planning for protocol success.",
        "sections": [
            ("Protein Targets", "Use the Protein and Macro Calculators for starting points—your provider personalizes from there."),
            ("Meal Planning", "Batch prep proteins and vegetables twice weekly to stay adherent when appetite is low."),
            ("Your Next Step", "Log meals in your AI coach and review trends at your next follow-up."),
        ],
    },
]


def ascii_safe(text: str) -> str:
    replacements = {
        "\u2014": "-",
        "\u2013": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u00d7": "x",
        "\u2192": "->",
    }
    for src, dst in replacements.items():
        text = text.replace(src, dst)
    return re.sub(r"[^\x00-\x7F]", "?", text)


class GuidePDF(FPDF):
    def header(self) -> None:
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(0, 168, 150)
        self.cell(0, 8, "Reform Vital Health Academy", align="R", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def footer(self) -> None:
        self.set_y(-14)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, f"Page {self.page_no()} | Physician-reviewed educational guide | reformvital.com", align="C")


def build_guide_pdf(guide: dict) -> Path:
    pdf = GuidePDF()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()
    pdf.set_title(ascii_safe(guide["title"]))

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(13, 27, 42)
    pdf.multi_cell(0, 11, ascii_safe(guide["title"]))
    pdf.ln(3)

    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(60, 72, 88)
    pdf.multi_cell(0, 7, ascii_safe(guide["desc"]))
    pdf.ln(6)

    for heading, body in guide["sections"]:
        pdf.set_font("Helvetica", "B", 14)
        pdf.set_text_color(0, 120, 110)
        pdf.multi_cell(0, 8, ascii_safe(heading))
        pdf.ln(1)
        pdf.set_font("Helvetica", "", 11)
        pdf.set_text_color(40, 50, 65)
        pdf.multi_cell(0, 6.5, ascii_safe(body))
        pdf.ln(4)

    pdf.ln(2)
    pdf.set_fill_color(240, 252, 250)
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(13, 27, 42)
    pdf.cell(0, 8, "Physician-reviewed - Educational use", fill=True, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(80, 90, 100)
    pdf.multi_cell(
        0,
        5.5,
        ascii_safe(
            "This guide supports informed conversations with your licensed provider. "
            "It does not replace personalized medical advice. "
            "Start your assessment at reformvital.com/start"
        ),
    )

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / f"{guide['slug']}.pdf"
    pdf.output(str(path))
    return path


def main() -> None:
    print("Generating Health Academy guide PDFs...")
    for guide in GUIDES:
        path = build_guide_pdf(guide)
        print(f"  {path.relative_to(ROOT)} ({path.stat().st_size // 1024} KB)")
    print(f"\nDone. {len(GUIDES)} PDFs in {OUT_DIR.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
