import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featured = [
  {
    title: "How GLP-1 Therapies Support Metabolic Reset",
    type: "Guide",
    summary:
      "A plain-language overview of Semaglutide and Tirzepatide: appetite signaling, first-90-day expectations, and how physician monitoring keeps care safe.",
    href: "/treatments/semaglutide",
    image: "/images/resource-glp1.jpg",
    imageAlt: "GLP-1 therapy education visual",
  },
  {
    title: "Hormone Optimization 101",
    type: "Education",
    summary:
      "Why labs come first for TRT and women’s hormone therapy—and how Reform Vital personalizes protocols around your biomarkers.",
    href: "/treatments/trt",
    image: "/images/resource-hormones.jpg",
    imageAlt: "Hormone optimization education visual",
  },
  {
    title: "Using Your AI Health Coach Between Visits",
    type: "How-to",
    summary:
      "Track protein, hydration, sleep, and adherence between appointments—accountability support that never replaces your physician.",
    href: "/ai-coach",
    image: "/images/resource-ai-coach.jpg",
    imageAlt: "AI health coach dashboard visual",
  },
];

const library = [
  {
    title: "Preventive Labs & Metabolic Wellness",
    type: "Program",
    summary:
      "Advanced panels, body-composition tracking, and ongoing monitoring so optimization starts with data—not guesswork.",
    href: "/treatments/preventive-wellness",
    image: "/images/resource-longevity.jpg",
  },
  {
    title: "Longevity & Cellular Energy (NAD+)",
    type: "Therapy",
    summary:
      "What NAD+ support aims to address, who may be a candidate, and how Reform Vital structures physician-guided protocols.",
    href: "/treatments/nad-plus",
    image: "/images/resource-longevity.jpg",
  },
  {
    title: "Recovery & Tissue Support Peptides",
    type: "Therapy",
    summary:
      "An overview of recovery-focused peptide pathways and how clinical oversight shapes dosing and follow-up.",
    href: "/treatments/bpc-157",
    image: "/images/resource-recovery.jpg",
  },
  {
    title: "Memberships: Essentials, Performance & Elite",
    type: "Overview",
    summary:
      "Compare white-glove care tiers—physician consults, pharmacy shipping, and concierge support included.",
    href: "/memberships",
    image: "/images/resource-hormones.jpg",
  },
  {
    title: "How Reform Vital Telehealth Works",
    type: "Process",
    summary:
      "Assessment → physician review → compounded medication shipped to your door. See each step clearly.",
    href: "/how-it-works",
    image: "/images/how-step-consult.png",
  },
  {
    title: "FAQ: Telehealth, Compounding & Shipping",
    type: "FAQ",
    summary:
      "Insurance, 503A pharmacies, switching therapies, and how we differ from product-only sellers.",
    href: "/faq",
    image: "/images/how-step-delivery.png",
  },
];

const videos = [
  {
    title: "Understanding GLP-1 Medications",
    blurb:
      "A clinical overview of how GLP-1 receptor agonists support metabolic health and weight management.",
    youtubeId: "IVn4K-lesQM",
    source: "Educational overview",
  },
  {
    title: "Hormone Health Basics",
    blurb:
      "Why hormone balance matters for energy, body composition, and long-term wellness—and when labs help.",
    youtubeId: "ZteQT00cRR0",
    source: "Hormone education",
  },
  {
    title: "Mayo Clinic: Weight Loss Medications",
    blurb:
      "Trusted medical perspective on prescription weight-loss therapies and what patients should know.",
    youtubeId: "EmBRxbwLBrU",
    source: "Mayo Clinic",
  },
];

