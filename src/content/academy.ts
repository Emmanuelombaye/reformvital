export type AcademyArticle = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  summary: string;
  readTime: string;
  published: string;
  image: string;
  what: string;
  why: string;
  whatToDo: string[];
  whenPhysician: string;
  tips: string[];
  relatedSlugs: string[];
};

export type AcademyGuide = {
  slug: string;
  title: string;
  desc: string;
  sections: { heading: string; body: string }[];
};

export const academyArticles: AcademyArticle[] = [
  {
    slug: "glp1-metabolic-reset",
    title: "How GLP-1 Therapies Support Metabolic Reset",
    category: "Weight Optimization",
    categorySlug: "weight",
    summary: "A plain-language overview of Semaglutide and Tirzepatide—appetite signaling, expectations, and physician monitoring.",
    readTime: "6 min",
    published: "August 2026",
    image: "/images/resource-glp1.webp",
    what: "GLP-1 receptor agonists are physician-prescribed medications that mimic a natural gut hormone involved in appetite, blood sugar, and metabolic signaling.",
    why: "For many adults, willpower alone is not enough—biology drives cravings and plateaus. GLP-1 therapies, when medically supervised, can support sustainable weight loss and metabolic health.",
    whatToDo: [
      "Complete a full health assessment before starting any protocol.",
      "Track protein, hydration, and weekly weight trends.",
      "Report side effects early so your provider can titrate safely.",
      "Pair medication with movement and nutrition—not either/or.",
    ],
    whenPhysician: "Speak with a licensed provider before starting, if you are pregnant, have a history of pancreatitis, thyroid cancer (MTC/MEN2), or take insulin or sulfonylureas.",
    tips: ["Eat slowly and prioritize protein at each meal.", "Stay hydrated—GLP-1 therapies can reduce thirst cues.", "Schedule follow-ups every 4–8 weeks during titration."],
    relatedSlugs: ["first-90-days-glp1", "nutrition-weight-management"],
  },
  {
    slug: "first-90-days-glp1",
    title: "What to Expect in Your First 90 Days on GLP-1 Therapy",
    category: "Weight Optimization",
    categorySlug: "weight",
    summary: "Realistic timelines, side-effect management, and how your provider adjusts your protocol.",
    readTime: "5 min",
    published: "August 2026",
    image: "/images/weight_loss_glp1.webp",
    what: "The first 90 days on GLP-1 therapy typically include dose titration, appetite changes, and measurable weight trend shifts.",
    why: "Knowing what is normal reduces anxiety and helps you stay adherent—the biggest predictor of long-term success.",
    whatToDo: [
      "Weeks 1–4: Focus on tolerance and hydration; weight loss may be gradual.",
      "Weeks 5–8: Appetite suppression often peaks; maintain protein intake.",
      "Weeks 9–12: Review labs and progress with your provider; adjust dose if needed.",
    ],
    whenPhysician: "Contact your provider immediately for severe abdominal pain, persistent vomiting, or signs of allergic reaction.",
    tips: ["Small, frequent meals can ease nausea.", "Use your AI coach to log doses and symptoms.", "Don't compare your timeline to others—biology varies."],
    relatedSlugs: ["glp1-metabolic-reset", "medical-weight-loss-vs-sellers"],
  },
  {
    slug: "medical-weight-loss-vs-sellers",
    title: "Medical Weight Loss vs. Product-Only Sellers",
    category: "Weight Optimization",
    categorySlug: "weight",
    summary: "Why physician oversight, labs, and follow-up care matter for safe, sustainable results.",
    readTime: "4 min",
    published: "July 2026",
    image: "/images/tirzepatide_hero.webp",
    what: "Medical weight loss programs pair prescription therapies with licensed provider oversight, labs, and ongoing follow-up—not just medication shipped to your door.",
    why: "GLP-1 therapies affect metabolism, appetite, and GI function. Without clinical supervision, risks go unmanaged and results are often short-lived.",
    whatToDo: [
      "Verify the program uses licensed U.S. physicians—not questionnaire-only approvals.",
      "Confirm pharmacy sourcing (503A licensed compounding or approved products).",
      "Ask about follow-up cadence and what is included in membership.",
    ],
    whenPhysician: "Always choose physician-guided care if you have diabetes, cardiovascular disease, or take multiple medications.",
    tips: ["Transparent pricing beats hidden refill fees.", "Long-term partnership beats one-time prescriptions."],
    relatedSlugs: ["glp1-metabolic-reset", "first-90-days-glp1"],
  },
  {
    slug: "hormone-optimization-101",
    title: "Hormone Optimization 101",
    category: "Hormone Optimization",
    categorySlug: "hormones",
    summary: "Why labs come first for TRT and women's hormone therapy—and how protocols are personalized.",
    readTime: "7 min",
    published: "August 2026",
    image: "/images/resource-hormones.webp",
    what: "Hormone optimization uses lab-guided protocols to address imbalances in testosterone, estrogen, progesterone, thyroid, and related markers.",
    why: "Symptoms like fatigue, low libido, brain fog, and body-composition changes often trace to measurable hormonal shifts—guessing wastes time and can be unsafe.",
    whatToDo: [
      "Start with a comprehensive hormone and metabolic panel.",
      "Review results with a licensed provider—not an algorithm alone.",
      "Retest every 3–6 months during active therapy.",
    ],
    whenPhysician: "See a physician if you have unexplained chest pain, severe mood changes, leg swelling, or polycythemia symptoms on TRT.",
    tips: ["Sleep and stress management amplify hormone outcomes.", "Body composition matters as much as total testosterone number."],
    relatedSlugs: ["understanding-labs", "sleep-recovery-hormones"],
  },
  {
    slug: "nad-longevity-cellular-energy",
    title: "Longevity & Cellular Energy (NAD+)",
    category: "Longevity",
    categorySlug: "longevity",
    summary: "What NAD+ support aims to address, who may be a candidate, and clinical oversight.",
    readTime: "6 min",
    published: "July 2026",
    image: "/images/resource-longevity.webp",
    what: "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme involved in cellular energy production and repair pathways.",
    why: "NAD+ levels decline with age. Some patients pursue NAD+ support for energy, recovery, and longevity-focused wellness under physician guidance.",
    whatToDo: [
      "Discuss goals and medical history with your provider.",
      "Understand route of administration and expected timeline.",
      "Track energy, sleep, and recovery metrics between visits.",
    ],
    whenPhysician: "Consult before NAD+ if you have active cancer, are pregnant, or take complex medication regimens.",
    tips: ["Longevity is a marathon—consistency beats intensity.", "Pair NAD+ protocols with sleep and exercise fundamentals."],
    relatedSlugs: ["understanding-labs", "nutrition-weight-management"],
  },
  {
    slug: "understanding-labs",
    title: "Understanding Your Lab Results",
    category: "Advanced Labs",
    categorySlug: "labs",
    summary: "Key biomarkers for metabolic health, hormones, and inflammation—and what they mean.",
    readTime: "8 min",
    published: "August 2026",
    image: "/images/sermorelin_hero.webp",
    what: "Advanced labs measure biomarkers like HbA1c, lipids, testosterone, thyroid, inflammatory markers, and metabolic panels that guide personalized care.",
    why: "Data removes guesswork. Your provider uses trends—not single snapshots—to optimize protocols safely.",
    whatToDo: [
      "Fast if instructed before blood draw.",
      "Bring a list of medications and supplements.",
      "Ask your provider to explain out-of-range values in plain language.",
    ],
    whenPhysician: "Any critically abnormal result should be reviewed with your physician promptly—don't self-adjust therapies based on labs alone.",
    tips: ["Track labs over time in your patient portal.", "Morning draws are standard for hormone panels."],
    relatedSlugs: ["hormone-optimization-101", "nad-longevity-cellular-energy"],
  },
  {
    slug: "ai-health-coach-between-visits",
    title: "Using Your AI Health Coach Between Visits",
    category: "Performance",
    categorySlug: "performance",
    summary: "Track protein, hydration, sleep, and adherence between appointments.",
    readTime: "4 min",
    published: "July 2026",
    image: "/images/resource-ai-coach.webp",
    what: "The Reform Vital AI Coach helps you log habits, doses, and metrics between physician visits—it supports accountability without replacing clinical care.",
    why: "Most health outcomes happen between appointments. Daily tracking gives your provider better data for follow-ups.",
    whatToDo: [
      "Log weight, protein, and water daily.",
      "Record medication adherence and side effects.",
      "Review weekly summaries before your check-in.",
    ],
    whenPhysician: "The AI Coach never diagnoses. Escalate chest pain, severe symptoms, or emergencies to your physician or 911.",
    tips: ["Set a daily reminder at the same time.", "Sync metrics before every follow-up."],
    relatedSlugs: ["nutrition-weight-management", "sleep-recovery-hormones"],
  },
  {
    slug: "nutrition-weight-management",
    title: "Nutrition for Sustainable Weight Management",
    category: "Nutrition",
    categorySlug: "nutrition",
    summary: "Protein targets, meal timing, and building habits that support your protocol.",
    readTime: "5 min",
    published: "August 2026",
    image: "/images/academy-nutrition.webp",
    what: "Sustainable nutrition prioritizes adequate protein, fiber, hydration, and meal structure—especially while appetite changes on GLP-1 therapies.",
    why: "Without enough protein, weight loss can include muscle loss. Nutrition habits determine whether results last after titration.",
    whatToDo: [
      "Target 0.7–1.0g protein per pound of goal body weight (provider-guided).",
      "Build plates: protein + vegetables + complex carbs.",
      "Meal prep 2–3 days ahead to reduce decision fatigue.",
    ],
    whenPhysician: "Ask your provider for personalized macro targets if you have kidney disease, eating disorders, or diabetes.",
    tips: ["Use the Protein Calculator in Health Academy tools.", "Don't skip meals—it can worsen GLP-1 side effects."],
    relatedSlugs: ["glp1-metabolic-reset", "ai-health-coach-between-visits"],
  },
  {
    slug: "recovery-peptides-overview",
    title: "Recovery & Performance Peptides",
    category: "Peptide Education",
    categorySlug: "peptides",
    summary: "An overview of recovery-focused peptide pathways and clinical oversight.",
    readTime: "6 min",
    published: "July 2026",
    image: "/images/resource-recovery.webp",
    what: "Recovery peptides like BPC-157 and TB-500 are researched for tissue repair and recovery support—only available through physician-supervised protocols.",
    why: "Athletes and active adults seeking faster recovery benefit from clinical oversight to ensure appropriate dosing and monitoring.",
    whatToDo: [
      "Discuss injury history and goals with your provider.",
      "Follow prescribed dosing schedules exactly.",
      "Combine with rest, physical therapy, and nutrition.",
    ],
    whenPhysician: "Do not start peptide protocols without physician approval, especially if you have cancer history or active malignancy.",
    tips: ["Recovery is multifactorial—sleep is non-negotiable.", "Track pain and mobility scores weekly."],
    relatedSlugs: ["sleep-recovery-hormones", "understanding-labs"],
  },
  {
    slug: "sleep-recovery-hormones",
    title: "Sleep, Recovery, and Hormone Health",
    category: "Sleep",
    categorySlug: "sleep",
    summary: "How sleep quality affects hormones, weight, and long-term optimization.",
    readTime: "5 min",
    published: "August 2026",
    image: "/images/start-wellness.webp",
    what: "Sleep regulates cortisol, growth hormone, appetite hormones, and recovery—making it foundational to every optimization protocol.",
    why: "Poor sleep undermines GLP-1 results, TRT outcomes, and recovery peptides. Fixing sleep is often the highest-ROI lifestyle change.",
    whatToDo: [
      "Keep a consistent bedtime within 30 minutes nightly.",
      "Limit screens 60 minutes before bed.",
      "Track sleep duration and quality in your AI coach.",
    ],
    whenPhysician: "See a physician for snoring, gasping, or daytime sleepiness—sleep apnea requires medical evaluation.",
    tips: ["Try the Sleep Assessment in Health Academy tools.", "Magnesium and routine help—but aren't substitutes for apnea care."],
    relatedSlugs: ["hormone-optimization-101", "ai-health-coach-between-visits"],
  },
  {
    slug: "heart-health-prevention",
    title: "Heart Health & Metabolic Prevention",
    category: "Heart Health",
    categorySlug: "heart",
    summary: "How metabolic health, weight, and labs connect to cardiovascular prevention.",
    readTime: "5 min",
    published: "August 2026",
    image: "/images/nad_cellular.webp",
    what: "Heart health is closely tied to blood pressure, lipids, blood sugar, body composition, and inflammation—all measurable with labs.",
    why: "GLP-1 and preventive wellness protocols often improve cardiometabolic markers when supervised by a physician.",
    whatToDo: ["Know your blood pressure and lipids.", "Prioritize movement and protein-forward nutrition.", "Review trends with your provider quarterly."],
    whenPhysician: "Seek urgent care for chest pain, shortness of breath, or syncope.",
    tips: ["Walking 30 minutes daily supports lipids and mood.", "Don't stop prescribed meds without physician guidance."],
    relatedSlugs: ["understanding-labs", "glp1-metabolic-reset"],
  },
  {
    slug: "mens-health-vitality",
    title: "Men's Health & Vitality",
    category: "Men's Health",
    categorySlug: "mens",
    summary: "TRT, energy, body composition, and when to test testosterone.",
    readTime: "5 min",
    published: "July 2026",
    image: "/images/resource-hormones.webp",
    what: "Men's optimization often addresses testosterone, metabolic health, sleep, and recovery—guided by symptoms and labs.",
    why: "Low testosterone symptoms overlap with sleep deprivation and stress—labs clarify the picture.",
    whatToDo: ["Order morning total/free testosterone with provider oversight.", "Track energy, libido, and strength trends.", "Retest every 3–6 months on therapy."],
    whenPhysician: "Discuss TRT if you have fertility plans, prostate concerns, or polycythemia symptoms.",
    tips: ["Resistance training supports TRT outcomes.", "Sleep apnea can mimic low-T symptoms."],
    relatedSlugs: ["hormone-optimization-101", "sleep-recovery-hormones"],
  },
  {
    slug: "womens-hormone-balance",
    title: "Women's Hormone Balance",
    category: "Women's Health",
    categorySlug: "womens",
    summary: "Perimenopause, progesterone, estradiol, and personalized HRT approaches.",
    readTime: "6 min",
    published: "July 2026",
    image: "/images/longevity_nad.webp",
    what: "Women's hormone optimization may include progesterone, estradiol, and low-dose testosterone—always lab-guided.",
    why: "Hot flashes, sleep disruption, mood changes, and body-composition shifts often have hormonal components worth evaluating.",
    whatToDo: ["Share cycle history and symptoms openly with your provider.", "Complete recommended labs before starting therapy.", "Schedule follow-ups to adjust dosing."],
    whenPhysician: "Report abnormal bleeding, severe headaches, or leg swelling immediately.",
    tips: ["Track symptoms in your patient portal.", "Nutrition and strength training support hormone health."],
    relatedSlugs: ["hormone-optimization-101", "sleep-recovery-hormones"],
  },
  {
    slug: "gut-health-metabolic-link",
    title: "Gut Health & Metabolic Health",
    category: "Gut Health",
    categorySlug: "gut",
    summary: "How digestion, inflammation, and GLP-1 therapies interact.",
    readTime: "4 min",
    published: "July 2026",
    image: "/images/resource-glp1.webp",
    what: "Gut health influences inflammation, nutrient absorption, and GI side effects on GLP-1 therapies.",
    why: "Managing nausea, constipation, and microbiome-friendly nutrition improves adherence and comfort.",
    whatToDo: ["Eat slowly and prioritize fiber gradually.", "Stay hydrated.", "Report persistent GI symptoms to your provider."],
    whenPhysician: "Severe abdominal pain or vomiting requires prompt medical evaluation.",
    tips: ["Small meals reduce GLP-1 GI side effects.", "Consider probiotic foods if tolerated."],
    relatedSlugs: ["first-90-days-glp1", "nutrition-weight-management"],
  },
  {
    slug: "mental-wellness-optimization",
    title: "Mental Wellness & Health Optimization",
    category: "Mental Wellness",
    categorySlug: "mental",
    summary: "Mood, stress, sleep, and the mind-body connection in longevity care.",
    readTime: "5 min",
    published: "August 2026",
    image: "/images/start-wellness.webp",
    what: "Mental wellness includes stress management, sleep, social connection, and knowing when mood changes need clinical care.",
    why: "Hormone shifts, weight change, and chronic stress all affect mood—optimization care addresses the whole person.",
    whatToDo: ["Track mood and sleep alongside physical metrics.", "Maintain movement and daylight exposure.", "Use secure messaging for non-urgent concerns."],
    whenPhysician: "Seek immediate help for suicidal thoughts, psychosis, or severe depression.",
    tips: ["Therapy complements medical optimization.", "Limit alcohol—it disrupts sleep and hormones."],
    relatedSlugs: ["sleep-recovery-hormones", "ai-health-coach-between-visits"],
  },
  {
    slug: "supplements-smart-use",
    title: "Supplements: Evidence-Based Use",
    category: "Supplements",
    categorySlug: "supplements",
    summary: "What supplements may support your protocol—and what to avoid without physician input.",
    readTime: "4 min",
    published: "July 2026",
    image: "/images/academy-supplements.webp",
    what: "Supplements like omega-3, vitamin D, magnesium, and protein can support wellness—but aren't substitutes for prescribed care.",
    why: "Quality and interactions matter. Your provider reviews everything you take alongside prescriptions.",
    whatToDo: ["Share a full supplement list at intake.", "Choose third-party tested products when possible.", "Avoid stacking unproven 'longevity' stacks without guidance."],
    whenPhysician: "Ask before adding supplements if you take blood thinners, GLP-1s, or hormone therapies.",
    tips: ["Food first, supplement second.", "More is not better—dose matters."],
    relatedSlugs: ["nad-longevity-cellular-energy", "nutrition-weight-management"],
  },
  {
    slug: "healthy-recipes-protocol",
    title: "Healthy Recipes for Your Protocol",
    category: "Healthy Recipes",
    categorySlug: "recipes",
    summary: "High-protein, GLP-1-friendly meal ideas that support adherence.",
    readTime: "4 min",
    published: "August 2026",
    image: "/images/academy-recipes.webp",
    what: "Protocol-friendly recipes prioritize lean protein, vegetables, and simple preparation—especially when appetite is reduced.",
    why: "When you eat less, every bite should count nutritionally.",
    whatToDo: ["Prep grilled chicken, quinoa, and roasted vegetables in batches.", "Keep Greek yogurt, eggs, and shakes available.", "Use the Macro Calculator for targets."],
    whenPhysician: "Ask for renal-safe protein targets if you have kidney disease.",
    tips: ["Sheet-pan meals minimize cleanup.", "Flavor with herbs—not just sauce calories."],
    relatedSlugs: ["nutrition-weight-management", "glp1-metabolic-reset"],
  },
  {
    slug: "physician-insights-concierge-care",
    title: "Physician Insights: Concierge Care Done Right",
    category: "Physician Insights",
    categorySlug: "insights",
    summary: "How Reform Vital physicians think about long-term health partnerships.",
    readTime: "5 min",
    published: "August 2026",
    image: "/images/doctor_portrait.webp",
    what: "Concierge telehealth means ongoing physician relationship—not a one-time prescription.",
    why: "Lasting results require titration, labs, follow-up, and lifestyle support over months and years.",
    whatToDo: ["Treat your provider as a partner—share honest data.", "Show up to follow-ups even when you feel well.", "Use secure messaging for clinical questions."],
    whenPhysician: "Always escalate emergencies to 911 or local ER—telehealth is not for acute crises.",
    tips: ["Quarterly labs beat annual guesswork.", "Small consistent changes outperform extreme resets."],
    relatedSlugs: ["medical-weight-loss-vs-sellers", "understanding-labs"],
  },
];

