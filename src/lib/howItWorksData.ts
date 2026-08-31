/** Reform Vital — Yucca sticky How It Works, Reform imagery + copy */

export const HOW_STEPS = [
  {
    n: "01",
    title: "Choose a",
    titleItalic: "treatment plan",
    body: "Choose Semaglutide or Tirzepatide, review the all-inclusive monthly program price, and complete a short medical history so our providers can confirm you're a good fit.",
    image: {
      src: "/images/featured-metabolic.webp",
      alt: "Reform Vital personalized treatment pathways",
      aspect: "16/9",
    },
    chips: ["Semaglutide", "Tirzepatide", "Weight management"],
    callout: {
      value: "2 programs",
      label: "Clinician-guided weight management with transparent monthly pricing",
    },
    link: { href: "/treatments", label: "Explore treatments →" },
  },
  {
    n: "02",
    title: "Checkout &",
    titleItalic: "verify identity",
    body: "Complete your secure intake, then verify your identity with a quick ID step. It's a standard part of telehealth—and it keeps prescriptions issued safely.",
    image: {
      src: "/images/start-wellness.webp",
      alt: "Secure Reform Vital checkout and identity verification",
      aspect: "4/5",
    },
    chips: ["Secure checkout", "ID verification", "Cancel anytime"],
  },
  {
    n: "03",
    title: "Provider",
    titleItalic: "reviews intake",
    body: "A licensed U.S. provider reviews your medical history—typically within 24 hours. If they need clarification or have recommendations, they'll follow up directly. No office visit required.",
    image: {
      src: "/images/how-step-physician.webp",
      alt: "Licensed provider reviewing Reform Vital patient intake",
      aspect: "1/1",
    },
    chips: ["Licensed providers", "Review within 24h", "No office visit"],
  },
  {
    n: "04",
    title: "Receive your",
    titleItalic: "medication",
    body: "Once approved, your prescription is sent to a licensed partner pharmacy and fulfilled to your exact plan. Medication ships via expedited cold-chain delivery—discreetly packaged to your door.",
    image: {
      src: "/images/member-rx.webp",
      alt: "Reform Vital medication delivered in discreet packaging",
      aspect: "1/1",
    },
    chips: ["Licensed pharmacy", "Expedited shipping", "Discreet packaging"],
    callout: {
      value: "Free expedited",
      label: "Includes insulation to help medication stay fresh in transit.",
    },
  },
  {
    n: "05",
    title: "Start your",
    titleItalic: "treatment",
    body: "Care doesn't stop at delivery. From day one you get patient portal access, onboarding guidance, AI coaching between visits, and a care team for questions and adjustments.",
    image: {
      src: "/images/member-renew.webp",
      alt: "Patient starting treatment with Reform Vital care support",
      aspect: "3/2",
    },
    chips: ["Patient portal", "AI coach", "Ongoing support"],
  },
] as const;

export const HOW_WHY = [
  {
    image: {
      src: "/images/packs/glp1-a.webp",
      alt: "Reform Vital pharmaceutical-grade treatment packaging",
    },
    title: "Transparent & Trusted",
    body: "From compounding partners to doorstep delivery—pharmaceutical-grade quality with clear clinical oversight.",
  },
  {
    image: {
      src: "/images/doctor_portrait.webp",
      alt: "Licensed Reform Vital medical provider",
      aspect: "1/1",
    },
    title: "Care Built Around You",
    body: "Protocols tailored to your goals, history, labs, and how your body responds over time.",
  },
  {
    image: {
      src: "/images/about-longevity.webp",
      alt: "Clinically guided healthy aging journey",
      aspect: "3/2",
    },
    title: "Clinically Guided Care",
    body: "Provider-led memberships with follow-ups, adjustments, and AI coaching between visits.",
  },
] as const;

export const HOW_MEDIA = {
  priority: {
    src: "/images/portal-performance.webp",
    alt: "Reform Vital patient portal and progress tracking",
  },
  cta: {
    src: "/images/lifestyle-morning.webp",
    alt: "Begin Reform Vital provider-led care",
  },
} as const;

export const HOW_FAQS = [
  {
    q: "How does Reform Vital work?",
    a: "Choose a treatment, complete a short online intake, a licensed U.S. provider reviews it within 24 hours, and if approved, your medication is compounded and shipped directly to your door.",
  },
  {
    q: "Is a prescription required?",
    a: "Yes. Our treatments are prescription-only. Licensed providers review your medical history and, if appropriate, issue a prescription through our HIPAA-compliant platform.",
  },
  {
    q: "What treatments do you offer?",
    a: "Reform Vital offers two weight-management programs: Semaglutide ($149/mo) and Tirzepatide ($249/mo). Both require licensed provider review and are prescribed only when clinically appropriate.",
  },
  {
    q: "How fast is shipping?",
    a: "Once approved and prescribed, your medication ships with free expedited cold-chain delivery in discreet packaging.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Plans are flexible with no long-term lock-in. You can pause or cancel anytime from your patient portal.",
  },
] as const;
