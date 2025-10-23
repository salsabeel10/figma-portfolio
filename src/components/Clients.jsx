import React from "react";
import { clients } from "../data/clients";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Brands I’ve Worked With
        </h2>
        <p className="text-gray-500 mt-10 mb-10">
          From tech to luxury, I’ve delivered creative solutions for some incredible clients.
        </p>
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={40}
          className="opacity-100"
        >
          <div className="flex items-center gap-8 md:gap-18 px-4 md:px-8">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-14 object-contain transition cursor-pointer"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
