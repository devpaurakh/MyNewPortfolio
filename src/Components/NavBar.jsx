import React, { useState } from 'react';
import { CloseCircle, HambergerMenu } from 'iconsax-react';
import { assets } from '../assets/assets';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className={`max-md:fixed md:mt-5 max-md:top-0 max-md:left-0 max-md:z-50 flex flex-col md:flex-row items-center justify-center gap-8 max-md:w-full max-md:h-screen px-8 py-4 max-md:backdrop-blur bg-black md:bg-black md:border border-gray-300/20 md:rounded-full transition-all duration-500 ease-in-out mx-auto md:max-w-[80%] md:hover:scale-105 md:hover:shadow-2xl md:hover:shadow-orange-500/20 ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'}`}>
        
        <CloseCircle
          color='#FD853A'
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer hover:scale-110 hover:rotate-90 transition-all duration-300 ease-in-out"
        />
        
        {/* Nav Links with staggered animation */}
        <a href="#home" className="text-white font-bold hover:text-[var(--color-primary)] text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transform animate-fadeInUp opacity-0 animation-delay-100">Home</a>
        <a href="#services" className="text-white hover:text-[var(--color-primary)] text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transform animate-fadeInUp opacity-0 animation-delay-200">Services</a>
        <a href="#about" className="text-white hover:text-[var(--color-primary)] text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transform animate-fadeInUp opacity-0 animation-delay-300">About</a>
        
        {/* Logo in the center with special animation */}
        <img src={assets.logo} alt="Logo" width="200" height="200" className="mx-20 hover:scale-110 hover:rotate-6 transition-all duration-500 ease-in-out animate-pulse-slow" />
        
        <a href="#skills" className="text-white hover:text-[var(--color-primary)] text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transform animate-fadeInUp opacity-0 animation-delay-400">Skills</a>
        <a href="#portfolio" className="text-white hover:text-[var(--color-primary)] text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transform animate-fadeInUp opacity-0 animation-delay-500">Portfolio</a>
        <a href="#contact" className="text-white hover:text-[var(--color-primary)] text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 transform animate-fadeInUp opacity-0 animation-delay-600">Contact</a>
      </div>

      {/* Hamburger Icon with enhanced animation */}
      {!isOpen && (
        <HambergerMenu color='#FD853A'
          onClick={() => setIsOpen(true)}
          className="max-md:ml-4 md:hidden top-10 w-8 h-8 cursor-pointer text-black z-50 hover:scale-125 hover:rotate-180 transition-all duration-300 ease-in-out animate-bounce-slow"
        />
      )}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;