export type CategoryMeta = {
  slug: string;
  guideSlug?: string;
  faqs: { q: string; a: string }[];
  tips: string[];
};

export const categoryMeta: CategoryMeta[] = [
  {
    slug: "longevity",
    guideSlug: "longevity-blueprint",
    faqs: [
      { q: "What is longevity medicine?", a: "Physician-guided prevention focused on biomarkers, cellular health, and sustainable habits—not quick fixes." },
      { q: "Do I need labs to start?", a: "Most longevity protocols begin with a metabolic and hormone baseline reviewed by your provider." },
    ],
    tips: ["Prioritize sleep and resistance training.", "Review labs quarterly—not once a year."],
  },
  {
    slug: "weight",
    guideSlug: "weight-optimization-guide",
    faqs: [
      { q: "Is GLP-1 therapy right for everyone?", a: "No. A licensed physician reviews your history, labs, and goals before any prescription." },
      { q: "How fast will I lose weight?", a: "Most patients see gradual progress over 12–24 weeks with ongoing titration and lifestyle support." },
    ],
    tips: ["Track protein daily.", "Report side effects early to your provider."],
  },
  {
    slug: "hormones",
    guideSlug: "hormone-health-guide",
    faqs: [
      { q: "Why are labs required first?", a: "Symptoms overlap with sleep and stress—labs help your physician personalize safe dosing." },
      { q: "How often are follow-ups?", a: "Typically every 3–6 months with repeat panels on active therapy." },
    ],
    tips: ["Morning labs for testosterone when applicable.", "Never adjust dose without provider guidance."],
  },
  {
    slug: "nutrition",
    guideSlug: "nutrition-playbook",
    faqs: [
      { q: "How much protein do I need?", a: "Use our Protein Calculator as a starting point—your provider personalizes targets." },
      { q: "Can I follow any diet on GLP-1?", a: "Focus on adequate protein and hydration; your physician may adjust for medical conditions." },
    ],
    tips: ["Batch-prep proteins twice weekly.", "Eat slowly when appetite is reduced."],
  },
  {
    slug: "labs",
    guideSlug: "understanding-your-labs",
    faqs: [
      { q: "Which panels does Reform Vital use?", a: "Common panels include CMP, lipids, HbA1c, hormones, thyroid, and inflammatory markers." },
      { q: "How do I read my results?", a: "Trends matter more than a single number—your provider reviews both in follow-up." },
    ],
    tips: ["Fast when instructed for accurate lipids/glucose.", "Save PDF copies in your patient portal."],
  },
  {
    slug: "sleep",
    guideSlug: "sleep-guide",
    faqs: [
      { q: "Does sleep affect hormone therapy?", a: "Yes—poor sleep can mimic low testosterone and undermine GLP-1 outcomes." },
      { q: "When should I worry about snoring?", a: "Snoring with daytime sleepiness warrants a physician evaluation for sleep apnea." },
    ],
    tips: ["Keep a consistent wake time.", "Limit screens 60 minutes before bed."],
  },
  {
    slug: "performance",
    guideSlug: "executive-health-guide",
    faqs: [
      { q: "Can peptides help recovery?", a: "Some recovery peptides may be appropriate under physician supervision—not for self-experimentation." },
      { q: "How does telehealth fit busy schedules?", a: "Secure messaging, async check-ins, and home delivery reduce friction without skipping clinical oversight." },
    ],
    tips: ["Track training load and sleep together.", "Recovery days are part of performance."],
  },
  {
    slug: "heart",
    faqs: [
      { q: "Do GLP-1s help heart health?", a: "Many patients see improved cardiometabolic markers when therapy is physician-supervised." },
      { q: "What should I monitor at home?", a: "Blood pressure when advised, weight trends, and symptoms like chest pain or shortness of breath." },
    ],
    tips: ["Daily walking supports lipids and mood.", "Don't stop cardiac meds without your doctor."],
  },
  {
    slug: "mens",
    guideSlug: "hormone-health-guide",
    faqs: [
      { q: "What symptoms suggest low testosterone?", a: "Fatigue, low libido, brain fog, and loss of lean mass—confirmed with morning labs." },
      { q: "Is TRT lifelong?", a: "Duration depends on your diagnosis and goals—your physician reviews risks and benefits ongoing." },
    ],
    tips: ["Resistance training supports TRT outcomes.", "Rule out sleep apnea before blaming hormones."],
  },
  {
    slug: "womens",
    guideSlug: "hormone-health-guide",
    faqs: [
      { q: "Can HRT help perimenopause symptoms?", a: "Many women benefit from personalized hormone therapy after labs and history review." },
      { q: "Is testosterone used for women?", a: "Low-dose testosterone may be considered in select cases under physician supervision." },
    ],
    tips: ["Track cycles and symptoms in your portal.", "Strength training supports bone and metabolic health."],
  },
  {
    slug: "peptides",
    faqs: [
      { q: "Are peptides safe to buy online?", a: "Only use physician-prescribed peptides from licensed pharmacies—avoid unregulated sources." },
      { q: "Who should avoid peptide therapy?", a: "Patients with active malignancy or certain conditions need individual physician clearance." },
    ],
    tips: ["Follow prescribed schedules exactly.", "Combine with rest and nutrition—not shortcuts."],
  },
  {
    slug: "gut",
    faqs: [
      { q: "Why do GLP-1s cause GI side effects?", a: "Slower gastric emptying can cause nausea—often improves with dose titration and meal timing." },
      { q: "Should I take probiotics?", a: "Ask your provider—needs vary and interactions with therapy matter." },
    ],
    tips: ["Small, frequent meals help nausea.", "Increase fiber gradually with hydration."],
  },
  {
    slug: "mental",
    faqs: [
      { q: "Can hormone changes affect mood?", a: "Yes—thyroid, testosterone, and menopause shifts can influence mood and sleep." },
      { q: "When is therapy recommended?", a: "Counseling complements medical care; seek urgent help for crisis symptoms." },
    ],
    tips: ["Track mood alongside sleep metrics.", "Daylight and movement support mental wellness."],
  },
  {
    slug: "supplements",
    faqs: [
      { q: "Do I need supplements on TRT or GLP-1?", a: "Some patients benefit from vitamin D, magnesium, or omega-3—your provider reviews your full list." },
      { q: "Can supplements interact with prescriptions?", a: "Yes. Share everything you take at intake and before adding new products." },
    ],
    tips: ["Choose third-party tested brands.", "Food first, supplement second."],
  },
  {
    slug: "recipes",
    guideSlug: "nutrition-playbook",
    faqs: [
      { q: "What makes a meal GLP-1-friendly?", a: "High protein, vegetables, and moderate portions—easy to digest when appetite is low." },
      { q: "How do I hit protein targets?", a: "Prep lean proteins in batches and keep Greek yogurt, eggs, and shakes on hand." },
    ],
    tips: ["Sheet-pan dinners save time.", "Herbs and spices add flavor without excess calories."],
  },
  {
    slug: "insights",
    guideSlug: "executive-health-guide",
    faqs: [
      { q: "What is concierge telehealth?", a: "Ongoing physician partnership with messaging, follow-ups, and lab reviews—not a one-time Rx." },
      { q: "How is Reform Vital different from pill mills?", a: "Board-certified providers, licensed pharmacies, labs, and long-term optimization." },
    ],
    tips: ["Show up to follow-ups even when you feel well.", "Honest data helps your provider titrate safely."],
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return categoryMeta.find((c) => c.slug === slug);
}

export const academyGuides: AcademyGuide[] = [
  {
    slug: "longevity-blueprint",
    title: "Longevity Blueprint",
    desc: "A physician-aligned roadmap for cellular health and healthy aging.",
    sections: [
      { heading: "Foundation", body: "Longevity starts with sleep, movement, nutrition, and stress—not shortcuts. Reform Vital builds on these pillars with physician-guided protocols." },
      { heading: "Biomarkers to Track", body: "Metabolic panel, inflammatory markers, hormone baseline, body composition, and HbA1c—reviewed quarterly with your provider." },
      { heading: "Your Next Step", body: "Schedule a consultation to build a personalized longevity plan based on your labs and goals." },
    ],
  },
  {
    slug: "executive-health-guide",
    title: "Executive Health Guide",
    desc: "Performance-focused wellness for busy professionals.",
    sections: [
      { heading: "Time-Efficient Care", body: "Telehealth assessments, secure messaging, and cold-chain delivery fit demanding schedules without sacrificing clinical oversight." },
      { heading: "Energy & Focus", body: "Hormone optimization, metabolic health, and sleep hygiene compound for sustainable executive performance." },
      { heading: "Your Next Step", body: "Start with an online assessment—most intakes take under 5 minutes." },
    ],
  },
  {
    slug: "weight-optimization-guide",
    title: "Weight Optimization Guide",
    desc: "GLP-1 therapy expectations, nutrition, and sustainable habits.",
    sections: [
      { heading: "Setting Expectations", body: "Medical weight loss is a partnership. Typical progress is gradual over 12–24 weeks with provider titration." },
      { heading: "Nutrition Essentials", body: "Prioritize protein, hydration, and structured meals. Use Health Academy calculators for personalized targets." },
      { heading: "Your Next Step", body: "Begin your health assessment to see if physician-guided GLP-1 therapy is appropriate for you." },
    ],
  },
  {
    slug: "hormone-health-guide",
    title: "Hormone Health Guide",
    desc: "TRT, women's hormones, and when labs matter.",
    sections: [
      { heading: "Labs First", body: "Never start hormone therapy without baseline labs and physician interpretation." },
      { heading: "Monitoring", body: "Follow-up panels every 3–6 months ensure safety and efficacy." },
      { heading: "Your Next Step", body: "Meet with a licensed provider to review symptoms and order appropriate panels." },
    ],
  },
  {
    slug: "understanding-your-labs",
    title: "Understanding Your Labs",
    desc: "Decode metabolic panels, hormones, and inflammation markers.",
    sections: [
      { heading: "Common Panels", body: "CMP, lipid panel, HbA1c, testosterone (total/free), thyroid, and hs-CRP are frequently used in optimization care." },
      { heading: "Reading Trends", body: "A single number matters less than direction over time—your provider reviews both." },
      { heading: "Your Next Step", body: "Request a metabolic panel through your Reform Vital assessment." },
    ],
  },
  {
    slug: "healthy-aging-handbook",
    title: "Healthy Aging Handbook",
    desc: "Preventive strategies for energy, mobility, and cognition.",
    sections: [
      { heading: "Movement", body: "Resistance training 2–3× weekly preserves lean mass during weight loss and aging." },
      { heading: "Cognition", body: "Sleep, social connection, and metabolic health support long-term brain health." },
      { heading: "Your Next Step", body: "Explore preventive wellness programs with ongoing provider monitoring." },
    ],
  },
  {
    slug: "sleep-guide",
    title: "Sleep Guide",
    desc: "Recovery, circadian rhythm, and hormone connection.",
    sections: [
      { heading: "Circadian Basics", body: "Consistent wake times anchor your hormone cycle. Morning light exposure helps." },
      { heading: "Sleep & Hormones", body: "Poor sleep elevates cortisol and disrupts appetite hormones—undermining GLP-1 and TRT outcomes." },
      { heading: "Your Next Step", body: "Take the Sleep Assessment in Health Academy tools and share results with your provider." },
    ],
  },
  {
    slug: "nutrition-playbook",
    title: "Nutrition Playbook",
    desc: "Protein, macros, and meal planning for protocol success.",
    sections: [
      { heading: "Protein Targets", body: "Use the Protein and Macro Calculators for starting points—your provider personalizes from there." },
      { heading: "Meal Planning", body: "Batch prep proteins and vegetables twice weekly to stay adherent when appetite is low." },
      { heading: "Your Next Step", body: "Log meals in your AI coach and review trends at your next follow-up." },
    ],
  },
];

export function getArticleBySlug(slug: string): AcademyArticle | undefined {
  return academyArticles.find((a) => a.slug === slug);
}

export function getGuideBySlug(slug: string): AcademyGuide | undefined {
  return academyGuides.find((g) => g.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): AcademyArticle[] {
  return academyArticles.filter((a) => a.categorySlug === categorySlug);
}

export function getAllArticleSlugs(): string[] {
  return academyArticles.map((a) => a.slug);
}

export function getAllGuideSlugs(): string[] {
  return academyGuides.map((g) => g.slug);
}

export function getGuidePdfUrl(slug: string): string {
  return `/downloads/guides/${slug}.pdf`;
}
