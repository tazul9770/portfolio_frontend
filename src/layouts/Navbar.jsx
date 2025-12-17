import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:text-cyan-400 transition duration-300"
        >
          Tazul <span className="text-cyan-400">Islam</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {["Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-700 transition"
        >
          {open ? <X className="text-cyan-400" /> : <Menu className="text-cyan-400" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 bg-gray-800 space-y-4 text-lg">
          <Link onClick={() => setOpen(false)} to="/projects" className="block hover:text-cyan-400">
            Projects
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-cyan-400">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
