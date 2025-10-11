import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.",
    name: "Esther Howard",
    title: "Managing Director, ABC Company",
  },
  {
    quote:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    name: "Leslie Alexander",
    title: "CEO, XYZ Inc.",
  },
  {
    quote:
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.",
    name: "Jenny Wilson",
    title: "Founder, Design Studio",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleSlide = (index) => setCurrent(index);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Testimonial
      </h2>
      <p className="text-gray-500 mb-12">
        There are many variations of passages of Lorem Ipsum available,
        <br className="hidden sm:block" /> but the majority have suffered
        alteration.
      </p>

      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg italic leading-relaxed mb-8">
          “{testimonials[current].quote}”
        </p>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900">
            {testimonials[current].name}
          </h4>
          <p className="text-sm text-gray-500">{testimonials[current].title}</p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === index
                  ? "w-6 bg-gray-800"
                  : "w-2 bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;