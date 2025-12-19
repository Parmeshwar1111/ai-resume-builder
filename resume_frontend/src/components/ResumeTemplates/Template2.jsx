import React from "react";

const Template2 = ({ data }) => {
  // ===============================
  // 🔹 DOWNLOAD HANDLER (FIXED)
  // ===============================
  const handleDownload = () => {
    // ✅ ALWAYS read selected template
    const template =
      Number(localStorage.getItem("resumeTemplate")) || 2;

    // ✅ ALWAYS stringify fresh data
    const resumeData = encodeURIComponent(
      JSON.stringify(data)
    );

    // ✅ CRITICAL: template + data passed via URL
    const resumeUrl =
      `${window.location.origin}/resume/print` +
      `?template=${template}` +
      `&data=${resumeData}`;

    console.log("🖨 Printing template:", template);
    console.log("🚨 PDF TARGET URL:", resumeUrl);

    window.open(
      `http://localhost:5001/generate-pdf?url=${encodeURIComponent(
        resumeUrl
      )}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ============================= */}
      {/* RESUME CONTENT */}
      {/* ============================= */}
      <div className="resume-content p-8 max-w-4xl mx-auto border-l-8 border-blue-600 bg-white shadow-md">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-blue-700">
          {data?.personalInformation?.fullName}
        </h1>

        <div className="text-sm text-gray-700 mt-1 space-y-1">
          <p>{data?.personalInformation?.email}</p>
          <p>{data?.personalInformation?.phoneNumber}</p>
          <p>{data?.personalInformation?.location}</p>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* SUMMARY */}
        {data?.summary && (
          <>
            <h2 className="text-xl font-bold text-blue-700">
              Professional Summary
            </h2>
            <p className="mt-1 text-gray-800">{data.summary}</p>
          </>
        )}

        {/* SKILLS */}
        {data?.skills?.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-blue-700 mt-4">
              Skills
            </h2>
            <ul className="list-disc ml-6 text-gray-800">
              {data.skills.map((s, i) => (
                <li key={i}>
                  {s.title}
                  {s.level && (
                    <span className="text-sm text-gray-500">
                      {" "}
                      ({s.level})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* EXPERIENCE */}
        {data?.experience?.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-blue-700 mt-4">
              Experience
            </h2>
            {data.experience.map((e, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold text-gray-900">
                  {e.jobTitle} – {e.company}
                </p>
                <p className="text-sm text-gray-600">
                  {e.location} | {e.duration}
                </p>
                <p className="text-gray-800">
                  {e.responsibility}
                </p>
              </div>
            ))}
          </>
        )}

        {/* EDUCATION */}
        {data?.education?.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-blue-700 mt-4">
              Education
            </h2>
            {data.education.map((e, i) => (
              <p key={i} className="text-gray-800">
                <strong>{e.degree}</strong> – {e.university} (
                {e.graduationYear})
              </p>
            ))}
          </>
        )}

        {/* CERTIFICATIONS */}
        {data?.certifications?.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-blue-700 mt-4">
              Certifications
            </h2>
            <ul className="list-disc ml-6 text-gray-800">
              {data.certifications.map((c, i) => (
                <li key={i}>
                  {c.title}
                  {c.issuingOrganization && (
                    <span className="text-sm text-gray-500">
                      {" "}
                      – {c.issuingOrganization}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* LANGUAGES */}
        {data?.languages?.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-blue-700 mt-4">
              Languages
            </h2>
            <ul className="list-disc ml-6 text-gray-800">
              {data.languages.map((l, i) => (
                <li key={i}>{l.name}</li>
              ))}
            </ul>
          </>
        )}

        {/* INTERESTS */}
        {data?.interests?.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-blue-700 mt-4">
              Interests
            </h2>
            <ul className="list-disc ml-6 text-gray-800">
              {data.interests.map((i, idx) => (
                <li key={idx}>{i.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* ============================= */}
      {/* DOWNLOAD BUTTON */}
      {/* ============================= */}
      <div id="no-print" className="flex justify-center mt-6">
        <button
          onClick={handleDownload}
          className="btn btn-primary"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Template2;
