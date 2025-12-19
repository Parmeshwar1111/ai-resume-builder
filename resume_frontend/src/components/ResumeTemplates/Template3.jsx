import React from "react";

const Template3 = ({ data }) => {
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
      `http://localhost:5001/generate-pdf?url=${encodeURIComponent(
        resumeUrl
      )}`,
      "_blank"
    );
  };

  return (
    <>
      {/* 🔥 PRINT-SAFE GRID LAYOUT */}
      <div
        className="resume-content max-w-6xl mx-auto border rounded-lg overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
          pageBreakInside: "avoid",
          breakInside: "avoid",
        }}
      >
        {/* LEFT SIDEBAR */}
        <div
          className="bg-blue-800 text-white p-6"
          style={{
            pageBreakInside: "avoid",
            breakInside: "avoid",
          }}
        >
          <h1 className="text-2xl font-bold mb-2">
            {data?.personalInformation?.fullName}
          </h1>

          <p className="text-sm">{data?.personalInformation?.email}</p>
          <p className="text-sm">{data?.personalInformation?.phoneNumber}</p>
          <p className="text-sm mb-4">
            {data?.personalInformation?.location}
          </p>

          {/* SKILLS */}
          {data?.skills?.length > 0 && (
            <>
              <h2 className="font-semibold mt-4 border-b pb-1">
                Skills
              </h2>
              <ul className="mt-2 space-y-1 text-sm">
                {data.skills.map((s, i) => (
                  <li key={i}>• {s.title}</li>
                ))}
              </ul>
            </>
          )}

          {/* LANGUAGES */}
          {data?.languages?.length > 0 && (
            <>
              <h2 className="font-semibold mt-4 border-b pb-1">
                Languages
              </h2>
              <ul className="mt-2 space-y-1 text-sm">
                {data.languages.map((l, i) => (
                  <li key={i}>• {l.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="p-6 bg-white"
          style={{
            pageBreakInside: "avoid",
            breakInside: "avoid",
          }}
        >
          {/* SUMMARY */}
          <h2 className="text-xl font-bold text-blue-700">
            Professional Summary
          </h2>
          <p className="mb-4">{data?.summary}</p>

          {/* EXPERIENCE */}
          {data?.experience?.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-blue-700 mt-4">
                Experience
              </h2>
              {data.experience.map((e, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">
                    {e.jobTitle} – {e.company}
                  </p>
                  <p className="text-sm text-gray-600">
                    {e.duration}
                  </p>
                  <p>{e.responsibility}</p>
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
                <p key={i}>
                  <strong>{e.degree}</strong> – {e.university} (
                  {e.graduationYear})
                </p>
              ))}
            </>
          )}

          {/* PROJECTS */}
          {data?.projects?.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-blue-700 mt-4">
                Projects
              </h2>
              {data.projects.map((p, i) => (
                <div key={i} className="mb-2">
                  <p className="font-semibold">{p.title}</p>
                  <p>{p.description}</p>
                </div>
              ))}
            </>
          )}

          {/* INTERESTS */}
          {data?.interests?.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-blue-700 mt-4">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.interests.map((i, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {i.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div id="no-print" className="flex justify-center mt-6">
        <button onClick={handleDownload} className="btn btn-primary">
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Template3;
