import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";

const services = [
  {
    title: "Mobile Application Development",
    image: assets.mobileAppDevelopment,
    buttonColor: "bg-[#1f2937]",
    background: "bg-[#1f2937]",
    hoverBackground: "hover:bg-orange-500",
  },
  {
    title: "UI/UX Design For Mobile",
    image: assets.UIUX,
    buttonColor: "bg-[#1f2937]",
    background: "bg-[#1f2937]",
    hoverBackground: "hover:bg-orange-500",
  },
  {
    title: "Video Editing",
    image: assets.editing,
    buttonColor: "bg-[#1f2937]",
    background: "bg-[#1f2937]",
    hoverBackground: "hover:bg-orange-500",
  },
];

const Myservice = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" }); // Trigger once when 100px in view

  return (
    <div
      id="services"
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 sm:px-12 md:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        My <span className="text-orange-400">Services</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 max-w-xl mb-12"
      >
       I specialize in mobile application development, crafting high-performance apps tailored to your needs. My UI/UX design services ensure intuitive, user-friendly experiences that delight users.
       I also offer professional video editing, turning raw footage into captivating visual stories.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : {}
            }
            transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className={`relative p-6 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer ${service.background} ${service.hoverBackground}`}
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`absolute bottom-4 right-4 p-3 rounded-full text-white transition-colors duration-300 ${service.buttonColor}`}
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Myservice;
