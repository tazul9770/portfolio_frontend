import { Menu, X } from 'lucide-react'; 
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SECRET_PASSWORD = "Tazul9770@sopna";

  const handleDashboardClick = () => {
    setShowPassword(true);
  };

  const handlePasswordSubmit = () => {
    if (password === SECRET_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/dashboard");
    } else {
      alert("Incorrect Password!");
      setPassword("");
    }
  };

  return (
    <nav className="bg-[#121212] text-white px-6 py-4 shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Tazul Islam</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg items-center">
          {/* Dashboard */}
          <li>
            <button onClick={handleDashboardClick} className="hover:text-red-500 transition cursor-pointer">
              Dashboard
            </button>
          </li>
          <li><Link to="/projects" className="hover:text-red-500 transition">Projects</Link></li>
          <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>

          {/* Password Input inside Navbar */}
          {showPassword && (
            <li className="flex items-center space-x-2">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handlePasswordSubmit}
                className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 transition cursor-pointer"
              >
                Go
              </button>
            </li>
          )}
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
          <li>
            <button onClick={handleDashboardClick} className="block hover:text-red-500">
              Dashboard
            </button>
          </li>
          <li><a href="/projects" className="block hover:text-red-500">Projects</a></li>
          <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
          <li><a href="/contact" className="block hover:text-red-500">Contact</a></li>

          {/* Mobile password input */}
          {showPassword && (
            <li className="flex flex-col space-y-2 mt-2">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handlePasswordSubmit}
                className="bg-red-500 py-2 rounded-md hover:bg-red-700 transition cursor-pointer"
              >
                Go
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
