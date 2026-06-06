import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiFolder, FiMail } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { github, instagram, linkedin, whatsapp, resume } from "../data/links";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Database: ["PostgreSQL", "MongoDB"],
};

const socialLinks = [
  { icon: <FaWhatsapp />, link: whatsapp, label: "Open WhatsApp" },
  { icon: <FaInstagram />, link: instagram, label: "Open Instagram" },
  { icon: <FaLinkedinIn />, link: linkedin, label: "Open LinkedIn" },
  { icon: <FaGithub />, link: github, label: "Open GitHub" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fafafa] px-4 py-24 text-gray-900"
    >
      {/* Background effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 rounded-[32px] border border-gray-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl md:grid-cols-[0.9fr_1.4fr] md:p-10 lg:p-14"
      >
        {/* Left side */}
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 opacity-25 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-3 shadow-2xl">
              <img
                src="/images/salsabeel-2.webp"
                alt="Salsabeel Ibrahim, Full-Stack Developer"
                className="h-[390px] w-[300px] rounded-[24px] object-cover object-top grayscale transition duration-500 hover:scale-105 hover:grayscale-0 sm:h-[430px] sm:w-[330px]"
              />
            </div>

            {/* Social icons */}
            <div className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-3 shadow-xl backdrop-blur-xl">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-lg text-gray-600 transition duration-300 hover:-translate-y-1 hover:text-purple-600"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center text-left">
          <span className="mb-5 w-fit rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            Full-Stack Developer
          </span>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
            Building Scalable{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">
              Web Applications
            </span>{" "}
            & Digital Experiences
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
            I specialize in creating fast, scalable, and user-focused
            applications using modern web technologies. From intuitive frontend
            experiences to robust backend systems, I turn ideas into
            production-ready solutions.
          </p>

          {/* Skills */}
          <div className="mt-8 space-y-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold text-gray-500">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -4, scale: 1.04 }}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => (window.location.href = "#project")}
                className="group inline-flex items-center gap-3 rounded-xl bg-[#18181B] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black"
              >
                <FiFolder className="text-base" />
                My Projects
              </button>

              <button
                onClick={() => window.open(resume, "_blank")}
                className="group inline-flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-md"
              >
                <FiDownload className="text-base text-gray-500" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
