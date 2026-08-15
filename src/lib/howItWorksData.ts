/** Reform Vital — Yucca/Pax How It Works sticky flow data */

export const HOW_STEPS = [
  {
    n: "01",
    title: "Choose a",
    titleItalic: "treatment plan",
    body: "Browse physician-guided pathways—GLP-1, hormones, peptides, longevity—and pick the plan that matches your goals. Then complete a short medical history so our providers can confirm you're a good fit.",
    image: {
      src: "/images/how-step-consult.png",
      alt: "Patient browsing Reform Vital treatment options",
    },
    chips: ["GLP-1", "Hormones", "Peptides"],
    callout: {
      value: "9 care categories",
      label: "Personalized protocols reviewed by U.S. licensed providers",
    },
    link: { href: "/treatments", label: "Explore treatments →" },
  },
  {
    n: "02",
    title: "Checkout &",
    titleItalic: "verify identity",
    body: "Complete your secure intake, then verify your identity with a quick ID step. It's a standard part of telehealth—and it keeps prescriptions issued safely.",
    image: {
      src: "/images/how-step-consult.png",
      alt: "Secure Reform Vital checkout and identity verification",
    },
    chips: ["Secure checkout", "ID verification", "Cancel anytime"],
  },
  {
    n: "03",
    title: "Provider",
    titleItalic: "reviews intake",
    body: "A licensed U.S. provider reviews your medical history—typically within 24 hours. If they need clarification or have recommendations, they'll follow up directly. No office visit required.",
    image: {
      src: "/images/how-step-physician.png",
      alt: "Licensed provider reviewing Reform Vital patient intake",
    },
    chips: ["Licensed providers", "Review within 24h", "No office visit"],
  },
  {
    n: "04",
    title: "Receive your",
    titleItalic: "medication",
    body: "Once approved, your prescription is sent to a licensed partner pharmacy and fulfilled to your exact plan. Medication ships via expedited cold-chain delivery—discreetly packaged to your door.",
    image: {
      src: "/images/how-step-delivery.png",
      alt: "Reform Vital medication delivered in discreet packaging",
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
      src: "/images/how-step-ongoing.png",
      alt: "Patient starting treatment with Reform Vital care support",
    },
    chips: ["Patient portal", "AI coach", "Ongoing support"],
  },
] as const;

export const HOW_WHY = [
  {
    image: {
      src: "/images/vial-glp1.png",
      alt: "Reform Vital GLP-1 treatment vials",
    },
    title: "Transparent & Trusted",
    body: "From compounding partners to doorstep delivery—pharmaceutical-grade quality with clear clinical oversight.",
  },
  {
    image: {
      src: "/images/how-step-physician.png",
      alt: "Licensed provider reviewing patient care",
    },
    title: "Care Built Around You",
    body: "Protocols tailored to your goals, history, labs, and how your body responds over time.",
  },
  {
    image: {
      src: "/images/how-step-ongoing.png",
      alt: "Patient on a Reform Vital health journey",
    },
    title: "Clinically Guided Care",
    body: "Provider-led memberships with follow-ups, adjustments, and AI coaching between visits.",
  },
] as const;

export const HOW_MEDIA = {
  priority: {
    src: "/images/how-step-ongoing.png",
    alt: "Reform Vital patient care and progress support",
  },
  cta: {
    src: "/images/lifestyle-morning.png",
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
    a: "Medical weight loss (GLP-1), hormone optimization, growth hormone peptides, recovery, longevity, cognitive support, sexual wellness, hair restoration, and preventive labs—prescribed only when clinically appropriate.",
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
