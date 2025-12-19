import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // 🔐 If user is not logged in → redirect to login
  // If logged in → go to resume generator
  const handleGetStarted = () => {
    if (!user) navigate("/login");
    else navigate("/generate-resume");
  };

  return (
    <div className="bg-base-100">

      {/* ================= HERO SECTION =================== */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
              Create Your Perfect Resume with AI
            </h1>

            <p className="py-6 text-lg">
              Build a professional resume in minutes. Just describe yourself,  
              and our AI will do the rest!
            </p>

            {/* 🔥 PROTECTED Get Started Button */}
            <button onClick={handleGetStarted} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title">AI-Powered</h3>
                <p>
                  Our AI analyzes your input and generates a tailored resume for you.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="card-title">Multiple Templates</h3>
                <p>
                  Choose from a variety of professionally designed resume templates.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="card-title">Job-Specific Resumes</h3>
                <p>
                  Optimize your resume for specific job roles and industries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  &quot;This AI resume maker saved me so much time! My resume looks
                  professional and got me multiple interviews.&quot;
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">John Doe</h4>
                    <p>Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p>
                  &quot;I love the templates and the ease of use. Highly recommend
                  this tool to anyone looking for a job.&quot;
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jane Smith</h4>
                    <p>Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
        <div className="card bg-base-100 shadow-xl">
               <div className="card-body">
                 <p>
      &quot;The templates are clean and ATS-friendly. I was able to build my resume
      in minutes and confidently apply to companies.&quot;
    </p>
    <div className="flex items-center mt-4">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img
            src="https://randomuser.me/api/portraits/women/7.jpg"
            alt="User"
          />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-bold">Priya Sharma</h4>
        <p>Frontend Developer</p>
      </div>
    </div>
  </div>
</div>

{/* Testimonial 3 */}
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <p>
      &quot;As a fresher, I struggled with resume formatting. This tool guided me
      perfectly and helped me stand out in campus placements.&quot;
    </p>
    <div className="flex items-center mt-4">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="User"
          />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-bold">Rahul Verma</h4>
        <p>Computer Science Graduate</p>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Resume?
          </h2>
          <p className="mb-8 text-lg">
            Join thousands of users who have landed their dream jobs with our AI
            resume maker.
          </p>

          {/* SAME PROTECTED ACTION */}
          <button onClick={handleGetStarted} className="btn btn-primary">
            Get Started Now
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
     <footer className="bg-base-200 text-base-content mt-20">
  <div className="container mx-auto px-6 py-12">

    {/* TOP GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* BRAND */}
      <div>
        <h2 className="text-xl font-bold text-primary">
          AI Resume Builder
        </h2>
        <p className="mt-3 text-sm leading-relaxed">
          Build ATS-friendly, professional resumes using AI.
          Designed for students, freshers, and professionals.
        </p>
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} AI Resume Builder
        </p>
      </div>

      {/* PRODUCT */}
      <div>
        <h4 className="footer-title">Product</h4>
        <ul className="space-y-2 text-sm">
          <li><a className="link link-hover">Resume Builder</a></li>
          <li><a className="link link-hover">AI Resume Generator</a></li>
          <li><a className="link link-hover">Resume Templates</a></li>
          <li><a className="link link-hover">PDF Download</a></li>
        </ul>
      </div>

      {/* RESOURCES */}
      <div>
        <h4 className="footer-title">Resources</h4>
        <ul className="space-y-2 text-sm">
          <li><a className="link link-hover">Resume Tips</a></li>
          <li><a className="link link-hover">Career Guide</a></li>
          <li><a className="link link-hover">Interview Preparation</a></li>
          <li><a className="link link-hover">FAQs</a></li>
        </ul>
      </div>

      {/* LEGAL */}
      <div>
        <h4 className="footer-title">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a className="link link-hover">Privacy Policy</a></li>
          <li><a className="link link-hover">Terms & Conditions</a></li>
          <li><a className="link link-hover">Data Protection</a></li>
          <li><a className="link link-hover">Cookie Policy</a></li>
        </ul>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="divider my-8"></div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
      <p>
        Built with ❤️ for job seekers | Powered by AI
      </p>

      <div className="flex gap-4">
        <a className="link link-hover">LinkedIn</a>
        <a className="link link-hover">GitHub</a>
        <a className="link link-hover">Contact</a>
      </div>
    </div>

  </div>
</footer>

    </div>
  );
};

export default LandingPage;
