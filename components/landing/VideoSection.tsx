export function VideoSection() {
  return (
    <section className="section-pad" id="video">
      <div className="wrap center">
        <span className="eyebrow">
          See it in 40 seconds
        </span>
        <h2 className="h-sec">Watch how Payo works</h2>
        <p className="sub-sec">Watch how Payo works and see how easy splitting bills becomes</p>
      </div>
      <div className="wrap">
        <div className="video-panel">
          <div className="video-overlay">
            <button className="play-btn" aria-label="Play explainer (coming soon)">
              <i className="ph-fill ph-play" />
            </button>
            <span className="vcap">
              <i className="ph ph-film-slate" /> Explainer animation · coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
