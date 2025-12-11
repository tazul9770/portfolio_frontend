import myImage from "../assets/tazul.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1a2a] to-[#0f2538] text-white py-24 px-6 md:px-24 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-cyan-400 tracking-widest uppercase font-semibold">
            Welcome to My Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight">
            Hi, I'm <span className="text-cyan-300">Tazul</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mt-2">
            Software Developer
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            I specialize in building clean, scalable, and high-performance applications with modern technologies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://docs.google.com/document/d/1wKg9RKyLtdNKm4FgYsruA3rE6G0gseoQAuoNWvA5zg4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-300 animate-pulse"></div>

            <img
              src={myImage}
              alt="Portfolio Headshot"
              className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
