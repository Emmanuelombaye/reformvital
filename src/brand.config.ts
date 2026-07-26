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
    ctaLink: "/start",
  },

  // ──── Trust Proofs (Marquee) ────
  trustProofs: [
    { label: "Licensed Medical Directors & U.S. Providers", icon: "shield", color: "#00A896" },
    { label: "100% Online Physician Consultations", icon: "plus", color: "#00B4D8" },
    { label: "50-State Certified Compounding Pharmacies", icon: "award", color: "#D4AF37" },
    { label: "Free Expedited Cold-Chain Shipment", icon: "truck", color: "#00A896" },
  ],

  // ──── Multi-Page Navigation ────
  nav: {
    links: [
      { label: "Treatments", href: "/treatments" },
      { label: "Memberships", href: "/memberships" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "AI Coach", href: "/ai-coach" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
    ],
    ctaText: "Start Assessment",
    ctaLink: "/start",
    loginText: "Log in",
    loginLink: "/start",
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
    primaryCtaText: "Start Online Assessment",
    primaryCtaNote: "*Prescriptions subject to U.S. physician approval",
    secondaryCtaText: "View All Treatments",
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
        { slug: "semaglutide", name: "Semaglutide+", desc: "Weekly GLP-1 subcutaneous injection + B12", price: "$149/mo" },
        { slug: "tirzepatide", name: "Tirzepatide+", desc: "Dual GLP-1 + GIP receptor agonist weekly injection", price: "$249/mo" },
        { slug: "retatrutide", name: "Retatrutide (Reta)", desc: "Triple GIP/GLP-1/Glucagon agonist research protocol", price: "Custom" },
      ],
    },
    {
      id: "hormones",
      title: "Hormone Optimization",
      subtitle: "Physician-guided TRT and endocrine balancing for energy, libido, and muscle retention.",
      therapies: [
        { slug: "trt", name: "TRT (Testosterone Replacement)", desc: "Bioidentical testosterone cypionate/enanthate protocol", price: "$129/mo" },
        { slug: "womens-hormones", name: "Women's Hormone Optimization", desc: "Progesterone, Estradiol & Low-dose Testosterone therapy", price: "$119/mo" },
        { slug: "hcg-enclomiphene", name: "HCG & Enclomiphene", desc: "Endogenous LH/FSH stimulation protocols", price: "$99/mo" },
      ],
    },
    {
      id: "growth-hormone",
      title: "Growth Hormone Optimization",
      subtitle: "Peptides designed to stimulate natural pituitary hGH secretion, fat oxidation & deep sleep.",
      therapies: [
        { slug: "tesamorelin", name: "Tesamorelin", desc: "Potent secretagogue targeting visceral abdominal fat", price: "$229/mo" },
        { slug: "sermorelin", name: "Sermorelin", desc: "Classic growth hormone secretagogue for sleep & recovery", price: "$189/mo" },
        { slug: "cjc-ipamorelin", name: "CJC-1295 / Ipamorelin Blend", desc: "Synergistic GHRH + GHRP peptide combination", price: "$199/mo" },
      ],
    },
    {
      id: "recovery",
      title: "Recovery & Repair",
      subtitle: "Regenerative tissue healing, gut mucosal integrity, and anti-inflammatory peptides.",
      therapies: [
        { slug: "bpc-157", name: "BPC-157", desc: "Body Protection Compound for tendon, ligament, and gut healing", price: "$159/mo" },
        { slug: "tb-500", name: "TB-500", desc: "Thymosin Beta-4 peptide promoting angiogenesis and muscle repair", price: "$169/mo" },
        { slug: "kpv", name: "KPV Tripeptide", desc: "Tripeptide targeting systemic inflammation and gut microbiota", price: "$139/mo" },
      ],
    },
    {
      id: "longevity",
      title: "Longevity & Healthy Aging",
      subtitle: "Cellular energy boosters, mitochondrial rejuvenation, and collagen stimulation.",
      therapies: [
        { slug: "nad-plus", name: "NAD+ Therapy", desc: "Nicotinamide Adenine Dinucleotide for cellular ATP & DNA repair", price: "$199/mo" },
        { slug: "mots-c", name: "MOTS-c", desc: "Mitochondrial-derived peptide optimizing metabolic endurance", price: "$189/mo" },
        { slug: "ghk-cu", name: "GHK-Cu Copper Peptide", desc: "Copper peptide for cellular remodeling & systemic vitality", price: "$149/mo" },
      ],
    },
    {
      id: "cognitive",
      title: "Cognitive Optimization",
      subtitle: "Neuroprotective peptides for focus, mood resilience, and neuroplasticity.",
      therapies: [
        { slug: "semax", name: "Semax", desc: "ACTH-derived neuropeptide enhancing BDNF and focus", price: "$149/mo" },
        { slug: "selank", name: "Selank", desc: "Anxiolytic peptide promoting calm focus and stress mitigation", price: "$149/mo" },
      ],
    },
    {
      id: "sexual-wellness",
      title: "Sexual Wellness",
      subtitle: "Targeted therapies for peak performance, intimacy, and vitality.",
      therapies: [
        { slug: "pt-141", name: "PT-141 (Bremelanotide)", desc: "Central nervous system peptide for libido enhancement", price: "$139/mo" },
        { slug: "tadalafil", name: "Tadalafil / Sildenafil", desc: "Daily or PRN vascular flow optimization", price: "$69/mo" },
      ],
    },
    {
      id: "hair",
      title: "Hair Restoration",
      subtitle: "Prescription topical & peptide formulations to stop hair loss and stimulate regrowth.",
      therapies: [
        { slug: "hair-restoration", name: "Hair Loss Evaluations & Protocols", desc: "Customized Minoxidil + Finasteride + GHK-Cu hair solution", price: "$79/mo" },
      ],
    },
  ],

  // ──── Detailed Treatment Pages Dictionary ────
  treatmentDetails: {
    "semaglutide": {
      name: "Compounded Semaglutide+",
      category: "Medical Weight Loss",
      price: "$149/mo",
      tagline: "Weekly GLP-1 subcutaneous injection compounded with Cyanocobalamin (Vitamin B12)",
      image: "/images/weight_loss_glp1.png",
      badge: "MOST POPULAR GLP-1",
      description:
        "Compounded Semaglutide is a physician-prescribed weekly injection that mimics the natural GLP-1 hormone. It acts on brain centers to reduce appetite, slow gastric emptying, and promote sustained, clinically significant weight reduction.",
      features: [
        "100% Online Physician Evaluation by Board-Certified Doctors",
        "Includes Vitamin B12 to support energy levels and diminish nausea",
        "Free Overnight Cold-Chain Delivery with sterile syringes & prep pads",
        "Continuous 24/7 AI Accountability Coach & monthly provider check-ins",
      ],
      clinicalTrial: "Clinical trials showed average weight loss of up to 15% of initial body weight over 68 weeks.",
      howToUse: "Administer subcutaneously once weekly into abdomen, thigh, or upper arm.",
    },
    "tirzepatide": {
      name: "Compounded Tirzepatide+",
      category: "Medical Weight Loss",
      price: "$249/mo",
      tagline: "Dual GLP-1 + GIP receptor agonist weekly injection for maximum appetite control",
      image: "/images/weight_loss_glp1.png",
      badge: "MAXIMUM RESULTS",
      description:
        "Compounded Tirzepatide targets both GLP-1 and GIP receptors simultaneously. This dual mechanism provides superior glucose regulation, powerful appetite suppression, and accelerated fat reduction.",
      features: [
        "Dual GLP-1 & GIP receptor activation for enhanced metabolic effect",
        "Prescribed online by U.S. licensed medical directors",
        "Includes Vitamin B12 and all injection supplies",
        "Free 2-day cold-chain shipping directly from state-licensed compounding pharmacies",
      ],
      clinicalTrial: "Clinical studies demonstrated average weight reduction of over 20% of total body weight.",
      howToUse: "Administer subcutaneously once weekly on the same day each week.",
    },
    "trt": {
      name: "Testosterone Replacement Therapy (TRT)",
      category: "Hormone Optimization",
      price: "$129/mo",
      tagline: "Physician-guided bioidentical testosterone replacement for vitality, libido & muscle growth",
      image: "/images/weight_loss_glp1.png",
      badge: "HORMONE BALANCE",
      description:
        "Reform Vital's TRT protocol restores optimal physiological testosterone levels in men experiencing low energy, diminished libido, brain fog, or loss of lean muscle mass.",
      features: [
        "Comprehensive biomarker blood panel and physician evaluation",
        "Bioidentical Testosterone Cypionate or Enanthate formulation",
        "Includes Estrogen control (Anastrozole) & fertility preservation options",
        "Ongoing lab tracking every 90 days to ensure safety and peak vitality",
      ],
      clinicalTrial: "Improves lean muscle composition, bone density, energy levels, and sexual function in clinical studies.",
      howToUse: "Administered as directed by your physician based on lab values.",
    },
    "bpc-157": {
      name: "BPC-157 Regenerative Peptide",
      category: "Recovery & Repair",
      price: "$159/mo",
      tagline: "Body Protection Compound pentadecapeptide for rapid tendon, gut & tissue healing",
      image: "/images/recovery_bpc157.png",
      badge: "RECOVERY PEPTIDE",
      description:
        "BPC-157 is a sequence of 15 amino acids derived from human gastric juice. It promotes angiogenesis, accelerates collagen synthesis, and heals damaged tendons, ligaments, joint tissues, and gut mucosal lining.",
      features: [
        "Accelerates tendon, ligament, and muscle tissue recovery",
        "Protects and restores gut mucosal lining integrity",
        "Reduces systemic musculoskeletal inflammation",
        "Compounded in state-licensed 50-state U.S. pharmacies",
      ],
      clinicalTrial: "Demonstrates dramatic tissue regeneration and cell migration in preclinical and clinical research.",
      howToUse: "Administer once or twice daily subcutaneous injection or oral capsule.",
    },
    "nad-plus": {
      name: "NAD+ Cellular Energy Therapy",
      category: "Longevity & Healthy Aging",
      price: "$199/mo",
      tagline: "Nicotinamide Adenine Dinucleotide injection for cellular ATP, DNA repair & longevity",
      image: "/images/longevity_nad.png",
      badge: "LONGEVITY COENZYME",
      description:
        "NAD+ is a vital coenzyme present in every cell. It powers mitochondrial ATP production, activates sirtuin longevity enzymes, repairs damaged DNA, and reverses cellular aging.",
      features: [
        "Rejuvenates mitochondrial cellular energy and stamina",
        "Enhances cognitive focus, mental clarity, and memory retention",
        "Activates Sirtuins for longevity and anti-aging signaling",
        "Prescribed online by U.S. licensed physicians",
      ],
      clinicalTrial: "Restores juvenile NAD+ levels in human cellular energy clinical trials.",
      howToUse: "Subcutaneous injection administered 2 to 3 times per week.",
    },
    "sermorelin": {
      name: "Sermorelin Growth Hormone Peptide",
      category: "Growth Hormone Optimization",
      price: "$189/mo",
      tagline: "Growth hormone secretagogue stimulating natural pituitary hGH secretion",
      image: "/images/recovery_bpc157.png",
      badge: "HGH SECRETAGOGUE",
      description:
        "Sermorelin is a GHRH secretagogue that stimulates your pituitary gland to naturally produce and secrete human Growth Hormone (hGH), supporting deep sleep, fat burning, and skin elasticity.",
      features: [
        "Stimulates natural pituitary hGH release safely without shutdown",
        "Improves deep REM sleep architecture and night-time recovery",
        "Enhances skin elasticity, muscle tone, and fat oxidation",
        "Doctor consultation and prescription shipping included",
      ],
      clinicalTrial: "Proven to elevate IGF-1 levels safely in adult growth hormone deficiency trials.",
      howToUse: "Administer subcutaneously at bedtime prior to sleep.",
    },
  },

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
