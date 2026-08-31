import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyStickyNav from "@/components/academy/AcademyStickyNav";
import CardMedia from "@/components/CardMedia";
import { brandConfig } from "@/brand.config";
import { academyArticles } from "@/content/academy";
import { getGuidePdfUrl } from "@/content/academy";

const TREATMENT_SLUGS = ["semaglutide", "tirzepatide"] as const;

const treatmentArticles = academyArticles.filter(
  (article) =>
    article.categorySlug === "weight" ||
    article.categorySlug === "nutrition" ||
    article.categorySlug === "performance" ||
    /semaglutide|tirzepatide/i.test(article.title),
);

const treatmentGuides = brandConfig.healthAcademy.downloadableGuides.filter((guide) =>
  /weight|nutrition|sleep|labs/i.test(`${guide.title} ${guide.desc}`),
);

const guideCovers: Record<string, string> = {
  "weight-optimization-guide": "/images/resources/guides/weight-optimization-guide.svg",
  "nutrition-playbook": "/images/resources/guides/nutrition-playbook.svg",
  "sleep-guide": "/images/resources/guides/sleep-guide.svg",
  "understanding-your-labs": "/images/resources/guides/understanding-your-labs.svg",
};

const browseCategories = brandConfig.healthAcademy.categories.filter((cat) =>
  ["weight", "nutrition", "sleep", "recipes", "performance", "insights"].includes(cat.slug),
);

const videos = [
  {
    title: "Understanding Semaglutide and Tirzepatide",
    blurb: "How physician-guided injectable weight-management programs support metabolic health.",
    youtubeId: "IVn4K-lesQM",
    source: "Educational overview",
  },
  {
    title: "Mayo Clinic: Weight Loss Medications",
    blurb: "Trusted medical perspective on prescription weight-loss therapies.",
    youtubeId: "EmBRxbwLBrU",
    source: "Mayo Clinic",
  },
];

const externalReads = [
  {
    title: "Semaglutide — StatPearls (NCBI)",
    summary: "Peer-reviewed clinical summary: mechanism, indications, safety.",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK603723/",
    source: "NCBI Bookshelf",
  },
  {
    title: "Tirzepatide — StatPearls (NCBI)",
    summary: "Clinical overview of tirzepatide for weight and metabolic care.",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK589936/",
    source: "NCBI Bookshelf",
  },
  {
    title: "Mayo Clinic: Prescription Weight-Loss Drugs",
    summary: "What to discuss with a clinician about prescription weight-loss medicines.",
    href: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/weight-loss-drugs/art-20044832",
    source: "Mayo Clinic",
  },
  {
    title: "FDA: Semaglutide Drug Safety Information",
    summary: "Official FDA safety information on approved semaglutide products.",
    href: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/semaglutide-marketed-ozempic-wegovy-rybelsus-information",
    source: "U.S. FDA",
  },
];

