import React from "react";

const ProjectIdea = () => {
  return (
    <section className="bg-[#0b1a33] text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do you have Project Idea?
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Let's discuss your project!
        </h3>
        <p className="text-gray-400 mb-8">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration.
        </p>
        <button className="bg-brand hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition inline-flex items-center cursor-pointer">
          Let’s work Together
          <span className="ml-2 text-lg">→</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectIdea;
