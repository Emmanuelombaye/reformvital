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
    headline: "Your Health. Optimized for Life.",
    subheadline:
      "Medical Weight Loss · Hormone Optimization · Longevity · Preventive Wellness",
    description:
      "Personalized healthcare designed around you—licensed providers, science-backed treatments, fully online.",
    primaryCtaText: "Start My Health Assessment",
    primaryCtaNote: "Physician consult included · No insurance required",
    secondaryCtaText: "Learn How It Works",
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
    {
      id: "preventive",
      title: "Metabolic Health & Preventive Wellness",
      subtitle: "Advanced labs, metabolic assessments, nutrition guidance, body-composition tracking, and ongoing provider monitoring.",
      therapies: [
        { slug: "metabolic-panel", name: "Advanced Metabolic Lab Panel", desc: "Comprehensive biomarker testing with physician review", price: "$199" },
        { slug: "preventive-wellness", name: "Preventive Wellness Program", desc: "Personalized optimization plan with lifestyle + lab monitoring", price: "$149/mo" },
        { slug: "body-composition", name: "Body Composition & Progress Tracking", desc: "Ongoing measurements, photos, and metabolic trend coaching", price: "$79/mo" },
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
      image: "/images/Sermorelin.png",
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
    "retatrutide": {
      name: "Retatrutide (Reta) Protocol",
      category: "Medical Weight Loss",
      price: "Custom",
      tagline: "Triple GIP / GLP-1 / Glucagon agonist research protocol for advanced metabolic reset",
      image: "/images/Tirzepatide.png",
      badge: "ADVANCED METABOLIC",
      description:
        "Retatrutide is an investigational-style triple-agonist pathway protocol evaluated by Reform Vital physicians for patients who need intensified metabolic support beyond dual GLP-1/GIP therapy.",
      features: [
        "Physician evaluation for advanced metabolic candidacy",
        "Triple-pathway appetite and energy regulation focus",
        "Custom dosing roadmap with close clinical follow-up",
        "Cold-chain pharmacy fulfillment when prescribed",
      ],
      clinicalTrial: "Early research on triple agonists has shown substantial body-weight reduction potential under medical supervision.",
      howToUse: "Dosing schedule is individualized and confirmed by your prescribing physician.",
    },
    "womens-hormones": {
      name: "Women's Hormone Optimization",
      category: "Hormone Optimization",
      price: "$119/mo",
      tagline: "Physician-guided progesterone, estradiol, and low-dose testosterone balancing",
      image: "/images/TRTTestosterone.png",
      badge: "WOMEN'S HRT",
      description:
        "A clinician-led hormone protocol designed for women navigating perimenopause, menopause, low energy, mood shifts, or libido changes—with labs informing a personalized prescription plan.",
      features: [
        "Comprehensive hormone symptom and history review",
        "Lab-informed progesterone, estradiol, and low-dose testosterone options",
        "Ongoing provider titration for comfort and safety",
        "AI coach support for sleep, stress, and lifestyle adherence",
      ],
      clinicalTrial: "Hormone optimization under medical supervision can improve energy, sleep quality, and sexual wellness markers.",
      howToUse: "Administer as directed by your physician based on formulation (cream, capsule, or injectable).",
    },
    "hcg-enclomiphene": {
      name: "HCG & Enclomiphene Protocol",
      category: "Hormone Optimization",
      price: "$99/mo",
      tagline: "Endogenous LH/FSH stimulation for fertility-minded hormone support",
      image: "/images/TRTTestosterone.png",
      badge: "FERTILITY SUPPORT",
      description:
        "HCG and Enclomiphene protocols help stimulate natural LH/FSH signaling—often used alongside TRT strategies when preserving endogenous production and fertility goals matter.",
      features: [
        "Physician review of fertility and hormone goals",
        "HCG and/or Enclomiphene pathways when clinically appropriate",
        "Lab monitoring to guide titration",
        "Coordinated with broader hormone optimization plans",
      ],
      clinicalTrial: "Selective estrogen receptor modulators and HCG are used clinically to support endogenous testosterone pathways.",
      howToUse: "Inject or dose orally as prescribed; timing depends on your physician protocol.",
    },
    "tesamorelin": {
      name: "Tesamorelin",
      category: "Growth Hormone Optimization",
      price: "$229/mo",
      tagline: "Potent GHRH analog targeting visceral abdominal fat and body composition",
      image: "/images/Sermorelin.png",
      badge: "VISCERAL FAT FOCUS",
      description:
        "Tesamorelin is a growth-hormone-releasing hormone analog used in physician-guided protocols aimed at reducing visceral adipose tissue while supporting recovery and metabolic composition.",
      features: [
        "Targets visceral fat reduction pathways",
        "Supports lean composition goals under medical care",
        "Nightly administration with provider dosing guidance",
        "Includes pharmacy shipping and follow-up check-ins",
      ],
      clinicalTrial: "Tesamorelin has been studied for reductions in visceral adipose tissue in clinical settings.",
      howToUse: "Administer subcutaneously once daily as directed, typically in the evening.",
    },
    "cjc-ipamorelin": {
      name: "CJC-1295 / Ipamorelin Blend",
      category: "Growth Hormone Optimization",
      price: "$199/mo",
      tagline: "Synergistic GHRH + GHRP peptide combination for recovery and sleep",
      image: "/images/Sermorelin.png",
      badge: "PEPTIDE BLEND",
      description:
        "This blend pairs a GHRH analog with Ipamorelin to encourage natural growth-hormone pulses—commonly used for recovery, sleep quality, and body-composition support.",
      features: [
        "Synergistic GHRH + GHRP signaling",
        "Supports recovery and overnight restoration",
        "Physician-set dosing frequency",
        "Sterile supplies and cold-chain shipping included",
      ],
      clinicalTrial: "GHRH/GHRP combinations are studied for stimulating physiologic GH release patterns.",
      howToUse: "Typically injected subcutaneously 1–2 times daily or at bedtime per physician instructions.",
    },
    "tb-500": {
      name: "TB-500 (Thymosin Beta-4)",
      category: "Recovery & Repair",
      price: "$169/mo",
      tagline: "Angiogenesis and muscle-repair peptide for soft-tissue recovery",
      image: "/images/Recovery & Tissue.png",
      badge: "RECOVERY PEPTIDE",
      description:
        "TB-500 is a synthetic fragment related to Thymosin Beta-4 used in regenerative protocols focused on mobility, soft-tissue repair, and recovery after strain.",
      features: [
        "Supports angiogenesis and tissue remodeling pathways",
        "Often paired with BPC-157 in recovery stacks",
        "Physician oversight for dosing and duration",
        "Compounded and shipped from licensed U.S. pharmacies",
      ],
      clinicalTrial: "Thymosin Beta-4 research explores roles in cell migration and tissue repair.",
      howToUse: "Inject subcutaneously on the schedule prescribed by your clinician.",
    },
    "kpv": {
      name: "KPV Tripeptide",
      category: "Recovery & Repair",
      price: "$139/mo",
      tagline: "Anti-inflammatory tripeptide targeting gut comfort and systemic calm",
      image: "/images/Recovery & Tissue.png",
      badge: "GUT & INFLAMMATION",
      description:
        "KPV is a short anti-inflammatory peptide used in physician-guided protocols aimed at gut mucosal support and calming inflammatory signaling.",
      features: [
        "Focus on inflammation and gut comfort pathways",
        "Compatible with broader recovery protocols",
        "Oral or injectable options when prescribed",
        "Ongoing AI coach lifestyle and symptom logging",
      ],
      clinicalTrial: "KPV has been researched for anti-inflammatory activity in mucosal and systemic models.",
      howToUse: "Take or inject exactly as directed on your physician dosing card.",
    },
    "mots-c": {
      name: "MOTS-c Mitochondrial Peptide",
      category: "Longevity & Healthy Aging",
      price: "$189/mo",
      tagline: "Mitochondrial-derived peptide for metabolic endurance and cellular efficiency",
      image: "/images/NAD+ Cellular.png",
      badge: "MITOCHONDRIAL",
      description:
        "MOTS-c is a mitochondrial-encoded peptide protocol used to support metabolic flexibility, exercise endurance signaling, and cellular energy efficiency under medical guidance.",
      features: [
        "Targets mitochondrial metabolic signaling",
        "Supports endurance and energy goals",
        "Pairs well with NAD+ longevity protocols",
        "Physician evaluation and pharmacy fulfillment included",
      ],
      clinicalTrial: "MOTS-c research explores metabolic regulation and exercise-related adaptations.",
      howToUse: "Administer subcutaneously on your prescribed weekly or multi-weekly schedule.",
    },
    "ghk-cu": {
      name: "GHK-Cu Copper Peptide",
      category: "Longevity & Healthy Aging",
      price: "$149/mo",
      tagline: "Copper peptide for cellular remodeling, skin vitality, and recovery support",
      image: "/images/NAD+ Cellular.png",
      badge: "CELLULAR REMODELING",
      description:
        "GHK-Cu is a copper-binding tripeptide used in longevity and restorative protocols for cellular remodeling, skin quality, and tissue support.",
      features: [
        "Supports collagen and tissue remodeling pathways",
        "Used in longevity and hair/skin-adjacent protocols",
        "Physician-directed dosing and duration",
        "Licensed compounding pharmacy fulfillment",
      ],
      clinicalTrial: "GHK-Cu has been studied for wound healing and regenerative gene-expression effects.",
      howToUse: "Inject or apply as prescribed depending on your compounded formulation.",
    },
    "semax": {
      name: "Semax Neuropeptide",
      category: "Cognitive Optimization",
      price: "$149/mo",
      tagline: "ACTH-derived neuropeptide supporting BDNF pathways, focus, and mental clarity",
      image: "/images/Neuropeptide.png",
      badge: "FOCUS & BDNF",
      description:
        "Semax is a neuropeptide protocol used under physician guidance to support focus, cognitive resilience, and neurotrophic signaling.",
      features: [
        "Cognitive focus and mental clarity support",
        "Nasal or injectable routes when prescribed",
        "Pairs with Selank for calm focus stacks",
        "Provider oversight with AI coach habit tracking",
      ],
      clinicalTrial: "Semax research explores neurotrophic and cognitive-performance pathways.",
      howToUse: "Use intranasally or as otherwise directed by your prescribing clinician.",
    },
    "selank": {
      name: "Selank Anxiolytic Peptide",
      category: "Cognitive Optimization",
      price: "$149/mo",
      tagline: "Calm-focus peptide supporting stress resilience without heavy sedation",
      image: "/images/Neuropeptide.png",
      badge: "CALM FOCUS",
      description:
        "Selank is used in physician-guided cognitive protocols to promote calm focus and stress mitigation while supporting everyday mental performance.",
      features: [
        "Stress resilience and calm focus support",
        "Often stacked with Semax when appropriate",
        "Physician titration for comfort",
        "Lifestyle coaching via Reform Vital AI Coach",
      ],
      clinicalTrial: "Selank has been studied for anxiolytic and cognitive-modulating properties.",
      howToUse: "Administer intranasally or per your physician’s written instructions.",
    },
    "pt-141": {
      name: "PT-141 (Bremelanotide)",
      category: "Sexual Wellness",
      price: "$139/mo",
      tagline: "Central nervous system peptide for desire and arousal pathway support",
      image: "/images/Bremelanotide.png",
      badge: "LIBIDO SUPPORT",
      description:
        "PT-141 (bremelanotide) acts on melanocortin pathways in the central nervous system and is prescribed for patients seeking physician-guided sexual desire and arousal support.",
      features: [
        "CNS-targeted desire pathway support",
        "As-needed or protocol-based dosing options",
        "Confidential online physician evaluation",
        "Discreet pharmacy shipping included",
      ],
      clinicalTrial: "Bremelanotide is an FDA-studied melanocortin agonist for hypoactive sexual desire in appropriate patients.",
      howToUse: "Inject subcutaneously as directed before anticipated activity, per physician guidance.",
    },
    "tadalafil": {
      name: "Tadalafil / Sildenafil",
      category: "Sexual Wellness",
      price: "$69/mo",
      tagline: "Daily or PRN vascular flow optimization for sexual performance",
      image: "/images/Bremelanotide.png",
      badge: "VASCULAR SUPPORT",
      description:
        "PDE5 inhibitor protocols (tadalafil or sildenafil) improve blood-flow signaling for sexual performance and may be prescribed daily or as-needed after clinical screening.",
      features: [
        "Daily low-dose or PRN options",
        "Physician screening for cardiovascular safety",
        "Transparent flat monthly membership pricing",
        "Fast discreet fulfillment",
      ],
      clinicalTrial: "PDE5 inhibitors are extensively studied for erectile function and vascular performance.",
      howToUse: "Take orally as prescribed—timing depends on daily vs on-demand protocols.",
    },
    "hair-restoration": {
      name: "Prescription Hair Restoration",
      category: "Hair Restoration",
      price: "$79/mo",
      tagline: "Custom Minoxidil + Finasteride + GHK-Cu protocols for denser, healthier hair",
      image: "/images/Minoxidil.png",
      badge: "HAIR PROTOCOL",
      description:
        "A compounded hair-restoration plan combining proven actives and peptide support, tailored after an online physician evaluation of pattern loss and scalp goals.",
      features: [
        "Custom topical formulations when prescribed",
        "Minoxidil / finasteride pathways with peptide support",
        "Progress photo guidance via AI coach",
        "Flat-rate membership with free shipping",
      ],
      clinicalTrial: "Minoxidil and finasteride remain cornerstone therapies in androgenetic alopecia research.",
      howToUse: "Apply topical solution or take oral components exactly as labeled by your clinician.",
    },
    "metabolic-panel": {
      name: "Advanced Metabolic Lab Panel",
      category: "Metabolic Health & Preventive Wellness",
      price: "$199",
      tagline: "Physician-reviewed biomarker testing for metabolic, hormone, and longevity baselines",
      image: "/images/why-evidence.png",
      badge: "LAB FOUNDATION",
      description:
        "A comprehensive metabolic lab panel designed to establish your baseline—glucose markers, lipids, key hormones, and inflammation signals—reviewed by a Reform Vital physician before any protocol begins.",
      features: [
        "Advanced biomarker panel with physician interpretation",
        "Clear next-step recommendations for therapy or lifestyle",
        "Results summarized in your patient dashboard",
        "Optional follow-up panels for progress tracking",
      ],
      clinicalTrial: "Lab-informed care improves personalization and safety for metabolic and hormone protocols.",
      howToUse: "Complete your ordered labs at a partner draw site; your physician reviews results online.",
    },
    "preventive-wellness": {
      name: "Preventive Wellness Program",
      category: "Metabolic Health & Preventive Wellness",
      price: "$149/mo",
      tagline: "Personalized metabolic optimization with nutrition, lifestyle, and ongoing provider monitoring",
      image: "/images/longevity_nad.png",
      badge: "PREVENTIVE CARE",
      description:
        "A physician-guided preventive program combining metabolic assessments, nutrition and lifestyle guidance, and continuous monitoring—so you optimize health before problems escalate.",
      features: [
        "Metabolic health assessment and goal mapping",
        "Nutritional and lifestyle protocol from your care team",
        "Monthly provider monitoring and plan adjustments",
        "24/7 AI coach for habits, protein, sleep, and hydration",
      ],
      clinicalTrial: "Preventive, continuous-care models improve adherence and early detection of metabolic risk.",
      howToUse: "Complete onboarding assessment, follow your personalized plan, and check in via portal and AI coach.",
    },
    "body-composition": {
      name: "Body Composition & Progress Tracking",
      category: "Metabolic Health & Preventive Wellness",
      price: "$79/mo",
      tagline: "Measurements, progress photos, and metabolic trend coaching between visits",
      image: "/images/portal-performance.png",
      badge: "TRACK & THRIVE",
      description:
        "Stay accountable with structured body-composition tracking—measurements, progress photos, and trend insights—reviewed alongside your physician plan and AI coach.",
      features: [
        "Guided measurement and progress-photo workflows",
        "Weight, waist, and composition trend summaries",
        "AI coach reminders and weekly progress digests",
        "Provider visibility into your trajectory between visits",
      ],
      clinicalTrial: "Regular measurement and feedback loops improve long-term metabolic outcomes.",
      howToUse: "Log measurements weekly in your portal; review trends with your coach and clinician.",
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
    subtitle: "Physician-guided healthcare in four simple steps—from assessment to ongoing optimization.",
    steps: [
      {
        step: "1",
        title: "Complete Your Health Assessment",
        description: "Share your health history, goals, and lifestyle in a secure online assessment—takes under 5 minutes.",
      },
      {
        step: "2",
        title: "Meet Your Provider",
        description: "A licensed U.S. physician reviews your profile, orders labs if needed, and consults with you on your plan.",
      },
      {
        step: "3",
        title: "Receive Your Personalized Treatment Plan",
        description: "Your custom protocol—GLP-1, hormones, peptides, or wellness—is prescribed and fulfilled by licensed pharmacies.",
      },
      {
        step: "4",
        title: "Ongoing Care & Optimization",
        description: "Follow-ups, treatment adjustments, secure messaging, and AI coaching keep you progressing long-term.",
      },
    ],
  },

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
        image: "/images/why-personalized.png",
      },
      {
        title: "Ongoing Provider Support",
        desc: "Licensed physicians stay involved with follow-ups, lab reviews, and treatment adjustments.",
        image: "/images/why-support.png",
      },
      {
        title: "Whole-Person Wellness",
        desc: "We address metabolic health, hormones, recovery, longevity, and prevention together.",
        image: "/images/why-wellness.png",
      },
      {
        title: "Evidence-Based Medicine",
        desc: "Physician-reviewed protocols grounded in clinical science and transparent about what works.",
        image: "/images/why-evidence.png",
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
      { slug: "longevity", label: "Longevity", href: "/resources/category/longevity", image: "/images/about-longevity.png" },
      { slug: "weight", label: "Weight Optimization", href: "/resources/category/weight", image: "/images/story-nutrition.png" },
      { slug: "hormones", label: "Hormone Optimization", href: "/resources/category/hormones", image: "/images/resource-hormones.jpg" },
      { slug: "nutrition", label: "Nutrition", href: "/resources/category/nutrition", image: "/images/academy-nutrition.png" },
      { slug: "labs", label: "Advanced Labs", href: "/resources/category/labs", image: "/images/why-evidence.png" },
      { slug: "sleep", label: "Sleep", href: "/resources/category/sleep", image: "/images/8.png" },
      { slug: "performance", label: "Performance", href: "/resources/category/performance", image: "/images/portal-performance.png" },
      { slug: "heart", label: "Heart Health", href: "/resources/category/heart", image: "/images/why-support.png" },
      { slug: "mens", label: "Men's Health", href: "/resources/category/mens", image: "/images/why-personalized.png" },
      { slug: "womens", label: "Women's Health", href: "/resources/category/womens", image: "/images/why-wellness.png" },
      { slug: "peptides", label: "Peptide Education", href: "/resources/category/peptides", image: "/images/member-clinical.png" },
      { slug: "gut", label: "Gut Health", href: "/resources/category/gut", image: "/images/academy-recipes.png" },
      { slug: "mental", label: "Mental Wellness", href: "/resources/category/mental", image: "/images/lifestyle-mindfulness.png" },
      { slug: "supplements", label: "Supplements", href: "/resources/category/supplements", image: "/images/academy-supplements.png" },
      { slug: "recipes", label: "Healthy Recipes", href: "/resources/category/recipes", image: "/images/academy-recipes.png" },
      { slug: "insights", label: "Physician Insights", href: "/resources/category/insights", image: "/images/story-habits.png" },
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
    successStories: [
      { outcome: "Increased Energy", story: "TRT + Sermorelin stack restored daily vitality and deep REM sleep within 90 days.", href: "/resources/articles/mens-health-vitality", image: "/images/story-habits.png" },
      { outcome: "Improved Biomarkers", story: "HbA1c dropped from 6.4% to 5.1% with physician-guided Tirzepatide+ and quarterly labs.", href: "/resources/articles/understanding-labs", image: "/images/why-evidence.png" },
      { outcome: "Sustainable Weight Management", story: "54 lbs lost over 5 months with ongoing provider titration—not a quick fix.", href: "/resources/articles/first-90-days-glp1", image: "/images/story-nutrition.png" },
      { outcome: "Better Fitness", story: "Recovery peptide protocol plus structured training returned to marathon training pain-free.", href: "/resources/articles/recovery-peptides-overview", image: "/images/why-wellness.png" },
      { outcome: "Healthy Aging", story: "NAD+ and preventive wellness protocols supporting long-term metabolic health.", href: "/resources/articles/nad-longevity-cellular-energy", image: "/images/about-longevity.png" },
      { outcome: "Confidence & Lifestyle", story: "Nutrition coaching and GLP-1 support rebuilt sustainable habits—not yo-yo dieting.", href: "/resources/articles/nutrition-weight-management", image: "/images/academy-recipes.png" },
    ],
    monthlyReport: {
      title: "Reform Vital Health Report",
      month: "August 2026",
      topics: ["GLP-1 research updates", "Longevity nutrition", "Seasonal wellness", "Physician Q&A"],
      summary: "Monthly insights on research, longevity, nutrition, exercise, and physician commentary—so you stay informed between visits.",
      href: "/resources/report",
    },
  },

  medicalTeam: [
    {
      name: "Dr. Michael Wasef, MD",
      title: "Internal Medicine Physician & Telemedicine Advisory",
      specialty: "Metabolic Health · GLP-1 Protocols · Preventive Endocrinology",
      bio: "Licensed nationwide specializing in metabolic health, GLP-1 weight loss protocols, and preventive endocrinology.",
      credentials: "Board-Certified · U.S. Licensed",
      image: "/images/doctor-wasef.png",
    },
    {
      name: "Dr. Andrew Sakla, DO",
      title: "Internal Medicine & Regenerative Medicine Director",
      specialty: "Peptide Therapy · TRT · Cellular Longevity",
      bio: "Pioneering evidence-based peptide therapy, TRT optimization, and cellular longevity treatments.",
      credentials: "Board-Certified · U.S. Licensed",
      image: "/images/doctor-sakla.png",
    },
  ],

  memberExperience: {
    headline: "Everything Included With Membership",
    subtitle: "Concierge care beyond the prescription—secure messaging, follow-ups, and progress tracking included.",
    inclusions: [
      { label: "Secure Provider Messaging", desc: "Direct messaging with your licensed medical team between visits.", image: "/images/why-personalized.png" },
      { label: "Scheduled Follow-Ups", desc: "Regular check-ins to review progress and adjust your protocol.", image: "/images/member-clinical.png" },
      { label: "Lab Reviews", desc: "Physician interpretation of metabolic, hormone, and wellness panels.", image: "/images/why-evidence.png" },
      { label: "Treatment Adjustments", desc: "Protocol changes based on your response, labs, and clinical judgment.", image: "/images/member-renew.png" },
      { label: "Prescription Management", desc: "Refills, dosage titration, and pharmacy coordination handled for you.", image: "/images/member-rx.png" },
      { label: "Progress Tracking", desc: "AI coach metrics, portal dashboards, and quarterly provider reports.", image: "/images/portal-performance.png" },
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
      question: "Who are the physicians overseeing my care?",
      answer:
        "Reform Vital care is supervised by board-certified U.S. physicians including Dr. Michael Wasef, MD (Internal Medicine) and Dr. Andrew Sakla, DO (Regenerative Medicine). Every prescription is issued only after individual clinical review.",
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
