import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { companyProjects } from "../data/companyProject.js";
import { motion } from "framer-motion";

const CompanyProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? companyProjects
    : companyProjects.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.25, // slightly more delay between each card
        duration: 1.8, // slower, smoother fade
        ease: [0.22, 1, 0.36, 1], // beautiful smooth "easeOut" feel
      },
    }),
  };

  return (
    <section id="project" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-worksans font-semibold text-gray-900 mb-4">
          Company Projects
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A showcase of the company websites I’ve built, focused on modern
          design, performance, and seamless user experience.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden border border-gray-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-xs text-gray-400 tracking-wider mb-2">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.text}</p>

              <div className="flex gap-10 mt-4 justify-center">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center gap-2 text-brand font-semibold text-sm border border-brand rounded-md px-4 py-2 hover:bg-brand hover:text-white transition cursor-pointer"
                >
                  Live <TbWorldWww className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-brand hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition cursor-pointer"
        >
          {showAll ? "Show Less" : "More Projects"}
        </button>
      </div>
    </section>
  );
};

export default CompanyProjects;
