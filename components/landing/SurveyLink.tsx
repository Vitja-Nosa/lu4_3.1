"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

export function SurveyLink() {
  const [clicked, setClicked] = useState(false);
  const { t } = useLanguage();

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
            {t.survey.thanks} <i className="ph ph-heart" />
          </>
        ) : (
          <>
            {t.survey.prompt} <i className="ph ph-arrow-right" />
          </>
        )}
      </a>
    </div>
  );
}
