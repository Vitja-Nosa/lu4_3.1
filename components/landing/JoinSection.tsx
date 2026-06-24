import { SignupForm } from "./SignupForm";
import { SurveyLink } from "./SurveyLink";

export function JoinSection() {
  return (
    <section className="section-pad" id="join">
      <div className="wrap">
        <div className="cta-band" style={{ textAlign: "center" }}>
          <span className="eyebrow">
            Be first in line
          </span>
          <h2 className="h-sec center" style={{ marginTop: 16 }}>
            Stay up to date with Payo
          </h2>
          <p className="sub-sec center" style={{ marginBottom: 28 }}>
            Drop your email and we’ll ping you the day it goes live. No spam, just the launch.
          </p>

          <SignupForm />
          <SurveyLink />
        </div>
      </div>
    </section>
  );
}
