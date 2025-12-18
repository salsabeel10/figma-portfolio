import React from "react";
import { services } from "../data/Services";
import { whatsapp } from "../data/links";

const What = () => {
  return (
    <section id="services" className="bg-[#F0F1F3] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What I do?</h2>
          <p className="text-gray-500 mb-4">
            I develop full-stack web applications that combine clean code, solid
            architecture, and seamless functionality. My focus is on building
            fast, secure, and scalable solutions that help businesses grow and
            users stay engaged.
          </p>
          <p className="text-gray-500 mb-8">
            From concept to deployment, I ensure every project delivers
            performance, reliability, and a great user experience.
          </p>
          <button  
            data-cta="say-hello"
            onClick={()=>window.open(whatsapp)} className="bg-brand hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md text-sm transition cursor-pointer">
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

export default What;
