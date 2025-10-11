import React from 'react'
import { cards } from "../data/cards";

const Blog = () => {
  return (
     <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-worksans font-semibold text-gray-900 mb-4">
          Blogs
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          There are Blogs Many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
       <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 grayscale object-cover hover:scale-105 transition-transform duration-500 hover:filter-none cursor-pointer"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2">{card.date}</p>
                <h3 className="text-gray-800 font-semibold text-base">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}

export default Blog