import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBrain, FaTrash, FaPaperPlane, FaPlusCircle } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { generateResume } from "../api/ResumeService";

const GenerateResume = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      personalInformation: {},
      summary: "",
      skills: [],
      experience: [],
      education: [],
      certifications: [],
      projects: [],
      languages: [],
      interests: [],
    },
  });

  const [showPromptInput, setShowPromptInput] = useState(true);
  const [showFormUI, setShowFormUI] = useState(false);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // ===============================
  // FIELD ARRAYS
  // ===============================
  const skillsFields = useFieldArray({ control, name: "skills" });
  const experienceFields = useFieldArray({ control, name: "experience" });
  const educationFields = useFieldArray({ control, name: "education" });
  const certificationsFields = useFieldArray({ control, name: "certifications" });
  const projectsFields = useFieldArray({ control, name: "projects" });
  const languagesFields = useFieldArray({ control, name: "languages" });
  const interestsFields = useFieldArray({ control, name: "interests" });

  // ===============================
  // EDIT MODE
  // ===============================
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("edit")) {
      const stored = localStorage.getItem("resumeData");
      if (stored) {
        const parsed = JSON.parse(stored);
        console.log("Edit Mode Data:", parsed);
        reset(parsed);
        setShowPromptInput(false);
        setShowFormUI(true);
      }
    }
  }, [location.search, reset]);

  // ===============================
  // PROMPT → BACKEND → FORM
  // ===============================
  const handleGenerate = async () => {
    console.log("Prompt:", description);

    try {
      setLoading(true);
      const response = await generateResume(description);
      console.log("Backend Response:", response);

      if (!response?.data) {
        toast.error("AI did not return resume data");
        return;
      }

      reset(response.data);
      localStorage.setItem("resumeData", JSON.stringify(response.data));

      toast.success("Resume Generated Successfully!");
      setShowPromptInput(false);
      setShowFormUI(true);
    } catch (error) {
      console.log(error);
      toast.error("Error Generating Resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  // ===============================
  // FORM → PREVIEW PAGE
  // ===============================
  const onSubmit = (formData) => {
    console.log("Final Form Data:", formData);
    localStorage.setItem("resumeData", JSON.stringify(formData));
    navigate("/resume/preview");
  };

  // ===============================
  // HELPERS
  // ===============================
  const renderInput = (name, label) => (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input {...register(name)} className="input input-bordered w-full" />
    </div>
  );

  const renderFieldArray = (fields, label, name, keys) => (
    <div className="form-control w-full mb-6">
      <h3 className="text-xl font-semibold mb-2">{label}</h3>

      {fields.fields.map((field, index) => (
        <div key={field.id} className="p-4 bg-base-100 rounded-lg mb-3">
          {keys.map((k) => (
            <div key={`${name}-${index}-${k}`}>
              {renderInput(`${name}.${index}.${k}`, k)}
            </div>
          ))}

          <button
            type="button"
            onClick={() => fields.remove(index)}
            className="btn btn-error btn-sm mt-2"
          >
            <FaTrash className="mr-1" /> Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          fields.append(keys.reduce((acc, k) => ({ ...acc, [k]: "" }), {}))
        }
        className="btn btn-secondary btn-sm"
      >
        <FaPlusCircle className="mr-1" /> Add {label}
      </button>
    </div>
  );

  // ===============================
  // UI
  // ===============================
  return (
    <div className="mt-5 p-10 flex flex-col items-center gap-5">
      {showPromptInput && (
        <div className="bg-base-200 shadow-lg rounded-lg p-10 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 flex confirm-center gap-2">
            <FaBrain /> AI Resume Description
          </h1>

          <textarea
            disabled={loading}
            className="textarea textarea-bordered w-full h-48 mb-6"
            placeholder="Type your description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            disabled={loading}
            onClick={handleGenerate}
            className="btn btn-primary w-full"
          >
            {loading && <span className="loading loading-spinner"></span>}
            <FaPaperPlane className="mr-2" /> Generate Resume
          </button>
        </div>
      )}

      {showFormUI && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-5xl p-6 space-y-6 bg-base-200 rounded-lg"
        >
          <h1 className="text-4xl font-bold text-center mb-6">
            <BiBook /> Resume Form
          </h1>

          {renderInput("personalInformation.fullName", "Full Name")}
          {renderInput("personalInformation.email", "Email")}
          {renderInput("personalInformation.phoneNumber", "Phone Number")}
          {renderInput("personalInformation.location", "Location")}

          <textarea
            {...register("summary")}
            className="textarea textarea-bordered w-full"
            rows={4}
            placeholder="Summary"
          />

          {renderFieldArray(skillsFields, "Skills", "skills", ["title"])}
          {renderFieldArray(experienceFields, "Experience", "experience", [
            "jobTitle",
            "company",
            "duration",
            "responsibility",
          ])}
          {renderFieldArray(educationFields, "Education", "education", [
            "degree",
            "university",
            "graduationYear",
          ])}
          {renderFieldArray(certificationsFields, "Certifications", "certifications", [
            "title",
            "issuingOrganization",
            "year",
          ])}
          {renderFieldArray(projectsFields, "Projects", "projects", [
            "title",
            "description",
          ])}
          {renderFieldArray(languagesFields, "Languages", "languages", ["name"])}
          {renderFieldArray(interestsFields, "Interests", "interests", ["name"])}

          <button type="submit" className="btn btn-success w-full">
            Preview Resume
          </button>
        </form>
      )}
    </div>
  );
};

export default GenerateResume;
