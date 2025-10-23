import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import React from "react";
import { github, instagram, linkedin, whatsapp } from "../data/links";

const Hero_1 = () => {
  return (
    <section
      id="about"
      className="flex justify-center py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-green-50"
    >
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Left side - Image */}
        <div className="relative">
          <img
            src="/images/salsabeel-2.png"
            alt="Profile"
            class="w-64 h-72 object-cover object-top rounded-2xl scale-125 hover:scale-115 transition-transform duration-500 cursor-pointer"
          />
          {/* Social icons */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-xl flex gap-4 px-6 py-3">
            <a href={whatsapp} className="text-brand hover:text-purple-700 transition">
              <FaWhatsapp />
            </a>
            <a href={instagram} className="text-brand hover:text-purple-700 transition">
              <FaInstagram />
            </a>
            <a href={linkedin} className="text-brand hover:text-purple-700 transition">
              <FaLinkedinIn />
            </a>
            <a href={github} className="text-brand hover:text-purple-700 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center pl-20 md:text-left max-w-xl mt-10 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-worksans font-semibold text-gray-900 mb-4">
            I’m a Full-Stack Web Developer
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I design and build modern, responsive, and user-focused web
            applications. My goal is to turn ideas into functional, beautiful,
            and scalable digital experiences.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            💻 <strong>Tech Stack</strong>
            <br />
            <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Bootstrap,
            
            <br />
            <strong>Backend:</strong> Node.js, Express, TypeScript, JavaScript
            <br />
            <strong>Database:</strong> MongoDB, PostgreSQL
            <br />
            <strong>Others:</strong> Python, REST APIs, Git
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => window.location.href = "#project"} className="px-6 py-3 bg-brand hover:bg-purple-700 text-white font-semibold rounded-md shadow-sm hover:opacity-90 transition cursor-pointer">
              My Projects
            </button>
            <button className="px-6 py-3 border border-brand text-brand font-semibold rounded-md hover:bg-brand hover:text-white transition flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_1;
