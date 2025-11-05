import axios from "axios";
import { useEffect } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React",
  "Django",
  "GitHub",
  "MySQL",
];

const Skill = () => {

  useEffect(() => {
    axios.get('https://portfolio-navy-pi-28.vercel.app/api/v1/projects/')
    .then(res => {
      console.log(res.data);
    })
  }, [])

  return (
    <section className="bg-[#0e0e0e] text-white py-16 px-6 md:px-20">
      <h2 className="text-center text-4xl font-extrabold mb-12 tracking-wide">
        My <span className="text-red-500">Skills</span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center justify-center py-4 px-6 rounded-xl bg-[#171717] border border-[#2b2b2b] shadow-lg hover:shadow-red-500/40 hover:border-red-500 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg font-semibold group-hover:text-red-500 transition">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