export default function ResourcesPage() {
  const academy = brandConfig.healthAcademy;
  const lead = treatmentArticles[0];

  return (
    <>
      <Navbar />
      <main className="rv-mag">
        <AcademyStickyNav />

        <section className="rv-script-page-hero">
          <div className="container">
            <p className="rv-script-eyebrow">Health Academy</p>
            <h1>Semaglutide &amp; Tirzepatide resources</h1>
            <p>
              Physician-reviewed guides, articles, and tools for our two weight-management programs —
              everything you need between visits.
            </p>
            <div
              className="rv-script-section__foot rv-script-section__foot--left"
              style={{ marginTop: "1.25rem" }}
            >
              <a href="#library" className="rv-script-btn rv-script-btn--primary">
                Browse library
              </a>
              <a href="/resources/tools" className="rv-script-btn rv-script-btn--secondary">
                Interactive tools
              </a>
            </div>
          </div>
        </section>

        <section id="treatments" className="rv-res-treatments" data-animate="rise">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2>Our programs</h2>
              <p>Two clinician-guided options — each with transparent monthly pricing.</p>
            </div>
            <div className="rv-res-treatments__grid">
              {TREATMENT_SLUGS.map((slug) => {
                const detail = brandConfig.treatmentDetails[slug];
                const image = `/images/vials/${slug}.png`;
                return (
                  <a key={slug} href={`/treatments/${slug}`} className="rv-res-treatment-card">
                    <CardMedia
                      src={image}
                      alt={detail.name}
                      aspect="3/2"
                      sizes="(max-width: 768px) 90vw, 420px"
                    />
                    <div className="rv-res-treatment-card__body">
                      <span>Weight management</span>
                      <h3>{detail.name}</h3>
                      <p>{detail.tagline}</p>
                      <em>From {detail.price} · View program →</em>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {lead ? (
          <section id="lead" className="rv-mag-lead" data-animate="rise">
            <div className="container">
              <a href={`/resources/articles/${lead.slug}`} className="rv-res-feature">
                <CardMedia
                  src={lead.image}
                  alt={lead.title}
                  aspect="16/9"
                  sizes="(max-width: 900px) 100vw, 960px"
                  priority
                />
                <div className="rv-res-feature__body">
                  <span>{lead.category} · {lead.readTime}</span>
                  <h2>{lead.title}</h2>
                  <p>{lead.summary}</p>
                </div>
              </a>
            </div>
          </section>
        ) : null}

        <section id="library" className="rv-res-library" data-animate="peak-fade">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2>Article library</h2>
              <p>Evidence-based reading for Semaglutide and Tirzepatide members.</p>
            </div>
            <div className="rv-res-grid">
              {treatmentArticles.map((article) => (
                <a
                  key={article.slug}
                  href={`/resources/articles/${article.slug}`}
                  className="rv-res-card"
                >
                  <CardMedia
                    src={article.image}
                    alt={article.title}
                    aspect="4/3"
                    sizes="(max-width: 768px) 90vw, 280px"
                  />
                  <div className="rv-res-card__body">
                    <span>
                      {article.published} · {article.category}
                    </span>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className="rv-script-section rv-script-section--sand" data-animate="peak-fade">
          <div className="container">
            <div className="rv-script-section__head">
              <p className="rv-script-eyebrow">Downloadable guides</p>
              <h2>Playbooks for your protocol</h2>
              <p>PDF guides aligned with Semaglutide and Tirzepatide care.</p>
            </div>
            <div className="rv-res-grid rv-res-grid--guides">
              {treatmentGuides.map((guide) => {
                const slug = guide.href.split("/").pop() ?? "";
                const pdfUrl = slug ? getGuidePdfUrl(slug) : "#";
                const cover =
                  guideCovers[slug] ?? `/images/resources/guides/${slug}.svg`;
                return (
                  <article key={guide.title} className="rv-res-card rv-res-card--guide">
                    <CardMedia
                      src={cover}
                      alt={guide.title}
                      aspect="4/3"
                      sizes="(max-width: 768px) 90vw, 280px"
                    />
                    <div className="rv-res-card__body">
                      <span>PDF guide</span>
                      <h3>{guide.title}</h3>
                      <p>{guide.desc}</p>
                      <div className="rv-res-card__links">
                        <a href={pdfUrl} download>
                          Download PDF
                        </a>
                        <a href={guide.href}>Read online →</a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="categories" className="rv-script-section" data-animate="peak-fade">
          <div className="container">
            <div className="rv-script-section__head">
              <p className="rv-script-eyebrow">Browse topics</p>
              <h2>Supporting topics</h2>
              <p>Nutrition, sleep, and habits that complement your treatment plan.</p>
            </div>
            <div className="rv-script-academy__grid">
              {browseCategories.map((cat) => (
                <a key={cat.slug} href={cat.href} className="rv-script-academy__card">
                  {"image" in cat && cat.image ? (
                    <CardMedia
                      src={cat.image}
                      alt={cat.label}
                      aspect="4/3"
                      sizes="(max-width: 640px) 45vw, 180px"
                      className="rv-script-academy__card-media"
                    />
                  ) : null}
                  <span>{cat.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="rv-mag-tools" data-animate="rise">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2>Interactive tools</h2>
              <p>Quick assessments to understand your baseline during treatment.</p>
            </div>
            <div className="rv-mag-tools__row">
              {academy.tools.slice(0, 6).map((tool) => (
                <a key={tool.label} href={tool.href}>
                  {tool.label}
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
            <div className="rv-mag-monthly">
              <span>{academy.monthlyReport.month}</span>
              <h3>{academy.monthlyReport.title}</h3>
              <p>{academy.monthlyReport.summary}</p>
              <a href={academy.monthlyReport.href} className="btn btn-primary">
                Read this month&apos;s report →
              </a>
            </div>
          </div>
        </section>

        <section className="rv-res-extra" data-animate="peak-fade">
          <div className="container rv-res-extra__grid">
            <div id="videos">
              <h3>Watch &amp; learn</h3>
              <div className="rv-mag-videos">
                {videos.map((video) => (
                  <a
                    key={video.youtubeId}
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rv-mag-video"
                  >
                    <span className="rv-mag-video__thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span>
                      <strong>{video.title}</strong>
                      <em>{video.source}</em>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div id="external">
              <h3>Trusted sources</h3>
              <ul className="rv-mag-external">
                {externalReads.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <span>{item.source}</span>
                      <strong>{item.title}</strong>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rv-script-cta-band" data-animate="bounce">
          <div className="container rv-script-cta-band__inner">
            <div>
              <h2>Ready for physician-guided care?</h2>
              <p>Start with an online assessment. Prescriptions only after clinical approval.</p>
            </div>
            <div className="rv-script-cta-band__actions">
              <a href="/start" className="rv-script-btn rv-script-btn--light">
                Schedule a consultation →
              </a>
              <a href="/treatments" className="rv-script-btn rv-script-btn--outline-light">
                Browse treatments
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
