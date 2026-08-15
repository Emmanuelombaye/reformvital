import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyStickyNav from "@/components/academy/AcademyStickyNav";
import Image from "next/image";
import FastImg from "@/components/FastImg";
import { brandConfig } from "@/brand.config";
import { getGuidePdfUrl } from "@/content/academy";

const featured = [
  {
    title: "How GLP-1 Therapies Support Metabolic Reset",
    type: "Guide",
    summary:
      "Semaglutide and Tirzepatide in plain language—appetite signaling, first-90-day expectations, and physician monitoring.",
    href: "/resources/articles/glp1-metabolic-reset",
    image: "/images/resource-glp1.webp",
    imageAlt: "GLP-1 therapy education",
  },
  {
    title: "Hormone Optimization 101",
    type: "Education",
    summary:
      "Why labs come first for TRT and women's hormone therapy—and how protocols follow your biomarkers.",
    href: "/resources/articles/hormone-optimization-101",
    image: "/images/resource-hormones.webp",
    imageAlt: "Hormone optimization education",
  },
  {
    title: "Using Your AI Health Coach Between Visits",
    type: "How-to",
    summary:
      "Track protein, hydration, sleep, and adherence—accountability that never replaces your physician.",
    href: "/resources/articles/ai-health-coach-between-visits",
    image: "/images/resource-ai-coach.webp",
    imageAlt: "AI health coach education",
  },
];

const guideCovers: Record<string, string> = {
  "longevity-blueprint": "/images/academy-supplements.webp",
  "executive-health-guide": "/images/lifestyle-education.webp",
  "weight-optimization-guide": "/images/academy-nutrition.webp",
  "hormone-health-guide": "/images/resource-hormones.webp",
  "understanding-your-labs": "/images/why-evidence.webp",
  "healthy-aging-handbook": "/images/about-longevity.webp",
  "sleep-guide": "/images/8.webp",
  "nutrition-playbook": "/images/academy-recipes.webp",
};

const recentArticles = [
  {
    title: "What to Expect in Your First 90 Days on GLP-1 Therapy",
    category: "Weight Optimization",
    date: "August 2026",
    href: "/resources/articles/first-90-days-glp1",
    image: "/images/resource-glp1.webp",
  },
  {
    title: "Understanding Your Lab Results: A Patient Guide",
    category: "Advanced Labs",
    date: "August 2026",
    href: "/resources/articles/understanding-labs",
    image: "/images/why-evidence.webp",
  },
  {
    title: "Sleep, Recovery, and Hormone Health",
    category: "Sleep",
    date: "July 2026",
    href: "/resources/articles/sleep-recovery-hormones",
    image: "/images/8.webp",
  },
  {
    title: "Longevity & Cellular Energy: NAD+ Explained",
    category: "Longevity",
    date: "July 2026",
    href: "/resources/articles/nad-longevity-cellular-energy",
    image: "/images/about-longevity.webp",
  },
];

const videos = [
  {
    title: "Understanding GLP-1 Medications",
    blurb: "How GLP-1 receptor agonists support metabolic health and weight management.",
    youtubeId: "IVn4K-lesQM",
    source: "Educational overview",
  },
  {
    title: "Hormone Health Basics",
    blurb: "Why hormone balance matters for energy, composition, and long-term wellness.",
    youtubeId: "ZteQT00cRR0",
    source: "Hormone education",
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
    title: "Mayo Clinic: Prescription Weight-Loss Drugs",
    summary: "What to discuss with a clinician about prescription weight-loss medicines.",
    href: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/weight-loss-drugs/art-20044832",
    source: "Mayo Clinic",
  },
  {
    title: "FDA: Medicines Containing Semaglutide",
    summary: "Official safety information on approved semaglutide products.",
    href: "https://www.fda.gov/drugs/drug-safety-and-availability/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
    source: "U.S. FDA",
  },
  {
    title: "Endocrine Society — Endocrine Library",
    summary: "Patient education on testosterone, menopause, thyroid, and more.",
    href: "https://www.endocrine.org/patient-engagement/endocrine-library",
    source: "Endocrine Society",
  },
];

