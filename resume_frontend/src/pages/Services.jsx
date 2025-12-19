import React from "react";
import { motion } from "framer-motion";
import {
  FaMagic,
  FaFilePdf,
  FaCheckCircle,
  FaBolt,
  FaTools,
} from "react-icons/fa";

/* Resume template previews (images must be in /public) */
const templates = [
  { id: "modern", title: "Modern", src: "/resume1.png" },
  { id: "minimal", title: "Minimal", src: "/resume2.png" },
  { id: "professional", title: "Professional", src: "/resume3.png" },
];

const features = [
  {
    title: "AI Resume Generator",
    desc: "Auto-generate a polished resume in seconds using smart AI prompts.",
    icon: <FaMagic />,
  },
  {
    title: "ATS Optimization",
    desc: "Structured to pass real applicant tracking systems used by recruiters.",
    icon: <FaFilePdf />,
  },
  {
    title: "Skill Enhancer",
    desc: "Auto-suggests relevant skills and role-specific keywords.",
    icon: <FaBolt />,
  },
  {
    title: "Multiple Templates",
    desc: "Choose professional templates for freshers and experienced candidates.",
    icon: <FaTools />,
  },
  {
    title: "Easy Edit",
    desc: "Edit any section easily with a clean form-based interface.",
    icon: <FaCheckCircle />,
  },
];

const Services = () => {
  return (
    <div className="bg-base-100 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl font-bold mb-2">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build a job-winning, recruiter-approved resume.
          </p>
        </motion.div>

        {/* ===== Features ===== */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 bg-base-200 rounded-xl border border-gray-200"
            >
              <div className="text-3xl text-primary mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* ===== Template Preview Gallery ===== */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-2">Resume Templates</h2>
          <p className="text-gray-600 mb-8">
            Professionally designed templates inspired by real hiring standards.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-base-200 rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg"
              >
                {/* A4 Resume Preview */}
                <div className="relative w-full aspect-[3/4.2] bg-gray-100 overflow-hidden">
                  <img
                    src={t.src}
                    alt={t.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                 
                </div>

                {/* Template Info */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{t.title}</h3>
                
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== Service Highlights ===== */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Service Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-base-200 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold">Job-Specific Resumes</h3>
              <p className="text-gray-600">
                Optimize resumes for specific roles, industries, and experience levels.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold">Privacy-First</h3>
              <p className="text-gray-600">
                Your data stays on your device. We don’t store personal content.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold">Flexible Exports</h3>
              <p className="text-gray-600">
                Export resumes as PDF, PNG, or copy content instantly.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;
