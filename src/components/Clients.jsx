import React from "react";
import { clients } from "../data/clients";
import Marquee from "react-fast-marquee";

const Clients = () => {
  

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Happy Clients
        </h2>
        <p className="text-gray-500 mt-10 mb-10">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration.
        </p>
        <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={40}
        className="opacity-80"
      >

        <div className="flex flex-wrap items-center justify-center mt-15 gap-30 opacity-80">
          {clients.map((client, index) => (
            <img
            key={index}
            src={client.logo}
            alt={client.name}
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition cursor-pointer"
            />
          ))}
        </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
