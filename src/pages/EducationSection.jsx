const EducationSection = () => {
  const educationData = [
    {
      level: "SSC",
      year: 2018,
      institution: "Nilakhia Govt Primary School",
      gpa: 4.06,
      subject: "Humanities",
    },
    {
      level: "HSC",
      year: 2020,
      institution: "Bokshigonj Govt K.U Collge",
      gpa: 4.33,
      subject: "Humanities",
    },
    {
      level: "Honors",
      year: 2026,
      institution: "Sherpur Govt Colleg",
      gpa: "Ongoing",
      subject: "Economics",
      note: "Final year",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f2538] to-[#0a1a2a] text-gray-300 py-24 px-6 md:px-20 overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-1 bg-cyan-400 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Education <span className="text-cyan-300">Background</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#112533]/60 border border-cyan-400/30 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-cyan-300">{edu.level}</h3>
                <span className="text-gray-400">{edu.year}</span>
              </div>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">Institution: </span> {edu.institution}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">Subject: </span> {edu.subject}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">GPA: </span> {edu.gpa}
              </p>
              {edu.note && <p className="text-gray-400 italic">{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
