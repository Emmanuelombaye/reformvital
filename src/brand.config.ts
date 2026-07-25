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
    heading: "'Outfit', 'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
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
    ctaLink: "#quiz",
  },

  // ──── Trust Proofs (Marquee) ────
  trustProofs: [
    { label: "Licensed Medical Directors & U.S. Providers", icon: "shield", color: "#00A896" },
    { label: "100% Online Physician Consultations", icon: "plus", color: "#00B4D8" },
    { label: "50-State Certified Compounding Pharmacies", icon: "award", color: "#D4AF37" },
    { label: "Free Expedited Cold-Chain Shipment", icon: "truck", color: "#00A896" },
  ],

  // ──── Navigation ────
  nav: {
    links: [
      { label: "Services Menu", href: "#services" },
      { label: "Memberships", href: "#memberships" },
      { label: "AI Health Coach", href: "#ai-coach" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Patient Portal", href: "#portal" },
    ],
    ctaText: "Start Consultation",
    ctaLink: "#quiz",
    loginText: "Patient Portal",
    loginLink: "#portal",
    phone: "(561) 444-8793",
    email: "admin@reformvital.com",
  },

  // ──── Stats (Yucca Style) ────
  stats: [
    { value: "15,000+", label: "Active Patients Supervised Nationwide" },
    { value: "100%", label: "Licensed U.S. Medical Directors & MDs" },
    { value: "4.9 / 5", label: "Excellent · 2,500+ Patient & Doctor Reviews" },
  ],

  // ──── Hero Section ────
  hero: {
    trustpilot: {
      score: "4.9",
      max: "5",
      reviewsCount: "2,500+",
      label: "Patient Satisfaction",
    },
    dynamicWords: [
      { text: "GLP-1 Weight Loss", color: "#FFFFFF", bg: "#00A896" },
      { text: "Hormone Optimization (TRT)", color: "#FFFFFF", bg: "#00B4D8" },
      { text: "Growth Hormone Peptides", color: "#0D1B2A", bg: "#D4AF37" },
      { text: "Longevity & NAD+", color: "#FFFFFF", bg: "#0D1B2A" },
      { text: "Recovery & Repair", color: "#FFFFFF", bg: "#00A896" },
    ],
    headline: "MODERN MEDICINE. PERSONALIZED HEALTH.",
    subheadline: "REAL RESULTS.",
    description:
      "Reform Vital combines licensed medical oversight, personalized treatment plans, AI-powered accountability, and compounding pharmacy delivery for measurable health outcomes.",
    primaryCtaText: "Start Online Consultation",
    primaryCtaNote: "*Prescriptions subject to U.S. physician approval",
    secondaryCtaText: "Explore Dream Service Menu",
    ctaLink: "#services",
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
      { value: "15,000+", label: "Patients Supervised\nNationwide" },
      { value: "100%", label: "Licensed Medical\nDirectors & MDs" },
      { rating: "4.9/5", ratingText: "Top Rated", label: "Physician & Patient\nReviews" },
    ],
  },

  // ──── Service Categories (Reform Vital Dream Service Menu) ────
  services: [
    {
      id: "weight-loss",
      title: "Medical Weight Loss",
      subtitle: "Clinically proven GLP-1 & GIP receptor agonists for sustainable metabolic weight reduction.",
      therapies: [
        { name: "Semaglutide+", desc: "Weekly GLP-1 subcutaneous injection + B12", price: "$149/mo" },
        { name: "Tirzepatide+", desc: "Dual GLP-1 + GIP receptor agonist weekly injection", price: "$249/mo" },
        { name: "Retatrutide (Reta)", desc: "Triple GIP/GLP-1/Glucagon agonist research protocol", price: "Custom" },
      ],
    },
    {
      id: "hormones",
      title: "Hormone Optimization",
      subtitle: "Physician-guided TRT and endocrine balancing for energy, libido, and muscle retention.",
      therapies: [
        { name: "TRT (Testosterone Replacement)", desc: "Bioidentical testosterone cypionate/enanthate protocol", price: "$129/mo" },
        { name: "Women's Hormone Optimization", desc: "Progesterone, Estradiol & Low-dose Testosterone therapy", price: "$119/mo" },
        { name: "HCG & Enclomiphene", desc: "Endogenous LH/FSH stimulation protocols", price: "$99/mo" },
        { name: "Anastrozole", desc: "Estrogen control when clinically indicated", price: "Included" },
      ],
    },
    {
      id: "growth-hormone",
      title: "Growth Hormone Optimization",
      subtitle: "Peptides designed to stimulate natural pituitary hGH secretion, fat oxidation & deep sleep.",
      therapies: [
        { name: "Tesamorelin", desc: "Potent secretagogue targeting visceral abdominal fat", price: "$229/mo" },
        { name: "Sermorelin", desc: "Classic growth hormone secretagogue for sleep & recovery", price: "$189/mo" },
        { name: "CJC-1295 / Ipamorelin Blend", desc: "Synergistic GHRH + GHRP peptide combination", price: "$199/mo" },
      ],
    },
    {
      id: "recovery",
      title: "Recovery & Repair",
      subtitle: "Regenerative tissue healing, gut mucosal integrity, and anti-inflammatory peptides.",
      therapies: [
        { name: "BPC-157", desc: "Body Protection Compound for tendon, ligament, and gut healing", price: "$159/mo" },
        { name: "TB-500", desc: "Thymosin Beta-4 peptide promoting angiogenesis and muscle repair", price: "$169/mo" },
        { name: "KPV", desc: "Tripeptide targeting systemic inflammation and gut microbiota", price: "$139/mo" },
      ],
    },
    {
      id: "longevity",
      title: "Longevity & Healthy Aging",
      subtitle: "Cellular energy boosters, mitochondrial rejuvenation, and collagen stimulation.",
      therapies: [
        { name: "NAD+ Therapy", desc: "Nicotinamide Adenine Dinucleotide for cellular ATP & DNA repair", price: "$199/mo" },
        { name: "MOTS-c", desc: "Mitochondrial-derived peptide optimizing metabolic endurance", price: "$189/mo" },
        { name: "GHK-Cu", desc: "Copper peptide for cellular remodeling & systemic vitality", price: "$149/mo" },
        { name: "Glutathione", desc: "Master antioxidant injection for liver detox & radiance", price: "$99/mo" },
      ],
    },
    {
      id: "cognitive",
      title: "Cognitive Optimization",
      subtitle: "Neuroprotective peptides for focus, mood resilience, and neuroplasticity.",
      therapies: [
        { name: "Semax", desc: "ACTH-derived neuropeptide enhancing BDNF and focus", price: "$149/mo" },
        { name: "Selank", desc: "Anxiolytic peptide promoting calm focus and stress mitigation", price: "$149/mo" },
      ],
    },
    {
      id: "sexual-wellness",
      title: "Sexual Wellness",
      subtitle: "Targeted therapies for peak performance, intimacy, and vitality.",
      therapies: [
        { name: "PT-141 (Bremelanotide)", desc: "Central nervous system peptide for libido enhancement", price: "$139/mo" },
        { name: "Tadalafil / Sildenafil", desc: "Daily or PRN vascular flow optimization", price: "$69/mo" },
        { name: "Women's Sexual Wellness", desc: "Custom compounding for female vitality", price: "$119/mo" },
      ],
    },
    {
      id: "hair",
      title: "Hair Restoration",
      subtitle: "Prescription topical & peptide formulations to stop hair loss and stimulate regrowth.",
      therapies: [
        { name: "Hair Loss Evaluations", desc: "Comprehensive physician scalp & hormonal biomarker review", price: "Free w/ Plan" },
        { name: "Prescription Hair Treatments", desc: "Customized Minoxidil + Finasteride / Dutasteride topical", price: "$79/mo" },
        { name: "GHK-Cu Hair Protocols", desc: "Follicle-stimulating peptide scalp microneedling solution", price: "$129/mo" },
      ],
    },
  ],

  // ──── Membership Tier Programs ────
  memberships: [
    {
      id: "essentials",
      name: "Essentials Plan",
      badge: "CORE CARE",
      price: "$149",
      period: "/month",
      desc: "Ideal for patients beginning a single physician-guided therapy.",
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
      name: "Performance Plan",
      badge: "MOST POPULAR",
      price: "$249",
      period: "/month",
      desc: "Comprehensive metabolic health, peptide stacking & monthly provider guidance.",
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
      name: "Elite Concierge Plan",
      badge: "EXECUTIVE",
      price: "$399",
      period: "/month",
      desc: "White-glove personalized optimization, advanced lab analysis & direct provider access.",
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

  // ──── Patient Transformation Showcase ────
  transformations: [
    {
      name: "Marcus V.",
      lbsLost: "48",
      timeframe: "in 5 Months",
      verified: "Verified Semaglutide Patient",
      badge: "Lost 48 lbs",
      avatarColor: "#00A896",
    },
    {
      name: "Sarah T.",
      lbsLost: "35",
      timeframe: "in 4 Months",
      verified: "Verified Tirzepatide Patient",
      badge: "Lost 35 lbs",
      avatarColor: "#00B4D8",
    },
    {
      name: "David K.",
      lbsLost: "60",
      timeframe: "in 7 Months",
      verified: "Verified TRT & GLP-1 Patient",
      badge: "Lost 60 lbs",
      avatarColor: "#D4AF37",
    },
  ],

  // ──── How It Works Steps ────
  howItWorks: {
    headline: "How Reform Vital Works",
    subtitle: "Physician-guided healthcare delivered straight to your door in 3 simple steps.",
    steps: [
      {
        step: "1",
        title: "Complete Online Consultation",
        description: "Fill out a comprehensive health assessment and select your optimization goals online in under 5 minutes.",
      },
      {
        step: "2",
        title: "Physician Review & Custom Plan",
        description: "A licensed U.S. doctor reviews your medical profile, orders necessary labs, and issues your personalized prescription.",
      },
      {
        step: "3",
        title: "Pharmacy Delivery & AI Coaching",
        description: "Your freshly compounded medication is shipped cold-chain to your doorstep while your AI Coach guides your daily progress.",
      },
    ],
  },

  // ──── TeleLaunch & Patient FAQs ────
  faqs: [
    {
      question: "What makes Reform Vital different from standard telehealth providers?",
      answer: "Reform Vital combines licensed medical doctor oversight, personalized peptide/GLP-1 treatment plans, 24/7 AI accountability coaching, and full health metric tracking rather than just selling standard products.",
    },
    {
      question: "Do I need insurance for Reform Vital programs?",
      answer: "No insurance is needed! We offer transparent, flat-rate monthly memberships with no hidden co-pays or surprise medical bills.",
    },
    {
      question: "Are your medications compounded in certified pharmacies?",
      answer: "Yes. All prescriptions are compounded in state-licensed, 50-state certified U.S. compounding pharmacies adhering to strict quality standards.",
    },
    {
      question: "How does the AI Health Coach work?",
      answer: "Your AI Coach acts as a 24/7 accountability partner. It tracks your daily protein, water intake, sleep, and weight metrics, providing habit guidance between physician check-ins.",
    },
    {
      question: "Can I transition between GLP-1 or peptide therapies?",
      answer: "Yes! Your licensed provider will adjust your treatment protocol (such as moving from Semaglutide to Tirzepatide or adding BPC-157) based on your progress and lab results.",
    },
  ],

  // ──── Patient & Physician Reviews ────
  reviews: [
    {
      name: "Jessica M.",
      verified: true,
      text: "Down 34 lbs in 3 months on Semaglutide+! Reform Vital made the process so easy, no doctor waiting rooms, and shipping was super fast.",
      stars: 5,
      weightLost: "-34 lbs",
    },
    {
      name: "Carlos T.",
      verified: true,
      text: "Tirzepatide+ completely eliminated my late-night cravings. The physician coaching and AI tracking kept me accountable every week.",
      stars: 5,
      weightLost: "-42 lbs",
    },
    {
      name: "Dr. Marcus V., MD",
      verified: true,
      text: "Reform Vital's approach combining physician oversight with personalized peptide stacks and AI tracking is the future of preventative telehealth.",
      stars: 5,
      weightLost: "Physician Advisory",
    },
  ],

  // ──── Footer & Contact ────
  footer: {
    company: "Reform Vital Health LLC",
    legalOwner: "Javier Alexis Solano",
    disclaimer:
      "DISCLAIMER: Reform Vital Health LLC provides telehealth platform access connecting patients with licensed U.S. healthcare providers. Prescriptions are issued strictly upon physician clinical evaluation and approval. Compounded medications are prepared by state-licensed compounding pharmacies. Statements on this site have not been evaluated by the FDA.",
    copyright: "© 2026 Reform Vital Health LLC. All rights reserved.",
  },
};

export type BrandConfig = typeof brandConfig;
