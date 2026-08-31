import { brandConfig } from "@/brand.config";

export default function ScriptfulSafety() {
  return (
    <section className="rv-script-safety" data-animate="rise">
      <div className="container">
        <div className="rv-script-safety__head">
          <p className="rv-script-eyebrow">Safety &amp; eligibility</p>
          <h2>Important information before you start</h2>
          <p>
            Reform Vital programs require licensed provider review. Read these statements carefully
            before selecting a program.
          </p>
        </div>
        <div className="rv-script-safety__grid">
          {brandConfig.safetyStatements.map((statement) => (
            <article key={statement} className="rv-script-safety__card">
              <span aria-hidden>✓</span>
              <p>{statement}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
