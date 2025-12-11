import { Menu, X } from 'lucide-react'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121212] text-white px-8 py-6 shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Tazul Islam</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg items-center">
          <li><Link to="/projects" className="hover:text-red-500 transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg">
          <li><a href="/projects" className="block hover:text-red-500">Projects</a></li>
          <li><a href="/contact" className="block hover:text-red-500">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
