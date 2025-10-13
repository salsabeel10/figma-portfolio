import React from "react";
import { services } from "../data/Services";


const WhatIDo = () => {
  

  return (
    <section className="bg-[#F0F1F3] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What I do?</h2>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <button className="bg-brand hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md text-sm transition cursor-pointer">
            Say Hello!
          </button>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
