const EducationSection = () => {
  const educationData = [
    {
      level: "SSC",
      year: "2018",
      institution: "Nilakhia Govt Primary School",
      gpa: "4.06",
      subject: "Humanities",
      details: "Completed secondary education with strong academic performance."
    },
    {
      level: "HSC",
      year: "2020",
      institution: "Bokshigonj Govt K.U College",
      gpa: "4.33",
      subject: "Humanities",
      details: "Focused on social science and humanities studies."
    },
    {
      level: "Honors",
      year: "2022 – Present",
      institution: "Sherpur Govt College",
      gpa: "Ongoing",
      subject: "Economics",
      note: "Final Year",
      details: "Currently completing undergraduate studies with a focus on economics and data analysis."
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f2538] to-[#0a1a2a] text-gray-300 py-28 px-6 md:px-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education <span className="text-cyan-300">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A summary of my academic background, qualifications, and ongoing studies.
          </p>
        </div>

        {/* Timeline Style Cards */}
        <div className="relative space-y-10 border-l border-cyan-400/30 pl-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-[#112533]/70 backdrop-blur border border-cyan-400/30 rounded-xl p-7 shadow-lg hover:shadow-cyan-400/20 transition duration-300"
            >
              {/* Dot */}
              <span className="absolute -left-[13px] top-8 w-6 h-6 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/40"></span>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-cyan-300">
                  {edu.level}
                </h3>
                <span className="text-gray-400 text-sm">{edu.year}</span>
              </div>

              {/* Institution */}
              <p className="text-gray-200 text-lg font-medium mb-2">
                {edu.institution}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <p className="text-gray-400">Subject</p>
                  <p className="text-gray-200">{edu.subject}</p>
                </div>
                <div>
                  <p className="text-gray-400">GPA</p>
                  <p className="text-gray-200">{edu.gpa}</p>
                </div>
                {edu.note && (
                  <div>
                    <p className="text-gray-400">Status</p>
                    <p className="text-cyan-300">{edu.note}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
