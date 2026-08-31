import { brandConfig } from "@/brand.config";

export default function ComplianceDisclaimer() {
  return (
    <section className="rv-compliance" aria-label="Important disclosures">
      <div className="container">
        <div className="rv-compliance__grid">
          <div className="rv-compliance__block">
            <h3>Clinical disclaimer</h3>
            <p>
              Treatment is never guaranteed. A licensed clinician reviews your intake and may decline
              treatment. Availability varies by state, medical history, and clinician judgment.
            </p>
          </div>
          <div className="rv-compliance__block">
            <h3>Purchase &amp; prescriptions</h3>
            <p>
              Purchasing a program does not guarantee that a prescription will be issued. Compounded
              products may be offered where clinically appropriate and legally permitted.
            </p>
          </div>
          <div className="rv-compliance__block">
            <h3>Emergency care</h3>
            <p>
              Reform Vital does not provide emergency medical care. Call 911 or go to the nearest
              emergency department for urgent symptoms.
            </p>
          </div>
        </div>
        <p className="rv-compliance__fine">{brandConfig.footer.disclaimer}</p>
      </div>
    </section>
  );
}
