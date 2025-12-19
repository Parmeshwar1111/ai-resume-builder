import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaComments,
  FaClock,
  FaUserTie,
} from "react-icons/fa";

const faqs = [
  {
    q: "Is my resume data safe?",
    a: "Yes. Your resume data is processed securely and is not shared with third parties.",
  },
  {
    q: "Can I edit my resume after generating it?",
    a: "Absolutely. You can edit any section, switch templates, and re-download anytime.",
  },
  {
    q: "Are the resumes ATS-friendly?",
    a: "Yes. All templates are designed following real ATS parsing standards.",
  },
  {
    q: "Do you support freshers and experienced professionals?",
    a: "Yes. Our templates and AI adapt for freshers, students, and experienced candidates.",
  },
  {
    q: "Is this service free?",
    a: "You can generate resumes for free. Advanced features may be added later.",
  },
  {
    q: "How fast will I get support?",
    a: "We usually respond within 24 hours on working days.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we simulate form submit (you can wire to backend later)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="bg-base-100 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">Questions? Support? We’re here to help — reach out below.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 bg-base-200 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="text-gray-600 mb-6">Support via email, phone or our quick form below.</p>

            <div className="space-y-4">
              <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-xl text-primary mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:Parmeshwarwakde1@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    Parmeshwarwakde1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="text-xl text-secondary mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a
                    href="tel:+919673650267"
                    className="text-blue-600 hover:underline"
                  >
                    +91 96736 50267
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl text-accent mt-1" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-600">Mumbai, India</div>
                </div>
              </div>
                 <div className="flex items-start gap-3">
                <FaClock className="text-xl text-success mt-1" />
                <div>
                  <div className="font-semibold">Support Hours</div>
                  <div className="text-gray-600">
                    Mon – Fri · 10:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 bg-base-200 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4">Send a message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="input input-bordered w-full" />
              <input name="email" placeholder="Your email" value={form.email} onChange={handleChange} className="input input-bordered w-full" />
              <textarea name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} className="textarea textarea-bordered w-full" />
              <button className="btn btn-primary w-full">{submitted ? "Sent ✓" : "Send Message"}</button>
            </form>
          </motion.div>
        </div>

       {/* FAQ Accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="p-4 bg-base-200 rounded-lg border border-gray-200">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Floating chat button */}
        <div className="fixed right-6 bottom-6">
          <button className="btn btn-primary btn-circle">
            <FaComments />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;
