import { steps } from "@/data/landing-content";

export function HowItWorks() {
  return (
    <section className="section-pad" id="how">
      <div className="wrap center">
        <span className="eyebrow">
          How it works
        </span>
        <h2 className="h-sec">Four taps from receipt to settled</h2>
        <p className="sub-sec">No manual entry. No app switching. No mental math at brunch.</p>
      </div>
      <div className="wrap">
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="ic-bubble" style={{ background: step.iconBg, color: step.iconColor }}>
                  <i className={step.icon} />
                </div>
                <span className="num">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
