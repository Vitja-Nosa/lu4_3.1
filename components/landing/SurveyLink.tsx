"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

export function SurveyLink({ variant = "band" }: { variant?: "band" | "plain" }) {
  const [clicked, setClicked] = useState(false);
  const { t } = useLanguage();

  return (
    <div className={`survey-link center ${variant}`}>
      <a
        href="#"
        className="survey-pill"
        onClick={(event) => {
          event.preventDefault();
          setClicked(true);
        }}
      >
        {clicked ? (
          <>
            {t.survey.thanks} <i className="ph ph-heart" />
          </>
        ) : (
          <>
            <i className="ph ph-clipboard-text" />
            {t.survey.cta}
            <i className="ph ph-arrow-right" />
          </>
        )}
      </a>
    </div>
  );
}
