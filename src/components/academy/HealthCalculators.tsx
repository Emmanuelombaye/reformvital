"use client";

import { useEffect, useState } from "react";

type Tab = "bmi" | "protein" | "water" | "macro" | "weight-range" | "bio-age" | "sleep" | "longevity";

const tabs: { id: Tab; label: string }[] = [
  { id: "bmi", label: "BMI" },
  { id: "protein", label: "Protein" },
  { id: "water", label: "Water" },
  { id: "macro", label: "Macros" },
  { id: "weight-range", label: "Weight Range" },
  { id: "bio-age", label: "Bio Age Quiz" },
  { id: "sleep", label: "Sleep" },
  { id: "longevity", label: "Longevity Risk" },
];

function num(v: string) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

export default function HealthCalculators({ initialTab = "bmi" }: { initialTab?: Tab }) {
  const [tab, setTab] = useState<Tab>(initialTab);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Tab;
    if (tabs.some((t) => t.id === hash)) {
      setTab(hash);
    }
  }, []);

  // BMI
  const [heightIn, setHeightIn] = useState("70");
  const [weightLb, setWeightLb] = useState("180");
  const heightM = num(heightIn) * 0.0254;
  const weightKg = num(weightLb) * 0.453592;
  const bmi = heightM > 0 ? weightKg / (heightM * heightM) : 0;

  // Protein
  const [goalWeight, setGoalWeight] = useState("160");
  const proteinLow = Math.round(num(goalWeight) * 0.7);
  const proteinHigh = Math.round(num(goalWeight) * 1.0);

  // Water
  const [waterWeight, setWaterWeight] = useState("180");
  const waterOz = Math.round(num(waterWeight) * 0.67);

  // Macros
  const [calories, setCalories] = useState("2000");
  const [macroWeight, setMacroWeight] = useState("180");
  const cals = num(calories);
  const macroProtein = Math.round(num(macroWeight) * 0.8);
  const proteinCals = macroProtein * 4;
  const fatCals = cals * 0.25;
  const carbCals = Math.max(0, cals - proteinCals - fatCals);

  // Weight range (BMI 18.5–24.9)
  const [wrHeight, setWrHeight] = useState("70");
  const hm = num(wrHeight) * 0.0254;
  const lowWt = hm > 0 ? Math.round(18.5 * hm * hm * 2.20462) : 0;
  const highWt = hm > 0 ? Math.round(24.9 * hm * hm * 2.20462) : 0;

  // Bio age quiz (simplified score)
  const [exercise, setExercise] = useState("3");
  const [sleepH, setSleepH] = useState("7");
  const [stress, setStress] = useState("2");
  const bioScore = Math.max(0, Math.min(10, num(exercise) + num(sleepH) * 0.5 - num(stress)));
  const bioAgeAdj = bioScore >= 7 ? "Younger than chronological" : bioScore >= 4 ? "Near chronological" : "Consider lifestyle improvements";

  // Sleep
  const [bedtime, setBedtime] = useState("6");
  const [sleepQuality, setSleepQuality] = useState("3");
  const sleepScore = num(bedtime) >= 7 && num(sleepQuality) >= 3 ? "Good foundation" : "Room for improvement—discuss with your provider";

  // Longevity risk (simplified)
  const [smoke, setSmoke] = useState("0");
  const [activity, setActivity] = useState("3");
  const [labs, setLabs] = useState("1");
  const riskScore = num(smoke) * 3 + (5 - num(activity)) + (labs === "0" ? 2 : 0);
  const riskLabel = riskScore <= 3 ? "Lower modifiable risk" : riskScore <= 6 ? "Moderate—optimize habits & labs" : "Higher—prioritize physician-guided preventive care";

  return (
    <div className="rv-calculators">
      <div className="rv-calculator-tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? "is-active" : ""}
            onClick={() => {
              setTab(t.id);
              window.history.replaceState(null, "", `#${t.id}`);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rv-calculator-panel">
        {tab === "bmi" && (
          <>
            <h3>BMI Calculator</h3>
            <p className="rv-calculator-note">Educational estimate only—not a diagnosis. Discuss results with your physician.</p>
            <label>Height (inches) <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} /></label>
            <label>Weight (lbs) <input type="number" value={weightLb} onChange={(e) => setWeightLb(e.target.value)} /></label>
            <div className="rv-calculator-result">BMI: <strong>{bmi.toFixed(1)}</strong></div>
          </>
        )}

        {tab === "protein" && (
          <>
            <h3>Protein Calculator</h3>
            <label>Goal body weight (lbs) <input type="number" value={goalWeight} onChange={(e) => setGoalWeight(e.target.value)} /></label>
            <div className="rv-calculator-result">Daily protein: <strong>{proteinLow}–{proteinHigh}g</strong> (provider may personalize)</div>
          </>
        )}

        {tab === "water" && (
          <>
            <h3>Water Intake Guide</h3>
            <label>Body weight (lbs) <input type="number" value={waterWeight} onChange={(e) => setWaterWeight(e.target.value)} /></label>
            <div className="rv-calculator-result">Approx. <strong>{waterOz} oz</strong> / day (adjust for activity & climate)</div>
          </>
        )}

        {tab === "macro" && (
          <>
            <h3>Macro Calculator</h3>
            <label>Daily calories <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} /></label>
            <label>Body weight (lbs) <input type="number" value={macroWeight} onChange={(e) => setMacroWeight(e.target.value)} /></label>
            <div className="rv-calculator-result">
              Protein: <strong>{macroProtein}g</strong> · Fat: <strong>{Math.round(fatCals / 9)}g</strong> · Carbs: <strong>{Math.round(carbCals / 4)}g</strong>
            </div>
          </>
        )}

        {tab === "weight-range" && (
          <>
            <h3>Healthy Weight Range</h3>
            <label>Height (inches) <input type="number" value={wrHeight} onChange={(e) => setWrHeight(e.target.value)} /></label>
            <div className="rv-calculator-result">BMI 18.5–24.9 range: <strong>{lowWt}–{highWt} lbs</strong></div>
          </>
        )}

        {tab === "bio-age" && (
          <>
            <h3>Biological Age Quiz</h3>
            <p className="rv-calculator-note">Simplified wellness screen—not a clinical biological age test.</p>
            <label>Exercise days/week (0–7) <input type="number" min={0} max={7} value={exercise} onChange={(e) => setExercise(e.target.value)} /></label>
            <label>Avg sleep (hours) <input type="number" min={0} max={12} value={sleepH} onChange={(e) => setSleepH(e.target.value)} /></label>
            <label>Stress level (1–5) <input type="number" min={1} max={5} value={stress} onChange={(e) => setStress(e.target.value)} /></label>
            <div className="rv-calculator-result">{bioAgeAdj}</div>
          </>
        )}

        {tab === "sleep" && (
          <>
            <h3>Sleep Assessment</h3>
            <label>Avg hours of sleep <input type="number" value={bedtime} onChange={(e) => setBedtime(e.target.value)} /></label>
            <label>Sleep quality (1–5) <input type="number" min={1} max={5} value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value)} /></label>
            <div className="rv-calculator-result">{sleepScore}</div>
          </>
        )}

        {tab === "longevity" && (
          <>
            <h3>Longevity Risk Assessment</h3>
            <label>Do you smoke? (0=no, 1=yes) <input type="number" min={0} max={1} value={smoke} onChange={(e) => setSmoke(e.target.value)} /></label>
            <label>Activity days/week (0–7) <input type="number" min={0} max={7} value={activity} onChange={(e) => setActivity(e.target.value)} /></label>
            <label>Recent labs within 12 mo? (1=yes, 0=no) <input type="number" min={0} max={1} value={labs} onChange={(e) => setLabs(e.target.value)} /></label>
            <div className="rv-calculator-result">{riskLabel}</div>
          </>
        )}

        <a href="/start" className="btn btn-primary rv-calculator-cta">Schedule a Consultation →</a>
      </div>
    </div>
  );
}