const clusterThumbs = [
  "/images/resource-glp1.webp",
  "/images/story-nutrition.webp",
  "/images/resource-hormones.webp",
  "/images/lifestyle-mindfulness.webp",
  "/images/about-longevity.webp",
  "/images/resource-recovery.webp",
];

export default function ResourcesPage() {
  const academy = brandConfig.healthAcademy;
  const categories = academy.categories.slice(0, 8);
  const lead = featured[0];
  const stacked = featured.slice(1);
  const [featuredStory, ...otherStories] = academy.successStories;

  return (
    <>
      <Navbar />
      <main className="rv-mag">
        <AcademyStickyNav />

        {/* Asymmetric masthead */}
        <section className="rv-mag-mast" data-animate="peak-fade">
          <div className="container rv-mag-mast__grid">
            <div className="rv-mag-mast__copy">
              <p className="rv-mag-kicker">Health Academy</p>
              <h1>{academy.title.replace("Reform Vital ", "")}</h1>
              <p className="rv-mag-mast__sub">{academy.subtitle}</p>
              <div className="rv-mag-mast__actions">
                <a href="#lead" className="btn btn-primary">
                  Start reading
                </a>
                <a href="/resources/tools" className="btn btn-outline">
                  Interactive tools
                </a>
              </div>
            </div>
            <div className="rv-mag-mast__media">
              <Image
                src="/images/start-wellness.webp"
                alt="Reform Vital Health Academy lifestyle"
                fill
                sizes="(max-width: 900px) 92vw, 42vw"
                quality={65}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>

        {/* Lead magazine block */}
        <section id="lead" className="rv-mag-lead" data-animate="rise">
          <div className="container">
            <div className="rv-mag-lead__grid">
              <a href={lead.href} className="rv-mag-lead__hero">
                <FastImg src={lead.image} alt={lead.imageAlt} sizes="(max-width: 900px) 100vw, 60vw" />
                <div className="rv-mag-lead__hero-body">
                  <span>{lead.type}</span>
                  <h2>{lead.title}</h2>
                  <p>{lead.summary}</p>
                </div>
              </a>
              <div className="rv-mag-lead__stack">
                {stacked.map((item) => (
                  <a key={item.href} href={item.href} className="rv-mag-lead__card">
                    <FastImg
                      src={item.image}
                      alt={item.imageAlt}
                      width={400}
                      height={280}
                      sizes="180px"
                    />
                    <div>
                      <span>{item.type}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category bento */}
        <section id="categories" className="rv-mag-bento" data-animate="peak-fade">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2>Explore by category</h2>
              <p>Physician-reviewed pillars of metabolic and longevity care.</p>
            </div>
            <div className="rv-mag-bento__grid">
              {categories.map((cat, i) => (
                <a
                  key={cat.slug}
                  href={cat.href}
                  className={`rv-mag-bento__tile${i === 0 || i === 3 ? " rv-mag-bento__tile--wide" : ""}`}
                >
                  {"image" in cat && cat.image ? (
                    <FastImg src={cat.image} alt="" width={800} height={600} sizes="(max-width: 900px) 90vw, 30vw" />
                  ) : null}
                  <span>{cat.label}</span>
                </a>
              ))}
            </div>
            {academy.categories.length > 8 && (
              <p className="rv-mag-more">
                <a href="/resources/category/longevity">Browse all categories →</a>
              </p>
            )}
          </div>
        </section>

        {/* Featured story + covers */}
        <section id="stories" className="rv-mag-stories" data-animate="rise">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2>Member journeys</h2>
              <p>Real outcomes with physician-guided protocols.</p>
            </div>
            {featuredStory && (
              <a href={featuredStory.href} className="rv-mag-stories__feature">
                {"image" in featuredStory && featuredStory.image ? (
                  <FastImg
                    src={featuredStory.image}
                    alt=""
                    width={1200}
                    height={800}
                    sizes="(max-width: 900px) 100vw, 70vw"
                  />
                ) : null}
                <div className="rv-mag-stories__quote">
                  <span>{featuredStory.outcome}</span>
                  <p>&ldquo;{featuredStory.story}&rdquo;</p>
                  <em>Read the story →</em>
                </div>
              </a>
            )}
            <div className="rv-mag-stories__grid">
              {otherStories.map((story) => (
                <a key={story.outcome} href={story.href} className="rv-mag-stories__card">
                  {"image" in story && story.image ? (
                    <FastImg src={story.image} alt="" width={600} height={400} sizes="(max-width: 900px) 90vw, 30vw" />
                  ) : null}
                  <div>
                    <span>{story.outcome}</span>
                    <p>{story.story}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Library: guides + topics + recent */}
        <section id="library" className="rv-mag-library" data-animate="peak-fade">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2 id="guides">Guides & reading list</h2>
              <p>Downloadable playbooks and editorial picks—with imagery, not text-only cards.</p>
            </div>

            <div className="rv-mag-guides">
              {academy.downloadableGuides.map((guide) => {
                const slug = guide.href.split("/").pop() ?? "";
                const pdfUrl = slug ? getGuidePdfUrl(slug) : "#";
                const cover = guideCovers[slug] || "/images/academy-recipes.webp";
                return (
                  <article key={guide.title} className="rv-mag-guide">
                    <div className="rv-mag-guide__cover">
                      <FastImg src={cover} alt="" width={600} height={400} sizes="(max-width: 900px) 90vw, 280px" />
                    </div>
                    <div className="rv-mag-guide__body">
                      <h3>{guide.title}</h3>
                      <p>{guide.desc}</p>
                      <div className="rv-mag-guide__links">
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

            <div id="topics" className="rv-mag-editorial">
              {academy.topicClusters.slice(0, 2).map((cluster) => (
                <div key={cluster.title} className="rv-mag-editorial__block">
                  <h3>{cluster.title}</h3>
                  <ul>
                    {cluster.articles.map((article, i) => (
                      <li key={article.title}>
                        <a href={article.href}>
                          <FastImg
                            src={clusterThumbs[i % clusterThumbs.length]}
                            alt=""
                            width={160}
                            height={120}
                            sizes="72px"
                          />
                          <span>
                            <strong>{article.title}</strong>
                            <em>{article.summary}</em>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rv-mag-recent">
              <h3>Recent articles</h3>
              <div className="rv-mag-recent__grid">
                {recentArticles.map((article) => (
                  <a key={article.href} href={article.href} className="rv-mag-recent__card">
                    <FastImg src={article.image} alt="" width={600} height={400} sizes="(max-width: 900px) 90vw, 30vw" />
                    <div>
                      <span>
                        {article.date} · {article.category}
                      </span>
                      <h4>{article.title}</h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rv-mag-library__extra">
              <div>
                <h3 id="videos">Watch & learn</h3>
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
              <div>
                <h3 id="external">Trusted sources</h3>
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
          </div>
        </section>

        {/* Tools strip */}
        <section id="tools" className="rv-mag-tools" data-animate="rise">
          <div className="container">
            <div className="rv-mag-section-head">
              <h2>Interactive tools</h2>
              <p>Quick assessments to understand your baseline.</p>
            </div>
            <div className="rv-mag-tools__row">
              {academy.tools.map((tool) => (
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

        <section className="rv-mag-cta" data-animate="bounce">
          <div className="container">
            <h2>Ready for physician-guided care?</h2>
            <p>Start with an online assessment. Prescriptions only after clinical approval.</p>
            <div className="rv-mag-cta__actions">
              <a href="/start" className="btn btn-primary">
                Schedule a consultation →
              </a>
              <a href="/treatments" className="btn btn-outline">
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
