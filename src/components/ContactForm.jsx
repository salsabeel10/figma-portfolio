import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { github, instagram, linkedin, whatsapp } from "../data/links";
import Form from "./Form";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(to_bottom,white_80%,#2B384C_20%)] py-28 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto bg-white shadow-[-6px_0_10px_-4px_rgba(0,0,0,0.2),6px_0_10px_-4px_rgba(0,0,0,0.2),0_-6px_10px_-4px_rgba(0,0,0,0.2)] rounded-xl p-10 md:flex gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Let’s discuss your <span className="text-brand">Project</span>
            </h2>
            <p className="text-gray-500">
              Tell me about your ideas, goals, and vision — let’s make them real
              together.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4 bg-white shadow-xl rounded-lg p-4">
              <div className="bg-purple-100 p-3 rounded-md">
                <HiLocationMarker className="text-brand text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Address:</p>
                <p className="font-medium text-gray-800">Dubai , UAE</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 bg-white shadow-xl rounded-lg p-4">
              <div className="bg-purple-100 p-3 rounded-md">
                <HiMail className="text-brand text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">My Email:</p>
                <p className="font-medium text-gray-800 break-words overflow-hidden text-sm sm:text-base">
                  salsabeelibrahim14@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 bg-white shadow-xl rounded-lg p-4 ">
              <div className="bg-purple-100 p-3 rounded-md">
                <HiPhone className="text-brand text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Me Now:</p>
                <p className="font-medium text-gray-800">(+971) 55 594 6006</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-6">
            <a
              href={github}
              className="text-brand hover:text-purple-700 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href={instagram}
              className="text-brand hover:text-purple-700 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href={linkedin}
              className="text-brand hover:text-purple-700 text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={whatsapp}
              className="text-brand hover:text-purple-700 text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <p className="text-gray-500 mb-8">
            Fill out the form below and share your project details. I’ll get
            back to you as soon as possible.
          </p>
          {/* Form field here */}
          <Form />
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
