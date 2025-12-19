import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaClock, FaThumbsUp, FaUsers } from "react-icons/fa";

const stats = [
  { label: "Resumes Generated", value: "12,450+", icon: <FaUsers /> },
  { label: "Avg. Rating", value: "4.8 / 5", icon: <FaThumbsUp /> },
  { label: "Interviews Booked", value: "2,300+", icon: <FaClock /> },
  { label: "Countries Reached", value: "18+", icon: <FaBrain /> },
];

const steps = [
  {
    step: "1",
    title: "Describe Yourself",
    desc: "Enter your skills, experience, and the role you are applying for.",
  },
  {
    step: "2",
    title: "AI Builds Your Resume",
    desc: "Our AI generates a clean, ATS-friendly resume tailored to your role.",
  },
  {
    step: "3",
    title: "Customize & Download",
    desc: "Edit content, switch templates, and export a professional A4 PDF.",
  },
];

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">About Our AI Resume Builder</h1>
          <p className="text-lg text-gray-600">
            Create professional resumes in minutes with AI-powered templates,
            ATS optimization and full customization.
          </p>
        </motion.div>


        {/* ===== Problem → Solution → Result ===== */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-base-200 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">The Problem</h3>
              <p className="text-gray-600">
                Most resumes fail ATS screening because of poor structure,
                formatting issues, and missing role-specific keywords.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
              <p className="text-gray-600">
                Our AI analyzes your profile and job role to generate optimized,
                professional resumes that follow real hiring standards.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">The Result</h3>
              <p className="text-gray-600">
                More shortlists, more interview calls, and higher confidence
                while applying to jobs.
              </p>
            </div>
          </div>
        </section>

        {/* ===== How It Works ===== */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-base-200 rounded-lg border"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== Stats ===== */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-base-200 rounded-lg flex items-center gap-4 border"
              >
                <div className="text-3xl text-primary">{s.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-gray-500">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== Why Choose Us ===== */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-base-200 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Real ATS Logic</h3>
              <p className="text-gray-600">
                Built using real ATS parsing rules so your resume is readable by
                both machines and recruiters.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">
                Role-Specific Intelligence
              </h3>
              <p className="text-gray-600">
                AI adapts content for freshers, developers, analysts, and
                professionals — not generic resumes.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Complete Control</h3>
              <p className="text-gray-600">
                Fully editable resumes, multiple templates, and high-quality A4
                PDF exports anytime.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Who Is This For ===== */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Who Is This Platform For?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-base-200 rounded-lg border">
              <h4 className="font-semibold mb-2">Freshers</h4>
              <p className="text-gray-600">
                Build your first professional resume with confidence.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h4 className="font-semibold mb-2">Professionals</h4>
              <p className="text-gray-600">
                Upgrade resumes for job switches and promotions.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h4 className="font-semibold mb-2">Career Switchers</h4>
              <p className="text-gray-600">
                Highlight transferable skills with AI guidance.
              </p>
            </div>

            <div className="p-6 bg-base-200 rounded-lg border">
              <h4 className="font-semibold mb-2">Students</h4>
              <p className="text-gray-600">
                Create resumes for internships and campus placements.
              </p>
            </div>
          </div>
        </section>

       

      </div>
    </div>
  );
};

export default About;
