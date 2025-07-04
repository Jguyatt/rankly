import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-6 px-4 pointer-events-none" style={{ position: 'fixed', top: '32px', left: 0, zIndex: 50 }}>
      <div className="w-full max-w-7xl flex items-center justify-between bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-xl pointer-events-auto">
        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold text-white tracking-wide ml-6 my-2">rankly360</a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold text-white">
          <li><a href="#services" className="hover:text-primary-500 transition">Services</a></li>
          <li><a href="#workflow" className="hover:text-primary-500 transition">Workflow</a></li>
          <li><a href="#case-study" className="hover:text-primary-500 transition">Case Studies</a></li>
          <li><a href="#about" className="hover:text-primary-500 transition">About</a></li>
        </ul>
        {/* CTA Button */}
        <a href="https://calendly.com/ranklyai/30min?month=2025-07" className="ml-6 border-2 border-primary-500 text-white font-bold px-6 py-2 rounded-full hover:bg-primary-500 hover:text-black transition text-base whitespace-nowrap mr-6 my-2">
          Book a Free Consultation
        </a>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-4 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-7 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center py-6 md:hidden z-50 rounded-b-2xl shadow-xl">
            <ul className="flex flex-col space-y-6 text-lg font-semibold text-white">
              <li><a href="#services" className="hover:text-primary-500 transition" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#workflow" className="hover:text-primary-500 transition" onClick={() => setMenuOpen(false)}>Workflow</a></li>
              <li><a href="#case-study" className="hover:text-primary-500 transition" onClick={() => setMenuOpen(false)}>Case Studies</a></li>
              <li><a href="#about" className="hover:text-primary-500 transition" onClick={() => setMenuOpen(false)}>About</a></li>
              <li>
                <a href="#consultation" className="border-2 border-primary-500 text-white font-bold px-6 py-2 rounded-full hover:bg-primary-500 hover:text-black transition text-base block text-center mt-2" onClick={() => setMenuOpen(false)}>
                  Book a Free Consultation
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 