import React, { useState, useRef } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { assets } from '../assets/assets';
import { useInView } from 'framer-motion';

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const portfolioItems = [
    {
      id: 1,
      title: "PH-7 Movies",
      subtitle: "Ticket Booking App developed in MERN Stack + Flutter",
      category: "MERN - Flutter",
      image: assets.ph7movie,
      livedemo: 'https://ph7-movies-frontend.vercel.app/'
    },
    {
      id: 2,
      title: "PH-7 Hotels",
      subtitle: "Hotel Booking App built with Flutter and MERN stack",
      category: "Hotel Booking",
      image: assets.ph7movie,
      livedemo: ''
    },
    {
      id: 3,
      title: "PH-7 Admin Panel",
      subtitle: "Admin Panel to manage bookings and analytics",
      category: "Admin Dashboard",
      image: assets.ph7movie,
      livedemo: ''
    },
    {
      id: 4,
      title: "PH-7 Mobile App",
      subtitle: "Fully responsive mobile booking app built in Flutter",
      category: "Mobile App",
      image: assets.ph7movie,
      livedemo: ''
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div
      id="portfolio"
      ref={sectionRef}
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between mt-20 items-center mb-12">
          <div className={`transition-all duration-800 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-5xl font-bold text-gray-800 mb-2">Let's have a look at</h1>
            <h1 className="text-5xl font-bold text-orange-500">my Portfolio</h1>
          </div>
        </div>

        {/* Carousel */}
        <div className={`relative mb-16 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white shadow-2xl p-20 flex-shrink-0 w-full max-w-6xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-orange-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.subtitle}</p>
                      <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <img
                    src={item.image}
                    alt="Work preview"
                    className="w-full h-[400px] object-cover rounded-xl mb-6"
                  />

                  {item.livedemo && (
                    <a
                      href={item.livedemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 rotate-180 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center gap-3 mb-12 transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
