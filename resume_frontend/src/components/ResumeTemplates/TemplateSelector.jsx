
const TemplateSelector = ({ template, setTemplate }) => {
  const templates = [
    { id: 1, name: "Classic Template" },
    { id: 2, name: "Modern Blue" },
    { id: 3, name: "Sidebar Layout" },
  ];

  return (
    <div className="flex justify-center gap-3 my-4">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => setTemplate(t.id)}
          className={`btn ${
            template === t.id ? "btn-primary" : "btn-outline"
          }`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
