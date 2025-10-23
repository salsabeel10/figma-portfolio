import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="bg-gradient-to-br from-purple-50 to-green-50 mt-5"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20">
          {/* Left text content */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-worksans font-semibold text-gray-900 leading-tight">
              Hello, I’m{" "}
              <span className="text-gray-900">Salsabeel Ibrahim</span>
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              I’m a{" "}
              <span className="font-semibold text-gray-800">Software Engineer</span>{" "}
              and Freelance
              <span className="font-semibold text-gray-800">
                {" "}
                Web Developer{" "}
              </span>{" "}
              based in Dubai, UAE. I strive to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>

            <button className="mt-6 px-6 py-3 bg-brand hover:bg-purple-700 text-white font-worksans font-semibold rounded-md shadow-sm hover:opacity-90 transition cursor-pointer">
              Say Hello!
            </button>
          </div>

          {/* Right image */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/images/salsabeel-1.png"
              alt="salsabeel-profile"
              class="w-72 h-80 md:w-80 md:h-96 rounded-2xl shadow-lg object-cover object-top"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mt-10 bg-[#EDD8FF80] rounded-xl flex flex-col md:flex-row justify-between text-center divide-y md:divide-y-0 md:divide-x divide-purple-200 overflow-hidden cursor-pointer">
          <div className="flex-1 py-6 hover:bg-purple-200/60 transition">
            <h3 className="text-3xl font-bold text-[#424E60]">+2 Y.</h3>
            <p className="text-[#697484] ">Experience</p>
          </div>
          <div className="flex-1 py-6 hover:bg-purple-200/60 transition">
            <h3 className="text-3xl font-bold text-[#424E60]">250+</h3>
            <p className="text-[#697484]">Project Completed</p>
          </div>
          <div className="flex-1 py-6 hover:bg-purple-200/60 transition">
            <h3 className="text-3xl font-bold text-[#424E60]">58</h3>
            <p className="text-[#697484]">Happy Client</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