const externalReads = [
  {
    title: "Semaglutide — StatPearls (NCBI)",
    summary:
      "Peer-reviewed clinical summary covering mechanism, indications, and safety considerations.",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK603723/",
    source: "NCBI Bookshelf",
  },
  {
    title: "Mayo Clinic: Prescription Weight-Loss Drugs",
    summary:
      "Trusted overview of how prescription weight-loss medications work and what to discuss with a clinician.",
    href: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/weight-loss-drugs/art-20044832",
    source: "Mayo Clinic",
  },
  {
    title: "FDA: Medicines Containing Semaglutide",
    summary:
      "Official safety information for patients and providers on approved semaglutide products.",
    href: "https://www.fda.gov/drugs/drug-safety-and-availability/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
    source: "U.S. FDA",
  },
  {
    title: "Endocrine Society — Endocrine Library",
    summary:
      "Patient education on testosterone, menopause, thyroid, and related endocrine topics.",
    href: "https://www.endocrine.org/patient-engagement/endocrine-library",
    source: "Endocrine Society",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="rv-resources">
        <section className="rv-resources-hero">
          <div className="container">
            <span className="badge" style={{ marginBottom: "0.85rem" }}>
              EDUCATION LIBRARY
            </span>
            <h1>Resources for Informed Care</h1>
            <p>
              Guides, physician-aligned videos, and trusted external references—so you
              understand the science, the process, and what Reform Vital membership
              includes before you start.
            </p>
            <div className="rv-resources-hero-links">
              <a href="#videos">Watch videos</a>
              <a href="#library">Browse guides</a>
              <a href="#external">Trusted sources</a>
            </div>
          </div>
        </section>

        <section className="section rv-resources-featured">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Start here
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "40rem" }}>
                Core Reform Vital guides with deep links into treatments and programs.
              </p>
            </div>

            <div className="rv-resources-feature-grid">
              {featured.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rv-resource-feature"
                  data-animate="zoom"
                >
                  <div className="rv-resource-feature-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.imageAlt} />
                  </div>
                  <div className="rv-resource-feature-body">
                    <span className="rv-resource-type">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="rv-resource-cta">Read guide →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="section rv-resources-videos">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Watch & learn
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "42rem" }}>
                Curated education videos on GLP-1 therapies, hormone health, and
                medically supervised weight care.
              </p>
            </div>

            <div className="rv-resources-video-grid">
              {videos.map((video) => (
                <article key={video.youtubeId} className="rv-resource-video" data-animate="tilt-left">
                  <div className="rv-resource-video-frame">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="rv-resource-video-body">
                    <span className="rv-resource-type">{video.source}</span>
                    <h3>{video.title}</h3>
                    <p>{video.blurb}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rv-resource-cta"
                    >
                      Open on YouTube →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="library" className="section rv-resources-library">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Full library
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "40rem" }}>
                Internal pages with program details, process explainers, and FAQs.
              </p>
            </div>

            <div className="rv-resources-library-grid">
              {library.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rv-resource-card"
                  data-animate="rise"
                >
                  <div className="rv-resource-card-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" />
                  </div>
                  <div className="rv-resource-card-body">
                    <span className="rv-resource-type">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="rv-resource-cta">View →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="external" className="section rv-resources-external">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Trusted external sources
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "44rem" }}>
                Independent clinical references from NCBI, Mayo Clinic, the FDA, and the
                Endocrine Society. Opens in a new tab.
              </p>
            </div>

            <div className="rv-resources-external-grid">
              {externalReads.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rv-resource-external"
                  data-animate="tilt-right"
                >
                  <span className="rv-resource-type">{item.source}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <span className="rv-resource-cta">Read source ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0, paddingBottom: "4.5rem" }}>
          <div className="container">
            <div className="rv-resources-cta" data-animate="bounce">
              <h3>Ready for physician-guided care?</h3>
              <p>
                Start with an online assessment. Prescriptions only after clinical approval.
              </p>
              <div className="rv-resources-cta-actions">
                <a href="/start" className="btn btn-primary">
                  Start Medical Assessment →
                </a>
                <a href="/treatments" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}>
                  Browse treatments
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
