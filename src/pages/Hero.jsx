import { Link } from "react-router-dom";
import myImage from "../assets/tazul.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#081826] via-[#0a1a2a] to-[#0f2538] text-white py-28 px-6 md:px-24 overflow-hidden">

      {/* Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/30 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 blur-[200px]" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-20">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">

          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-400/40 text-cyan-300 text-sm tracking-widest">
            👋 Welcome to My Portfolio
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Tazul
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mt-3">
            Full-Stack Software Developer
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I design and develop clean, scalable, and high-performance web & mobile
            applications using modern technologies.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {['React', 'Django', 'REST API'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://docs.google.com/document/d/1wKg9RKyLtdNKm4FgYsruA3rE6G0gseoQAuoNWvA5zg4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-cyan-400 text-gray-900 font-semibold hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-400/30"
            >
              View Resume
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-500 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full">

            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-sm opacity-70" />
            <div className="absolute inset-[3px] rounded-full bg-[#0a1a2a]" />

            <img
              src={myImage}
              alt="Tazul Headshot"
              className="relative w-full h-full object-cover rounded-full transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
