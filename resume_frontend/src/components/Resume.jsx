import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


import TemplateSelector from "./ResumeTemplates/TemplateSelector";
import Template1 from "./ResumeTemplates/Template1";
import Template2 from "./ResumeTemplates/Template2";
import Template3 from "./ResumeTemplates/Template3";

const Resume = ({ data: propData }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isPrintMode = location.pathname === "/resume/print";

  const [template, setTemplate] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // LOAD DATA & TEMPLATE
  // ===============================
  useEffect(() => {
    console.log("📄 Resume loaded on:", location.pathname);

    const params = new URLSearchParams(location.search);

    // 🔹 PRINT MODE (Puppeteer)
    if (isPrintMode) {
      const templateFromUrl = Number(params.get("template")) || 1;
      const dataFromUrl = params.get("data");

      setTemplate(templateFromUrl);

      if (dataFromUrl) {
        try {
          const parsedData = JSON.parse(decodeURIComponent(dataFromUrl));
          setData(parsedData);
          setLoading(false);
          return;
        } catch (error) {
          console.error("❌ Failed to parse resume data", error);
        }
      }
    }

    // 🔹 PREVIEW MODE (Props)
    if (propData) {
      setData(propData);
      setTemplate(Number(localStorage.getItem("resumeTemplate")) || 1);
      setLoading(false);
      return;
    }

    // 🔹 PREVIEW MODE (LocalStorage)
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
        setTemplate(Number(localStorage.getItem("resumeTemplate")) || 1);
        setLoading(false);
        return;
      } catch (error) {
        console.error("❌ Invalid resume data", error);
      }
    }

    console.warn("⚠ No resume data found");
    setLoading(false);
  }, [location.pathname, location.search, propData, isPrintMode]);

  // ===============================
  // SIGNAL PUPPETEER
  // ===============================
  useEffect(() => {
    if (data && isPrintMode) {
      requestAnimationFrame(() => {
        document.body.setAttribute("data-resume-ready", "true");
        console.log("✅ Resume rendered, Puppeteer notified");
      });
    }
  }, [data, template, isPrintMode]);

  // ===============================
  // LOADING STATE
  // ===============================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading resume...
      </div>
    );
  }

  // ===============================
  // NO DATA STATE
  // ===============================
  if (!data) {
    if (isPrintMode) {
      return <div id="print-area" />;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-red-500 text-xl">Resume data not found</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/generate-resume")}
        >
          Generate Resume
        </button>
      </div>
    );
  }

  // ===============================
  // UI     
  // ===============================
  return (
    <div>
      {!isPrintMode && (
        <TemplateSelector
          template={template}
          setTemplate={(t) => {
            setTemplate(t);
            localStorage.setItem("resumeTemplate", t);
          }}
        />
      )}

      <div id="print-area" className="max-w-6xl mx-auto">
        {template === 1 && <Template1 data={data} />}
        {template === 2 && <Template2 data={data} />}
        {template === 3 && <Template3 data={data} />}
      </div>

      {!isPrintMode && (
        <div className="flex justify-center gap-3 mt-6">
          <button
            className="btn btn-success"
            onClick={() => navigate("/generate-resume?edit=true")}
          >
            Edit
          </button>

          <button
            className="btn btn-accent"
            onClick={() => {
              localStorage.removeItem("resumeData");
              localStorage.removeItem("resumeTemplate");
              navigate("/generate-resume");
            }}
          >
            Generate Another
          </button>
        </div>
      )}
    </div>
  );
};

export default Resume;
