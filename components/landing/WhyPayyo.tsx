import { oldWayItems, newWayItems, type ComparisonItem } from "@/data/landing-content";

function ComparisonList({ items }: { items: ComparisonItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.text}>
          {item.icon ? <i className={item.icon} /> : null}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export function WhyPayyo() {
  return (
    <section className="section-pad" id="why">
      <div className="wrap center">
        <span className="eyebrow">
          Why Payyo
        </span>
        <h2 className="h-sec">The end of &ldquo;just send me a Tikkie&rdquo;</h2>
        <p className="sub-sec">The old way is slow and inconvenient. Payo solves it on the spot.</p>
      </div>
      <div className="wrap">
        <div className="ba-grid">
          <div className="ba old">
            <span className="tag">
              <i className="ph ph-clock-countdown" /> The old way
            </span>
            <ComparisonList items={oldWayItems} />
          </div>
          <div className="ba new">
            <span className="tag">
              <i className="ph-fill ph-check-circle" /> With Payyo
            </span>
            <ComparisonList items={newWayItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
