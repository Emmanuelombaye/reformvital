export const brandConfig = {
  // ──── Brand Identity ────
  name: "REFORM VITAL",
  fullName: "Reform Vital Health LLC",
  legalOwner: "Javier Alexis Solano",
  tagline: "MODERN MEDICINE. PERSONALIZED HEALTH. REAL RESULTS.",
  slogan: "Physician-Guided Metabolic Health & Telehealth Optimization",
  domain: "REFORMVITAL.COM",
  logo: "/reform-vital-logo.svg",
  favicon: "/favicon.ico",

  // ──── Core Pillars ────
  pillars: [
    { title: "Physician Guided", desc: "Licensed medical providers & medical directors supervising your care" },
    { title: "Personalized Treatment", desc: "Tailored peptide stacks, GLP-1 plans, and hormone protocols" },
    { title: "AI Powered Health Coach", desc: "24/7 accountability, habit coaching, and daily tracking" },
    { title: "Track. Improve. Thrive.", desc: "Measurable biomarker improvements and progress reports" },
  ],

  // ──── Color Palette (Reform Vital Navy & Teal Aesthetics) ────
  colors: {
    primary: "#0D1B2A",         // Deep Navy Blue (#0d1b2a)
    primaryDark: "#070E17",     // Dark Navy Offset (#070e17)
    teal: "#00A896",            // Reform Vital DNA Helix Teal (#00a896)
    cyan: "#00B4D8",            // Vibrant Cyan Accent (#00b4d8)
    mintSoft: "#F4F8F7",        // Ice Mint Cream Background (#f4f8f7)
    surface: "#FFFFFF",         // Card Surface White
    gold: "#D4AF37",            // Luxury Elite Badge Accent
    text: "#0D1B2A",            // Deep Navy Text
    textMuted: "rgba(13, 27, 42, 0.72)",
    border: "#00A896",          // Teal Border
    shadow: "#070E17",          // Hard Offset Shadow
  },

  // ──── Typography ────
  fonts: {
    heading: "'Figtree', system-ui, sans-serif",
    body: "'Figtree', system-ui, sans-serif",
  },

  // ──── Offer Banner ────
  offerBanner: {
    enabled: true,
    eyebrow: "LIMITED TELEHEALTH OFFER",
    code: "VITAL2026",
    price: "$149",
    period: "/mo",
    stamp: "Doctor Included",
    subtext: "Physician consultation, custom GLP-1 prescription & overnight pharmacy delivery.",
    ctaText: "Claim Consultation",
    ctaLink: "/start",
  },

  // ──── Trust Proofs (Marquee) ────
  trustProofs: [
    { label: "Free Expedited Shipment", icon: "truck", color: "#B9A9FE" },
    { label: "U.S. Licensed Pharmacies", icon: "award", color: "#00B4D8" },
    { label: "Licensed Providers in all 50 States", icon: "shield", color: "#F59E0B" },
  ],

  // ──── Multi-Page Navigation ────
  nav: {
    links: [
      { label: "Treatments", href: "/treatments" },
      { label: "Memberships", href: "/memberships" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "AI Coach", href: "/ai-coach" },
      { label: "Health Academy", href: "/resources" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
    ],
    ctaText: "Start Assessment",
    ctaLink: "/start",
    loginText: "Portal",
    loginLink: "/portal",
    phone: "(786) 651-2127",
    email: "admin@reformvital.com",
  },

  // ──── Stats ────
  stats: [
    { value: "100%", label: "Licensed U.S. Medical Directors & MDs" },
    { value: "50 States", label: "Physician-Guided Telehealth Coverage" },
    { value: "24/7", label: "AI Health Coach Between Visits" },
  ],

  // ──── Hero Section ────
  hero: {
    trustpilot: {
      score: "Licensed",
      max: "Care",
      reviewsCount: "U.S.",
      label: "Physician-Guided Telehealth",
    },
    dynamicWords: [
      { text: "Metabolic Reset", color: "#5EEAD4" },
      { text: "Hormone Vitality", color: "#38BDF8" },
      { text: "Peptide Therapy", color: "#FBBF24" },
      { text: "Cellular Edge", color: "#A3E635" },
      { text: "Vital Rebuild", color: "#C4B5FD" },
    ],
    headline: "Personalized care. One clear monthly price.",
    subheadline: "Weight-management programs · Memberships · Health Academy",
    description:
      "Simple, clinician-guided telehealth with transparent program pricing. Purchase first, then complete secure medical intake for licensed-provider review.",
    primaryCtaText: "Explore Treatments",
    primaryCtaNote: "Licensed provider review · RX only if prescribed",
    secondaryCtaText: "How It Works",
    ctaLink: "/start",
    cardHighlight: {
      category: "PHYSICIAN-GUIDED METABOLIC PROGRAM",
      title: "Compounded Semaglutide / Tirzepatide+",
      price: "$149",
      unit: "/mo",
      bullets: [
        "100% Online Physician Evaluation & Ongoing Follow-up",
        "Targeted Metabolic Health & GLP-1 Formulations",
        "Includes Vitamin B12 Support & Syringes",
        "Free Expedited Cold-Chain Pharmacy Delivery",
      ],
      ctaText: "Begin Health Assessment",
    },
    socialProof: [
      { value: "100%", label: "Licensed U.S. medical directors" },
      { value: "50 States", label: "Physician-guided telehealth care" },
      { rating: "24/7", ratingText: "Always on", label: "AI coach between physician visits" },
    ],
  },

  // ──── Treatment Programs (Weight Management only) ────
  services: [
    {
      id: "weight-management",
      title: "Weight Management",
      subtitle:
        "Clinician-guided injectable weight-management programs with one clear monthly price.",
      therapies: [
        {
          slug: "semaglutide",
          name: "Semaglutide",
          desc: "A clinician-guided weight-management program built around your history, not a one-size plan.",
          price: "$149/mo",
        },
        {
          slug: "tirzepatide",
          name: "Tirzepatide",
          desc: "A dual-pathway weight-management program for people reviewed and approved by a licensed clinician.",
          price: "$249/mo",
        },
      ],
    },
  ],

  // ──── Detailed Treatment Pages Dictionary ────
  treatmentDetails: {
    semaglutide: {
      name: "Semaglutide",
      category: "Weight Management",
      price: "$149/mo",
      concentration: "2.5 mg/mL",
      form: "Injectable solution",
      tagline:
        "A clinician-guided weight-management program built around your history, not a one-size plan.",
      image: "/images/vials/semaglutide.png",
      badge: "RX ONLY",
      description:
        "The Semaglutide Program is a clinician-guided weight-management program. Purchase comes first, the secure medical intake follows, and a licensed clinician determines whether treatment is appropriate.",
      features: [
        "Online licensed-provider review",
        "Secure medical intake after checkout",
        "Ongoing program support by secure message",
        "Standard shipping included in monthly price",
        "Routine follow-up required by the program",
      ],
      clinicalTrial:
        "May be compounded — not FDA-approved. Availability depends on independent legal, clinical, and pharmacy review.",
      howToUse:
        "This page contains no dosing schedule. Instructions come only from the prescribing clinician and dispensing pharmacy where a program is approved.",
    },
    tirzepatide: {
      name: "Tirzepatide",
      category: "Weight Management",
      price: "$249/mo",
      concentration: "5 mg/mL",
      form: "Injectable solution",
      tagline:
        "A dual-pathway weight-management program for people reviewed and approved by a licensed clinician.",
      image: "/images/vials/tirzepatide.png",
      badge: "RX ONLY",
      description:
        "The Tirzepatide Program is a clinician-guided weight-management program with provider review and one clear monthly price. A licensed clinician determines whether treatment is appropriate after your secure intake.",
      features: [
        "Online licensed-provider review",
        "Secure medical intake after checkout",
        "Ongoing program support by secure message",
        "Standard shipping included in monthly price",
        "Routine follow-up required by the program",
      ],
      clinicalTrial:
        "May be compounded — not FDA-approved. Not equivalent to FDA-approved branded tirzepatide products.",
      howToUse:
        "This page contains no dosing schedule. Instructions come only from the prescribing clinician and dispensing pharmacy where a program is approved.",
    },
  },

  // ──── Membership Tier Programs ────
  memberships: [
    {
      id: "essentials",
      name: "Essentials",
      focus: "Medical Weight Loss",
      badge: "CORE CARE",
      price: "$149",
      period: "/month",
      monthlyPrice: 149,
      quarterlyPrice: 119,
      desc: "Ideal for patients beginning a single physician-guided therapy—GLP-1 weight loss or foundational care.",
      features: [
        "Licensed U.S. Physician Consultation",
        "Prescription Management & Refills",
        "Compounding Pharmacy Shipping Included",
        "24/7 AI Health Coach Access",
        "Quarterly Provider Check-in",
      ],
      ctaText: "Choose Essentials",
      highlight: false,
    },
    {
      id: "performance",
      name: "Performance",
      focus: "TRT & Metabolic Stacking",
      badge: "MOST POPULAR",
      price: "$249",
      period: "/month",
      monthlyPrice: 249,
      quarterlyPrice: 199,
      desc: "Comprehensive metabolic health, hormone optimization, peptide stacking & monthly provider guidance.",
      features: [
        "Everything in Essentials",
        "Comprehensive Blood Panel & Lab Review",
        "Monthly 1-on-1 Physician Coaching",
        "Custom Peptide Stacking Protocols",
        "Priority Expedited Cold-Chain Shipping",
        "Full Patient Dashboard Metrics Tracking",
      ],
      ctaText: "Choose Performance",
      highlight: true,
    },
    {
      id: "elite",
      name: "Elite Concierge",
      focus: "Longevity & Executive Care",
      badge: "EXECUTIVE",
      price: "$399",
      period: "/month",
      monthlyPrice: 399,
      quarterlyPrice: 319,
      desc: "White-glove longevity optimization, advanced labs, multi-peptide protocols & direct medical director access.",
      features: [
        "Everything in Performance",
        "Advanced Genetic & Hormone Lab Panels",
        "Direct Concierge Medical Team Messaging",
        "Personalized Metabolic & Longevity Roadmap",
        "Dedicated Medical Director Oversight",
        "Free Quarterly Lab Panels Included",
      ],
      ctaText: "Choose Elite",
      highlight: false,
    },
  ],

  // ──── AI Health Coach & Dashboard Features ────
  aiCoach: {
    headline: "Your 24/7 AI Health & Accountability Coach",
    subheadline: "Continuous support between physician check-ins to ensure measurable outcomes.",
    features: [
      { title: "Daily Habit Coaching", desc: "Customized reminders for injections, hydration, and protein goals." },
      { title: "Progress Summaries", desc: "Automated weekly reports on body measurements, HRV, and weight trends." },
      { title: "Goal Reminders", desc: "Interactive milestone tracking to keep you motivated throughout your journey." },
      { title: "Educational Guidance", desc: "Instant answers regarding diet, lifestyle adaptation, and peptide research." },
    ],
    dashboardMetrics: [
      "Starting, Current & Goal Weight",
      "Body Measurements & Progress Photos",
      "Blood Pressure & Resting Heart Rate",
      "Sleep Quality & Recovery Score",
      "Daily Protein & Water Intake Tracking",
      "Exercise & Workout Logging",
    ],
  },

  // ──── How It Works Steps ────
  howItWorks: {
    headline: "Getting care should be simple.",
    subtitle: "Purchase first, then complete the secure medical intake for licensed-provider review.",
    steps: [
      { step: "1", title: "Select a program", description: "Choose Semaglutide or Tirzepatide and review the all-inclusive monthly program price." },
      { step: "2", title: "Complete secure intake", description: "After checkout, complete your confidential medical history and goals in the patient portal." },
      { step: "3", title: "Licensed provider review", description: "A licensed U.S. clinician reviews your intake and determines whether treatment is appropriate." },
      { step: "4", title: "Fulfillment & follow-up", description: "If prescribed, medication ships from licensed pharmacies. Ongoing follow-up is included in your program." },
    ],
  },

  pricingPromise: {
    headline: "The price you see is the price you pay.",
    body: "Program pricing includes licensed provider review, secure intake, standard shipping, and ongoing program support—unless specifically noted otherwise.",
    exclusions: [
      "Laboratory testing beyond what your clinician orders",
      "Expedited shipping upgrades",
      "Replacement products outside program terms",
      "Third-party services not included in your plan",
    ],
  },

  safetyStatements: [
    "Treatment is never guaranteed — a licensed clinician determines eligibility after review.",
    "Purchasing a program does not guarantee that a prescription will be issued.",
    "Compounded products may be offered where clinically appropriate and legally permitted.",
    "Not for use during pregnancy or while breastfeeding unless explicitly approved.",
    "Report severe abdominal pain, persistent vomiting, or allergic reactions immediately — call 911 for emergencies.",
    "Reform Vital does not provide emergency medical care.",
    "Availability varies by state, medical history, and clinician judgment.",
    "This site is for informational purposes; individual results vary.",
  ],

  trustSignals: [
    { label: "HIPAA Secure", icon: "shield" },
    { label: "Licensed Medical Providers", icon: "provider" },
    { label: "Personalized Treatment Plans", icon: "plan" },
    { label: "Pharmacy Partner", icon: "pharmacy" },
    { label: "Ongoing Provider Support", icon: "support" },
    { label: "Secure Online Consultations", icon: "consult" },
  ],

  whyReformVital: {
    headline: "Why Reform Vital?",
    subtitle: "Concierge healthcare built on trust, personalization, and long-term partnership—not just prescriptions.",
    pillars: [
      {
        title: "Personalized Care",
        desc: "Every protocol is tailored to your biomarkers, goals, and lifestyle—not a one-size-fits-all approach.",
        image: "/images/why-personalized.webp",
      },
      {
        title: "Ongoing Provider Support",
        desc: "Licensed physicians stay involved with follow-ups, lab reviews, and treatment adjustments.",
        image: "/images/why-support.webp",
      },
      {
        title: "Whole-Person Wellness",
        desc: "We address metabolic health, hormones, recovery, longevity, and prevention together.",
        image: "/images/why-wellness.webp",
      },
      {
        title: "Evidence-Based Medicine",
        desc: "Physician-reviewed protocols grounded in clinical science and transparent about what works.",
        image: "/images/why-evidence.webp",
      },
    ],
  },

  patientJourney: {
    headline: "Your Patient Journey",
    subtitle: "From first assessment to long-term health optimization—every step is physician-guided.",
    steps: [
      { label: "Assessment", desc: "Complete your health profile online" },
      { label: "Consultation", desc: "Meet your licensed provider" },
      { label: "Treatment", desc: "Receive your personalized protocol" },
      { label: "Medication Delivery", desc: "Shipped to your door" },
      { label: "Follow-Up", desc: "Ongoing check-ins & adjustments" },
      { label: "Long-Term Optimization", desc: "Sustainable health partnership" },
    ],
  },

  healthAcademy: {
    title: "Reform Vital Health Academy",
    subtitle:
      "The most trusted destination for health optimization—physician-reviewed guides, actionable tips, and evidence-based education.",
    categories: [
      { slug: "longevity", label: "Longevity", href: "/resources/category/longevity", image: "/images/about-longevity.webp" },
      { slug: "weight", label: "Weight Optimization", href: "/resources/category/weight", image: "/images/story-nutrition.webp" },
      { slug: "hormones", label: "Hormone Optimization", href: "/resources/category/hormones", image: "/images/resource-hormones.webp" },
      { slug: "nutrition", label: "Nutrition", href: "/resources/category/nutrition", image: "/images/academy-nutrition.webp" },
      { slug: "labs", label: "Advanced Labs", href: "/resources/category/labs", image: "/images/why-evidence.webp" },
      { slug: "sleep", label: "Sleep", href: "/resources/category/sleep", image: "/images/8.webp" },
      { slug: "performance", label: "Performance", href: "/resources/category/performance", image: "/images/portal-performance.webp" },
      { slug: "heart", label: "Heart Health", href: "/resources/category/heart", image: "/images/why-support.webp" },
      { slug: "mens", label: "Men's Health", href: "/resources/category/mens", image: "/images/why-personalized.webp" },
      { slug: "womens", label: "Women's Health", href: "/resources/category/womens", image: "/images/why-wellness.webp" },
      { slug: "peptides", label: "Peptide Education", href: "/resources/category/peptides", image: "/images/member-clinical.webp" },
      { slug: "gut", label: "Gut Health", href: "/resources/category/gut", image: "/images/academy-recipes.webp" },
      { slug: "mental", label: "Mental Wellness", href: "/resources/category/mental", image: "/images/lifestyle-mindfulness.webp" },
      { slug: "supplements", label: "Supplements", href: "/resources/category/supplements", image: "/images/academy-supplements.webp" },
      { slug: "recipes", label: "Healthy Recipes", href: "/resources/category/recipes", image: "/images/academy-recipes.webp" },
      { slug: "insights", label: "Physician Insights", href: "/resources/category/insights", image: "/images/story-habits.webp" },
    ],
    topicClusters: [
      {
        title: "Metabolic & Weight Care",
        articles: [
          {
            title: "How GLP-1 Therapies Support Metabolic Reset",
            summary: "A plain-language overview of Semaglutide and Tirzepatide—appetite signaling, expectations, and physician monitoring.",
            href: "/resources/articles/glp1-metabolic-reset",
          },
          {
            title: "What to Expect in Your First 90 Days",
            summary: "Realistic timelines, side-effect management, and how your provider adjusts your protocol.",
            href: "/resources/articles/first-90-days-glp1",
          },
          {
            title: "Medical Weight Loss vs. Product-Only Sellers",
            summary: "Why physician oversight, labs, and follow-up care matter for safe, sustainable results.",
            href: "/resources/articles/medical-weight-loss-vs-sellers",
          },
        ],
      },
      {
        title: "Hormone & Longevity Science",
        articles: [
          {
            title: "Hormone Optimization 101",
            summary: "Why labs come first for TRT and women's hormone therapy—and how protocols are personalized.",
            href: "/resources/articles/hormone-optimization-101",
          },
          {
            title: "Longevity & Cellular Energy (NAD+)",
            summary: "What NAD+ support aims to address, who may be a candidate, and clinical oversight.",
            href: "/resources/articles/nad-longevity-cellular-energy",
          },
          {
            title: "Understanding Your Lab Results",
            summary: "Key biomarkers for metabolic health, hormones, and inflammation—and what they mean.",
            href: "/resources/articles/understanding-labs",
          },
        ],
      },
      {
        title: "Living Well Between Visits",
        articles: [
          {
            title: "Using Your AI Health Coach",
            summary: "Track protein, hydration, sleep, and adherence between appointments.",
            href: "/resources/articles/ai-health-coach-between-visits",
          },
          {
            title: "Nutrition for Sustainable Weight Management",
            summary: "Protein targets, meal timing, and building habits that support your protocol.",
            href: "/resources/articles/nutrition-weight-management",
          },
          {
            title: "Recovery & Performance Peptides",
            summary: "An overview of recovery-focused peptide pathways and clinical oversight.",
            href: "/resources/articles/recovery-peptides-overview",
          },
        ],
      },
    ],
    tools: [
      { label: "BMI Calculator", href: "/resources/tools#bmi" },
      { label: "Protein Calculator", href: "/resources/tools#protein" },
      { label: "Water Intake Guide", href: "/resources/tools#water" },
      { label: "Macro Calculator", href: "/resources/tools#macro" },
      { label: "Healthy Weight Range", href: "/resources/tools#weight-range" },
      { label: "Biological Age Quiz", href: "/resources/tools#bio-age" },
      { label: "Sleep Assessment", href: "/resources/tools#sleep" },
      { label: "Longevity Risk Quiz", href: "/resources/tools#longevity" },
    ],
    downloadableGuides: [
      { title: "Longevity Blueprint", desc: "A physician-aligned roadmap for cellular health and healthy aging.", href: "/resources/guides/longevity-blueprint" },
      { title: "Executive Health Guide", desc: "Performance-focused wellness for busy professionals.", href: "/resources/guides/executive-health-guide" },
      { title: "Weight Optimization Guide", desc: "GLP-1 therapy expectations, nutrition, and sustainable habits.", href: "/resources/guides/weight-optimization-guide" },
      { title: "Hormone Health Guide", desc: "TRT, women's hormones, and when labs matter.", href: "/resources/guides/hormone-health-guide" },
      { title: "Understanding Your Labs", desc: "Decode metabolic panels, hormones, and inflammation markers.", href: "/resources/guides/understanding-your-labs" },
      { title: "Healthy Aging Handbook", desc: "Preventive strategies for energy, mobility, and cognition.", href: "/resources/guides/healthy-aging-handbook" },
      { title: "Sleep Guide", desc: "Recovery, circadian rhythm, and hormone connection.", href: "/resources/guides/sleep-guide" },
      { title: "Nutrition Playbook", desc: "Protein, macros, and meal planning for protocol success.", href: "/resources/guides/nutrition-playbook" },
    ],
    monthlyReport: {
      title: "Reform Vital Health Report",
      month: "August 2026",
      topics: ["GLP-1 research updates", "Longevity nutrition", "Seasonal wellness", "Physician Q&A"],
      summary: "Monthly insights on research, longevity, nutrition, exercise, and physician commentary—so you stay informed between visits.",
      href: "/resources/report",
    },
  },

  memberExperience: {
    headline: "Everything Included With Membership",
    subtitle: "Concierge care beyond the prescription—secure messaging, follow-ups, and progress tracking included.",
    inclusions: [
      { label: "Secure Provider Messaging", desc: "Direct messaging with your licensed medical team between visits.", image: "/images/why-personalized.webp" },
      { label: "Scheduled Follow-Ups", desc: "Regular check-ins to review progress and adjust your protocol.", image: "/images/member-clinical.webp" },
      { label: "Lab Reviews", desc: "Physician interpretation of metabolic, hormone, and wellness panels.", image: "/images/why-evidence.webp" },
      { label: "Treatment Adjustments", desc: "Protocol changes based on your response, labs, and clinical judgment.", image: "/images/member-renew.webp" },
      { label: "Prescription Management", desc: "Refills, dosage titration, and pharmacy coordination handled for you.", image: "/images/member-rx.webp" },
      { label: "Progress Tracking", desc: "AI coach metrics, portal dashboards, and quarterly provider reports.", image: "/images/portal-performance.webp" },
    ],
  },

  // ──── TeleLaunch & Patient FAQs ────
  faqs: [
    {
      category: "getting-started",
      question: "What makes Reform Vital different from standard telehealth providers?",
      answer:
        "Reform Vital combines licensed medical doctor oversight, personalized peptide/GLP-1 treatment plans, 24/7 AI accountability coaching, and full health metric tracking—rather than simply selling products online.",
    },
    {
      category: "getting-started",
      question: "How do I get started?",
      answer:
        "Complete the online health assessment (Start Assessment). A licensed U.S. provider reviews your intake, may order labs if clinically appropriate, and only then decides whether a protocol is right for you. Treatment is never guaranteed.",
    },
    {
      category: "getting-started",
      question: "Who is eligible for Reform Vital care?",
      answer:
        "Adults in all 50 U.S. states may complete an assessment. Final eligibility depends on your medical history, current medications, and clinician judgment. Some conditions or therapies may not be appropriate—your provider will explain alternatives.",
    },
    {
      category: "membership",
      question: "Do I need insurance for Reform Vital programs?",
      answer:
        "No insurance is required. We offer transparent, flat-rate monthly memberships with physician consultation and pharmacy fulfillment included—no hidden co-pays or surprise medical bills.",
    },
    {
      category: "membership",
      question: "Can I cancel or pause my membership?",
      answer:
        "Yes. Memberships can be paused or cancelled according to your plan terms. Message your care team through the portal or email admin@reformvital.com and we will walk you through timing, remaining doses, and safe discontinuation if needed.",
    },
    {
      category: "membership",
      question: "Can I use insurance for labs or medications?",
      answer:
        "Reform Vital memberships use transparent flat-rate pricing without insurance requirements. Some patients choose to submit receipts for out-of-network reimbursement—check with your plan administrator.",
    },
    {
      category: "pharmacy",
      question: "Are your medications compounded in certified pharmacies?",
      answer:
        "Yes. Prescriptions are compounded in state-licensed, 50-state certified U.S. compounding pharmacies that follow strict quality standards. Medications ship only after physician approval.",
    },
    {
      category: "pharmacy",
      question: "How fast will my medication arrive?",
      answer:
        "Once your physician approves a prescription, compounded medication is fulfilled by licensed pharmacies and shipped cold-chain in discreet packaging—typically with expedited delivery options included in membership.",
    },
    {
      category: "pharmacy",
      question: "What if I experience side effects?",
      answer:
        "Contact your Reform Vital care team promptly through secure messaging or by phone. Mild GI symptoms can be common when starting GLP-1 therapies; severe abdominal pain, persistent vomiting, allergic reaction, or other urgent symptoms require immediate medical attention—call 911 or go to the ER if needed.",
    },
    {
      category: "treatments",
      question: "Can I transition between GLP-1 or peptide therapies?",
      answer:
        "Yes. Your licensed provider can adjust your protocol—such as moving from Semaglutide to Tirzepatide or adding recovery peptides—based on your progress, labs, and clinical judgment.",
    },
    {
      category: "treatments",
      question: "Do I need lab work before starting treatment?",
      answer:
        "Many protocols—especially hormone optimization and metabolic programs—begin with labs so your provider can personalize dosing safely. Your physician will order panels as clinically appropriate during onboarding.",
    },
    {
      category: "treatments",
      question: "Which states do you serve?",
      answer:
        "Reform Vital provides physician-guided telehealth in all 50 U.S. states. Licensed providers and 503A compounding pharmacies fulfill prescriptions nationwide after clinical approval.",
    },
    {
      category: "treatments",
      question: "Who reviews my care?",
      answer:
        "Licensed U.S. clinicians review every intake and determine whether treatment is appropriate. Prescriptions are issued only after individual clinical review—not automatically at purchase."
    },
    {
      category: "ai-portal",
      question: "How does the AI Health Coach work?",
      answer:
        "Your AI Coach is a 24/7 accountability partner between physician visits. It helps track protein, hydration, sleep, and weight trends and keeps you on protocol—without diagnosing or replacing your clinician.",
    },
    {
      category: "ai-portal",
      question: "Is there a patient portal for tracking progress?",
      answer:
        "Yes. The Reform Vital Patient Portal is where you’ll manage goals, metrics, and AI coach check-ins between visits. Start with an online assessment to begin clinical onboarding and portal access.",
    },
    {
      category: "ai-portal",
      question: "How does follow-up care work?",
      answer:
        "Membership includes scheduled follow-ups, secure messaging with your medical team, treatment adjustments, lab reviews, and AI coach progress tracking—so care continues long after your first prescription.",
    },
  ],

  // ──── Footer & Contact ────
  footer: {
    company: "Reform Vital Health LLC",
    legalOwner: "Javier Alexis Solano",
    disclaimer:
      "DISCLAIMER: Reform Vital Health LLC provides telehealth platform access connecting patients with licensed U.S. healthcare providers. Prescriptions are issued strictly upon physician clinical evaluation and approval. Compounded medications are prepared by state-licensed compounding pharmacies. Statements on this site have not been evaluated by the FDA. Purchasing a program does not guarantee that a prescription will be issued. Reform Vital does not provide emergency medical care—call 911 for emergencies.",
    copyright: "© 2026 Reform Vital Health LLC. All rights reserved.",
  },
};

export type BrandConfig = typeof brandConfig;

export type TreatmentDetail =
  (typeof brandConfig.treatmentDetails)[keyof typeof brandConfig.treatmentDetails];

export function getAllTreatmentSlugs(): string[] {
  const fromServices = brandConfig.services.flatMap((s) =>
    s.therapies.map((t) => t.slug),
  );
  const fromDetails = Object.keys(brandConfig.treatmentDetails);
  return Array.from(new Set([...fromServices, ...fromDetails]));
}

export function resolveTreatmentDetail(slug: string): TreatmentDetail | null {
  const detail =
    brandConfig.treatmentDetails[
      slug as keyof typeof brandConfig.treatmentDetails
    ];
  return detail ?? null;
}
