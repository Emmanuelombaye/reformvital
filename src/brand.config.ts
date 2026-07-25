export const brandConfig = {
  // ──── Brand Identity ────
  name: "YUCCA",
  fullName: "Yucca Health",
  tagline: "Treatment that works",
  slogan: "designed around you.",
  logo: "/Logo_dark.svg",
  favicon: "/Yucca-favicon.png",

  // ──── Color Palette (Yucca Retro-Modern Aesthetic) ────
  colors: {
    primary: "#1F2A37",         // Deep charcoal retro ink (#1f2a37)
    primaryDark: "#181C24",     // Shadow color (#181c24)
    cream: "#F2EDE0",           // Yucca signature cream background (#f2ede0)
    surface: "#FFFFFF",         // Card surface
    sky: "#38BDF8",             // Retro sky blue
    skySoft: "#E0F2FE",         // Light sky tint
    orange: "#F97316",          // Accent orange
    purple: "#A855F7",          // Accent purple
    purpleSoft: "#F3E8FF",      // Light purple tint
    green: "#10B981",           // Success green
    greenSoft: "#D1FAE5",       // Light green tint
    text: "#1F2A37",            // Retro ink text
    textMuted: "rgba(31, 42, 55, 0.75)",
    border: "#1F2A37",          // 2px solid border
    shadow: "#181C24",          // 4px 5px hard offset shadow
  },

  // ──── Typography ────
  fonts: {
    heading: "'Figtree', system-ui, sans-serif",
    body: "'Figtree', system-ui, sans-serif",
  },

  // ──── Offer Banner ────
  offerBanner: {
    enabled: true,
    eyebrow: "Exclusive Lifetime Offer",
    code: "YUCCA4LIFE",
    price: "$146",
    period: "/mo",
    stamp: "For life",
    subtext: "Lock in your monthly GLP price for life.",
    ctaText: "Lock in price",
    ctaLink: "#quiz",
  },

  // ──── Trust Proofs (Marquee) ────
  trustProofs: [
    { label: "U.S. Licensed Pharmacies", icon: "shield", color: "#38BDF8" },
    { label: "Licensed Providers in all 50 States", icon: "plus", color: "#F97316" },
    { label: "Free Expedited Shipment", icon: "truck", color: "#A855F7" },
  ],

  // ──── Navigation ────
  nav: {
    links: [
      { label: "Treatments", href: "#treatments" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "About Us", href: "#about" },
      { label: "Peptides", href: "#peptides", tag: "(Coming Soon)", isSoon: true },
    ],
    ctaText: "Get Started",
    ctaLink: "#quiz",
    loginText: "Log In",
    loginLink: "#login",
    phone: "+1-888-388-1878",
  },

  // ──── Hero Section ────
  hero: {
    trustpilot: {
      score: "4.6",
      max: "5",
      reviewsCount: "1,000+",
      label: "Trustpilot",
    },
    dynamicWords: [
      { text: "Weight Loss", color: "#1F2A37", bg: "#B9A9FE" },
      { text: "Longevity", color: "#1F2A37", bg: "#81C777" },
      { text: "Muscle Recovery", color: "#1F2A37", bg: "#FFBC7D" },
    ],
    headline: "treatment that works",
    subheadline: "designed around you.",
    primaryCtaText: "Lose weight for just $146*",
    primaryCtaNote: "*New Patients, Semaglutide 6-month plan",
    secondaryCtaText: "Explore Treatments",
    ctaLink: "#quiz",
    cardHighlight: {
      category: "PRESCRIPTION GLP-1",
      title: "Compounded Semaglutide+",
      price: "$146",
      unit: "/mo",
      bullets: [
        "Prescribed by Licensed U.S. Doctors",
        "Free Overnight Cold-Chain Shipping",
        "Syringes, Alcohol Wipes & Medical Care Included",
      ],
      ctaText: "Start Intake Quiz",
    },
    socialProof: [
      { value: "20,000+", label: "Active patients\non Yucca Health" },
      { value: "100,000+", label: "Prescriptions written\nacross 50 states" },
      { rating: "4.6", ratingText: "Excellent", label: "1,000+ Reviews\non TrustPilot" },
    ],
  },

  // ──── Patient Transformation Showcase ────
  transformations: [
    {
      name: "Lisa C.",
      lbsLost: "75",
      timeframe: "in 10 Months",
      verified: "Verified GLP-1 Patient",
      badge: "Lost 75 lbs",
      avatarColor: "#F97316",
    },
    {
      name: "Blaze B.",
      lbsLost: "50",
      timeframe: "in 6 Months",
      verified: "Verified GLP-1 Patient",
      badge: "Lost 50 lbs",
      avatarColor: "#A855F7",
    },
    {
      name: "Crystal G.",
      lbsLost: "50",
      timeframe: "in 6 Months",
      verified: "Verified GLP-1 Patient",
      badge: "Lost 50 lbs",
      avatarColor: "#38BDF8",
    },
    {
      name: "Jamilyn C.",
      lbsLost: "17",
      timeframe: "in 6 Weeks",
      verified: "Verified GLP-1 Patient",
      badge: "Lost 17 lbs",
      avatarColor: "#10B981",
    },
    {
      name: "Kim B.",
      lbsLost: "8",
      timeframe: "in 6 Weeks",
      verified: "Verified GLP-1 Patient",
      badge: "Lost 8 lbs",
      avatarColor: "#EC4899",
    },
  ],

  // ──── Treatments / Medications ────
  treatments: [
    {
      id: "semaglutide",
      category: "Weight Loss",
      name: "Personalized Semaglutide+",
      tagline: "Weekly GLP-1 subcutaneous injection + Vitamin B12",
      description:
        "Compounded Semaglutide mimics the GLP-1 hormone to reduce hunger, slow digestion, and promote sustainable weight loss while supporting energy.",
      price: "$146",
      priceUnit: "/mo",
      priceNote: "Starting at $146/mo on 6-month plan",
      badge: "MOST POPULAR",
      badgeColor: "orange",
      features: [
        "Clinically proven GLP-1 weight loss formula",
        "Includes Vitamin B12 for energy support",
        "Doctor consultation & ongoing provider check-ins",
        "Free overnight pharmacy shipping & supplies",
      ],
      ctaText: "Get Semaglutide",
      ctaLink: "#quiz",
    },
    {
      id: "tirzepatide",
      category: "Weight Loss",
      name: "Personalized Tirzepatide+",
      tagline: "Dual GLP-1 + GIP receptor agonist weekly injection",
      description:
        "Compounded Tirzepatide activates both GLP-1 and GIP receptors for maximum appetite suppression, glucose control, and rapid fat loss.",
      price: "$258",
      priceUnit: "/mo",
      priceNote: "Starting at $258/mo on 6-month plan",
      badge: "MAXIMUM RESULTS",
      badgeColor: "purple",
      features: [
        "Dual-action GLP-1 & GIP receptor activation",
        "Superior weight loss efficacy in clinical trials",
        "100% online medical evaluation by U.S. licensed MDs",
        "All needles, alcohol wipes & discreet shipping included",
      ],
      ctaText: "Get Tirzepatide",
      ctaLink: "#quiz",
    },
    {
      id: "nad",
      category: "Longevity",
      name: "NAD+ Cellular Therapy",
      tagline: "Nicotinamide Adenine Dinucleotide injection",
      description:
        "Vital coenzyme injection therapy designed to support cellular energy, DNA repair, mitochondrial health, and mental clarity.",
      price: "$215",
      priceUnit: "/mo",
      priceNote: "$215 for 1 month supply",
      badge: "LONGEVITY",
      badgeColor: "sky",
      features: [
        "Enhances mitochondrial ATP cellular energy",
        "Supports cognitive clarity and focus",
        "Promotes anti-aging & cellular DNA repair",
        "Prescribed by licensed U.S. medical providers",
      ],
      ctaText: "Get NAD+",
      ctaLink: "#quiz",
    },
    {
      id: "sermorelin",
      category: "Muscle Recovery",
      name: "Sermorelin Peptide",
      tagline: "Daily growth hormone secretagogue therapy",
      description:
        "Peptide injection designed to stimulate natural pituitary growth hormone production, muscle recovery, deep sleep, and metabolism.",
      price: "$199",
      priceUnit: "/mo",
      priceNote: "$199 for 1 month supply",
      badge: "RECOVERY",
      badgeColor: "green",
      features: [
        "Stimulates natural hGH production safely",
        "Accelerates lean muscle recovery & fat loss",
        "Improves deep REM sleep architecture",
        "Direct delivery from U.S. compounding pharmacies",
      ],
      ctaText: "Get Sermorelin",
      ctaLink: "#quiz",
    },
  ],

  // ──── How It Works Steps ────
  howItWorks: {
    headline: "How Yucca Works",
    subtitle: "Getting your prescription medication delivered takes less than 5 minutes.",
    steps: [
      {
        step: "1",
        title: "Complete Medical Assessment",
        description: "Answer quick health questions online. A licensed U.S. doctor reviews your medical history within 24 hours.",
      },
      {
        step: "2",
        title: "Doctor Approval & Prescription",
        description: "If eligible, your provider issues your custom compounded prescription and sends it to our certified pharmacy.",
      },
      {
        step: "3",
        title: "Discreet Delivery to Your Door",
        description: "Your medication is freshly compounded and shipped straight to your home with free expedited shipping and supplies.",
      },
    ],
  },

  // ──── FAQs ────
  faqs: [
    {
      question: "Do I need insurance to qualify for Yucca treatments?",
      answer: "No insurance is required! Yucca offers transparent, flat-rate pricing with no hidden fees, co-pays, or surprise medical bills.",
    },
    {
      question: "How long does shipping take after doctor approval?",
      answer: "Once prescribed, your medication is compounded and shipped via free expedited delivery, usually arriving at your door within 2 to 4 business days.",
    },
    {
      question: "What is included with my monthly prescription order?",
      answer: "Every order includes your compounded medication vial, sterile syringes, alcohol prep pads, medical support access, and free shipping.",
    },
    {
      question: "What is the difference between Semaglutide and Tirzepatide?",
      answer: "Semaglutide targets GLP-1 receptors to curb appetite. Tirzepatide is a dual-action GLP-1 + GIP receptor agonist that often produces greater overall weight loss in clinical studies.",
    },
    {
      question: "Can I cancel or pause my subscription anytime?",
      answer: "Yes, absolutely! You can manage your subscription, pause, or cancel at any time directly through your Yucca patient portal without penalty.",
    },
  ],

  // ──── Reviews / Social Proof ────
  reviews: [
    {
      name: "Jessica M.",
      verified: true,
      text: "Down 34 lbs in 3 months on Semaglutide! Yucca made the process so easy, no doctor waiting rooms, and shipping was super fast.",
      stars: 5,
      weightLost: "-34 lbs",
    },
    {
      name: "Carlos T.",
      verified: true,
      text: "Tirzepatide completely eliminated my late-night cravings. The 6-month price lock at $258/mo is unbeatable compared to brand-name GLP-1s.",
      stars: 5,
      weightLost: "-42 lbs",
    },
    {
      name: "Rachel K.",
      verified: true,
      text: "Customer support is top notch. They answered all my dosage questions within an hour. Highly recommend Yucca to anyone struggling with weight loss.",
      stars: 5,
      weightLost: "-28 lbs",
    },
  ],

  // ──── Footer ────
  footer: {
    disclaimer:
      "DISCLAIMER: Yucca Health offers telehealth services connecting patients with licensed U.S. medical providers. Prescriptions are subject to doctor approval. Compounded medications are prepared by state-licensed compounding pharmacies.",
    copyright: "© 2026 Yucca Health Inc. All rights reserved.",
  },
};

export type BrandConfig = typeof brandConfig;
