import React, { useEffect, useState } from "react";
import Resume from "../components/Resume";
import { useSearchParams } from "react-router-dom";

const ResumePrint = () => {
  const [searchParams] = useSearchParams();

  const templateFromUrl =
    Number(searchParams.get("template")) || 1;

  const dataFromUrl = searchParams.get("data");

  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    try {
      if (dataFromUrl) {
        const parsed = JSON.parse(decodeURIComponent(dataFromUrl));
        setResumeData(parsed);
        console.log("✅ Resume data parsed for print");
      }
    } catch (e) {
      console.error("❌ Failed to parse resume data", e);
    }

    // Puppeteer signal
    document.body.removeAttribute("data-resume-ready");

    const timer = setTimeout(() => {
      document.body.setAttribute("data-resume-ready", "true");
      console.log("🖨 Print page ready with template:", templateFromUrl);
    }, 500);

    return () => clearTimeout(timer);
  }, [templateFromUrl, dataFromUrl]);

  return (
    <Resume
      data={resumeData}
      forceTemplate={templateFromUrl}
    />
  );
};

export default ResumePrint;
