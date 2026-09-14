"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

const SURVEY_URLS = {
  en: "https://forms.gle/fPTWeVQzhCLsxVyz8",
  nl: "https://forms.gle/TbgJGwDeEkJZs4po8",
};

export function SurveyLink({ variant = "band" }: { variant?: "band" | "plain" }) {
  const [clicked, setClicked] = useState(false);
  const { t, locale } = useLanguage();

  return (
    <div className={`survey-link center ${variant}`}>
      <a
        href={SURVEY_URLS[locale]}
        target="_blank"
        rel="noopener noreferrer"
        className="survey-pill"
        onClick={() => setClicked(true)}
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
