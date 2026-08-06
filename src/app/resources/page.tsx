import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyStickyNav from "@/components/academy/AcademyStickyNav";
import { brandConfig } from "@/brand.config";
import { getGuidePdfUrl } from "@/content/academy";

const featured = [
  {
    title: "How GLP-1 Therapies Support Metabolic Reset",
    type: "Guide",
    summary:
      "A plain-language overview of Semaglutide and Tirzepatide: appetite signaling, first-90-day expectations, and how physician monitoring keeps care safe.",
    href: "/resources/articles/glp1-metabolic-reset",
    image: "/images/resource-glp1.jpg",
    imageAlt: "GLP-1 therapy education visual",
  },
  {
    title: "Hormone Optimization 101",
    type: "Education",
    summary:
      "Why labs come first for TRT and women's hormone therapy—and how Reform Vital personalizes protocols around your biomarkers.",
    href: "/resources/articles/hormone-optimization-101",
    image: "/images/resource-hormones.jpg",
    imageAlt: "Hormone optimization education visual",
  },
  {
    title: "Using Your AI Health Coach Between Visits",
    type: "How-to",
    summary:
      "Track protein, hydration, sleep, and adherence between appointments—accountability support that never replaces your physician.",
    href: "/resources/articles/ai-health-coach-between-visits",
    image: "/images/resource-ai-coach.jpg",
    imageAlt: "AI health coach dashboard visual",
  },
];

const recentArticles = [
  {
    title: "What to Expect in Your First 90 Days on GLP-1 Therapy",
    category: "Weight Optimization",
    date: "August 2026",
    href: "/resources/articles/first-90-days-glp1",
  },
  {
    title: "Understanding Your Lab Results: A Patient Guide",
    category: "Advanced Labs",
    date: "August 2026",
    href: "/resources/articles/understanding-labs",
  },
  {
    title: "Sleep, Recovery, and Hormone Health",
    category: "Sleep",
    date: "July 2026",
    href: "/resources/articles/sleep-recovery-hormones",
  },
  {
    title: "Longevity & Cellular Energy: NAD+ Explained",
    category: "Longevity",
    date: "July 2026",
    href: "/resources/articles/nad-longevity-cellular-energy",
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
  const academy = brandConfig.healthAcademy;

  return (
    <>
      <Navbar />
      <main className="rv-academy">
        <AcademyStickyNav />
        <section className="rv-academy-hero">
          <div className="container">
            <span className="badge" style={{ marginBottom: "0.85rem" }}>
              HEALTH ACADEMY
            </span>
            <h1>{academy.title}</h1>
            <p>{academy.subtitle}</p>
            <div className="rv-academy-hero-links">
              <a href="#categories">Browse categories</a>
              <a href="#topics">Featured topics</a>
              <a href="#guides">Downloadable guides</a>
              <a href="/resources/tools">Interactive tools</a>
              <a href="/resources/report">Monthly report</a>
            </div>
          </div>
        </section>

        <section id="categories" className="section rv-academy-categories">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Health categories to explore
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "42rem" }}>
                Physician-reviewed guides across every pillar of health optimization.
              </p>
            </div>

            <div className="rv-academy-category-grid">
              {academy.categories.map((cat) => (
                <a key={cat.slug} href={cat.href} className="rv-academy-category" data-animate="rise">
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="topics" className="section rv-academy-clusters">
          <div className="container">
            {academy.topicClusters.map((cluster) => (
              <div key={cluster.title} className="rv-academy-cluster" data-animate="rise">
                <h2 className="rv-academy-cluster-title">{cluster.title}</h2>
                <div className="rv-academy-cluster-grid">
                  {cluster.articles.map((article) => (
                    <a key={article.title} href={article.href} className="rv-academy-article">
                      <h3>{article.title}</h3>
                      <p>{article.summary}</p>
                      <span className="rv-resource-cta">Read article →</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="guides" className="section rv-academy-guides">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Downloadable guides
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "42rem" }}>
                Premium PDF resources—physician-aligned playbooks for longevity, hormones, nutrition, and more.
              </p>
            </div>

            <div className="rv-academy-guides-grid">
              {academy.downloadableGuides.map((guide) => {
                const slug = guide.href.split("/").pop() ?? "";
                const pdfUrl = slug ? getGuidePdfUrl(slug) : "#";
                return (
                  <article key={guide.title} className="rv-academy-guide" data-animate="rise">
                    <span className="rv-academy-guide-icon" aria-hidden>PDF</span>
                    <h3>{guide.title}</h3>
                    <p>{guide.desc}</p>
                    <div className="rv-academy-guide-links">
                      <a href={pdfUrl} className="rv-resource-cta" download>
                        Download PDF →
                      </a>
                      <a href={guide.href} className="rv-resource-cta rv-resource-cta--muted">
                        Read online →
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tools" className="section rv-academy-tools">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Interactive tools
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "40rem" }}>
                Quick assessments to help you understand your health baseline.
              </p>
            </div>

            <div className="rv-academy-tools-grid">
              {academy.tools.map((tool) => (
                <a key={tool.label} href={tool.href} className="rv-academy-tool" data-animate="bounce">
                  <span>{tool.label}</span>
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="section rv-academy-stories">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Success stories
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "42rem" }}>
                Real outcomes—energy, biomarkers, fitness, and sustainable weight management with physician support.
              </p>
            </div>

            <div className="rv-academy-stories-grid">
              {academy.successStories.map((story) => (
                <a key={story.outcome} href={story.href} className="rv-academy-story" data-animate="tilt-right">
                  <span className="rv-resource-type">{story.outcome}</span>
                  <p>{story.story}</p>
                  <span className="rv-resource-cta">Read more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section rv-academy-monthly">
          <div className="container">
            <div className="rv-academy-monthly-card" data-animate="bounce">
              <span className="rv-resource-type">{academy.monthlyReport.month}</span>
              <h2>{academy.monthlyReport.title}</h2>
              <p>{academy.monthlyReport.summary}</p>
              <ul className="rv-academy-monthly-topics">
                {academy.monthlyReport.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <a href={academy.monthlyReport.href} className="btn btn-primary">
                Read this month&apos;s report →
              </a>
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

        <section id="recent" className="section rv-academy-recent">
          <div className="container">
            <div className="section-head" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "0.45rem" }}>
                Recent articles
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "40rem" }}>
                Physician-reviewed education updated regularly.
              </p>
            </div>

            <div className="rv-academy-recent-grid">
              {recentArticles.map((article) => (
                <a key={article.title} href={article.href} className="rv-academy-recent-card" data-animate="tilt-left">
                  <span className="rv-academy-recent-meta">
                    {article.date} / {article.category}
                  </span>
                  <h3>{article.title}</h3>
                  <span className="rv-resource-cta">Read →</span>
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
                  Schedule a Consultation →
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
