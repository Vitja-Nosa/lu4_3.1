import { features } from "@/data/landing-content";

export function Features() {
  return (
    <section className="section-pad" id="features">
      <div className="wrap center">
        <span className="eyebrow">
          Built different
        </span>
        <h2 className="h-sec">Fast where it counts, fun where it doesn&rsquo;t</h2>
      </div>
      <div className="wrap">
        <div className="feat-grid">
          {features.map((feature) => (
            <div className="feat" key={feature.title}>
              <div className="ic-bubble" style={{ background: feature.iconBg, color: feature.iconColor }}>
                <i className={feature.icon} />
              </div>
              {feature.pillTag ? (
                <span
                  className="pill-tag"
                  style={{ background: feature.iconBg, color: feature.iconColor }}
                >
                  {feature.pillTag}
                </span>
              ) : null}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
