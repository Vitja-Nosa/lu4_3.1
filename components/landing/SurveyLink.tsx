"use client";

import { useState } from "react";

export function SurveyLink() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="survey-link center">
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setClicked(true);
        }}
      >
        {clicked ? (
          <>
            Survey link coming soon — thanks for the interest! <i className="ph ph-heart" />
          </>
        ) : (
          <>
            Got 2 minutes? Help shape Payyo — take the survey <i className="ph ph-arrow-right" />
          </>
        )}
      </a>
    </div>
  );
}
