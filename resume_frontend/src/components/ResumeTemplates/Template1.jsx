import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Template1 = ({ data }) => {
const handleDownload = () => {
  const template =
    Number(localStorage.getItem("resumeTemplate")) || 1;

  const resumeData = localStorage.getItem("resumeData");

  const resumeUrl =
    `${window.location.origin}/resume/print` +
    `?template=${template}` +
    `&data=${encodeURIComponent(resumeData)}`;

  console.log("🖨 Printing template:", template);
  console.log("🚨 PDF TARGET URL:", resumeUrl);

  window.open(
    `http://localhost:5001/generate-pdf?url=${encodeURIComponent(resumeUrl)}`,
    "_blank"
  );
};



  return (
    <>
      {/* ===================== */}
      {/* PRINTABLE RESUME */}
      {/* ===================== */}
      <div className="resume-content p-8 text-gray-800 font-sans">
        {/* HEADER */}
        <div className="text-center space-y-2 border-b pb-4 mb-6">
          <h1 className="text-4xl font-extrabold tracking-wide">
            {data?.personalInformation?.fullName}
          </h1>

          <p className="text-sm text-gray-500">
            {data?.personalInformation?.location}
          </p>

          <div className="flex justify-center gap-5 flex-wrap text-sm">
            {data?.personalInformation?.email && (
              <span className="flex items-center gap-1">
                <FaEnvelope /> {data.personalInformation.email}
              </span>
            )}
            {data?.personalInformation?.phoneNumber && (
              <span className="flex items-center gap-1">
                <FaPhone /> {data.personalInformation.phoneNumber}
              </span>
            )}
          </div>

          <div className="flex justify-center gap-5 mt-2 text-lg">
            {data?.personalInformation?.gitHub && (
              <a
                href={data.personalInformation.gitHub}
                className="hover:text-blue-600"
              >
                <FaGithub />
              </a>
            )}
            {data?.personalInformation?.linkedIn && (
              <a
                href={data.personalInformation.linkedIn}
                className="hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
            )}
            {data?.personalInformation?.portfolio && (
              <a
                href={data.personalInformation.portfolio}
                className="hover:text-blue-600"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        </div>

        {/* SUMMARY */}
        {data?.summary && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
              Professional Summary
            </h2>
            <p className="leading-relaxed">{data.summary}</p>
          </section>
        )}

        {/* SKILLS */}
        {data?.skills?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
              Skills
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 list-disc ml-5">
              {data.skills.map((s, i) => (
                <li key={i}>{s.title}</li>
              ))}
            </ul>
          </section>
        )}

        {/* EXPERIENCE */}
        {data?.experience?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-3">
              Experience
            </h2>
            {data.experience.map((e, i) => (
              <div key={i} className="mb-4">
                <p className="font-bold">
                  {e.jobTitle} – {e.company}
                </p>
                <p className="text-sm text-gray-600">
                  {e.location} | {e.duration}
                </p>
                <p className="mt-1">{e.responsibility}</p>
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {data?.education?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
              Education
            </h2>
            {data.education.map((e, i) => (
              <p key={i} className="mb-1">
                <strong>{e.degree}</strong> – {e.university} (
                {e.graduationYear})
              </p>
            ))}
          </section>
        )}

        {/* PROJECTS */}
        {data?.projects?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
              Projects
            </h2>
            {data.projects.map((p, i) => (
              <div key={i} className="mb-3">
                <p className="font-bold">{p.title}</p>
                <p>{p.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* CERTIFICATIONS */}
        {data?.certifications?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
              Certifications
            </h2>
            <ul className="list-disc ml-5">
              {data.certifications.map((c, i) => (
                <li key={i}>
                  {c.title} – {c.issuingOrganization} ({c.year})
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* LANGUAGES & INTERESTS */}
        <div className="grid grid-cols-2 gap-6">
          {data?.languages?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
                Languages
              </h2>
              <ul className="list-disc ml-5">
                {data.languages.map((l, i) => (
                  <li key={i}>{l.name}</li>
                ))}
              </ul>
            </section>
          )}

          {data?.interests?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-l-4 border-blue-600 pl-3 mb-2">
                Interests
              </h2>
              <ul className="list-disc ml-5">
                {data.interests.map((i, idx) => (
                  <li key={idx}>{i.name}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* ===================== */}
      {/* DOWNLOAD BUTTON */}
      {/* ===================== */}
      <div id="no-print" className="flex justify-center mt-8">
        <button onClick={handleDownload} className="btn btn-primary px-8">
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Template1;
