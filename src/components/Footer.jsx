import React from "react";

const Footer = () => {
  return (
      <footer className="bg-[#2B384C] text-gray-300 py-8 px-6 -mt-24 relative  z-0">  
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-purple-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
            S
          </div>
          <span className="text-white font-semibold text-lg">Salsabeel</span>
        </div>

        {/* Middle - Navigation */}
        <ul className="flex flex-wrap justify-center space-x-6 text-sm">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Services</a></li>
          <li><a href="#" className="hover:text-white transition">Process</a></li>
          <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
          <li><a href="#" className="hover:text-white transition">Blog</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Right - Copyright */}
        <p className="text-sm text-gray-400">
          Copyright © 2025.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
