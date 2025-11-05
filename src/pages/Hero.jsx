import myImage from "../assets/tazul.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0b] to-[#151515] text-white py-20 px-6 md:px-24 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-600 blur-[130px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400 blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-red-400 font-medium tracking-widest uppercase">
            Welcome to My Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
            Hello, I'm <span className="text-red-500">Tazul</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mt-2">
            Software Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
            I am a Software Developer with a strong focus on developing scalable, modern, and high-performance applications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50">
              Hire Me
            </button>
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              My Resume
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-pulse"></div>
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
