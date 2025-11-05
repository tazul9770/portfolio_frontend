import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-10 py-12">
  <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-10">

    {/* Services */}
    <nav>
      <h6 className="text-lg font-semibold mb-4">Services</h6>
      <ul className="space-y-2 text-gray-300">
        <li><a className="hover:text-red-400 cursor-pointer">Branding</a></li>
        <li><a className="hover:text-red-400 cursor-pointer">Design</a></li>
        <li><a className="hover:text-red-400 cursor-pointer">Marketing</a></li>
        <li><a className="hover:text-red-400 cursor-pointer">Advertisement</a></li>
      </ul>
    </nav>

    {/* Company */}
    <nav>
      <h6 className="text-lg font-semibold mb-4">Company</h6>
      <ul className="space-y-2 text-gray-300">
        <li><a className="hover:text-red-400 cursor-pointer">About Us</a></li>
        <li><a className="hover:text-red-400 cursor-pointer">Contact</a></li>
        <li><a className="hover:text-red-400 cursor-pointer">Jobs</a></li>
        <li><a className="hover:text-red-400 cursor-pointer">Press Kit</a></li>
      </ul>
    </nav>

    {/* Social Media */}
    <nav>
      <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
      <div className="flex space-x-6">

        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
          <svg fill="currentColor" width="28" height="28" viewBox="0 0 24 24">
            <path d="M9 8H6v4h3v12h5V12h3.6l.4-4H14V6.7C14 5.7 14.2 5 15.5 5h2.5V1h-3.2C11.6 1 9 3 9 6.3V8z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
          <svg fill="currentColor" width="28" height="28" viewBox="0 0 24 24">
            <path d="M4.98 3.5C3.87 3.5 3 4.37 3 5.48c0 1.09.87 1.98 1.98 1.98h.02C6.1 7.46 7 6.57 7 5.48 7 4.37 6.1 3.5 4.98 3.5zM3.5 21h3V9h-3v12zM14.5 9c-2.33 0-3.5 1.23-3.5 1.23V9h-3v12h3v-6.5c0-1.72.59-2.5 2.06-2.5 1.41 0 1.94 1.06 1.94 2.5V21h3v-6.98C18 10.73 16.41 9 14.5 9z"/>
          </svg>
        </a>

      </div>
    </nav>

  </div>

  <div className="text-center text-gray-500 mt-10 text-sm">
    © {new Date().getFullYear()} My Portfolio — All Rights Reserved.
  </div>
</footer>

    );
};

export default Footer;