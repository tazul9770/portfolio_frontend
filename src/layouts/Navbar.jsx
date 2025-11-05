import { Menu, X } from 'lucide-react'; // Lucide icons
import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121212] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Tazul Islam</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="" className="hover:text-red-500 transition">Home</Link></li>
          <li><Link to="" className="hover:text-red-500 transition">About</Link></li>
          <li><a href="#projects" className="hover:text-red-500 transition">Projects</a></li>
          <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg animate-fade-in">
          <li><a href="#home" className="block hover:text-red-500">Home</a></li>
          <li><a href="#about" className="block hover:text-red-500">About</a></li>
          <li><a href="#projects" className="block hover:text-red-500">Projects</a></li>
          <li><a href="#contact" className="block hover:text-red-500">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
