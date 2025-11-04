import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu open/close

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-11 h-11 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-gray-400 transition">
            <img
              src="./images/salsabeel-2.png"
              alt="Salsabeel Ibrahim"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Salsabeel Ibrahim
          </h3>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-purple-600 cursor-pointer">
            Home
          </a>
          <a href="#about" className="hover:text-purple-600 cursor-pointer">
            About
          </a>
          <a href="#process" className="hover:text-purple-600 cursor-pointer">
            Process
          </a>
          <a href="#project" className="hover:text-purple-600 cursor-pointer">
            Projects
          </a>
          <a href="#services" className="hover:text-purple-600 cursor-pointer">
            Services
          </a>
          <a href="#blog" className="hover:text-purple-600 cursor-pointer">
            Blog
          </a>
          <li>
            <a
              href="#contact"
              className="bg-brand hover:bg-purple-700 text-white px-4 py-1.5 rounded-md transition cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-gray-800 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          <a
            href="#home"
            className="hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#process"
            className="hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </a>
          <a
            href="#project"
            className="hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#services"
            className="hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#blog"
            className="hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="bg-brand hover:bg-purple-700 text-white px-4 py-1.5 rounded-md transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </ul>
      )}
    </nav>
  );
}
