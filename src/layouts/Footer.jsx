import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-14 pb-6 shadow-2xl">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Tazul <span className="text-cyan-400">Islam</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Frontend Developer passionate about building modern, responsive,
            and user-friendly web applications.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
          <div className="flex gap-4">
            {[ 
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaGithub />, link: "https://github.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white
                hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Tazul Islam. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
