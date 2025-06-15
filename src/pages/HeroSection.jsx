import React from 'react'
import { ArrowUp } from 'iconsax-react';
import { assets } from '../assets/assets';
import BlurCircle from '../Components/BlurCircle';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <center>
        <div className="md:mt-15 space-y-2 animate-hero-fade">
          <div className="inline-block px-4 py-2 bg-orange-100 text-sm rounded-full font-semibold hover-magnetic animate-magnetic-pop delay-100">
            Nameste!
          </div>
          
          <div className="animate-text-reveal delay-200">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 hover-glow">
              I'm <span className="animate-name-gradient">Paurakh Saud</span>,
            </h1>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 hover-tilt animate-text-reveal delay-500">
              Mobile Application Developer
            </h2>
          </div>
          
          <div className="animate-morph-float delay-300">
            <BlurCircle />
          </div>
          <div className="animate-morph-float delay-500" style={{animationDelay: '0.5s', animationDirection: 'reverse'}}>
            <BlurCircle right='50px' top='100px' />
          </div>
          <div className="animate-morph-float delay-700">
            <BlurCircle bottom='50px' left='200px' />
          </div>
          
          <div className=" delay-900">
            <img src={assets.ellipse} className='md:mt-20  animate-breathe' alt="" />
          </div>
          
          <div className='absolute -translate-y-46 -translate-x-120 top-1/2 right-10 delay-1100'>
            <img src={assets.firstImage}  width="400px" alt="Profile" className="animate-breath" />
          </div>
        </div>
      </center>
      
      {/* Modern CSS Animations */}
      <style jsx>{`
        @keyframes heroFadeUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes magneticPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          70% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(40px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes nameGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes morphFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg) scale(0.98);
          }
          75% {
            transform: translateY(-25px) rotate(2deg) scale(1.02);
          }
        }
        
        @keyframes imageGlide {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(-20px) scale(0.8) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          }
        }
        
        @keyframes ellipseRotate {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-45deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes breathe {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }
        
        .animate-hero-fade {
          animation: heroFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-magnetic-pop {
          animation: magneticPop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }
        
        .animate-text-reveal {
          animation: textReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .animate-name-gradient {
          background: linear-gradient(-45deg, #ff6b35, #f7931e, #ff6b35, #ffa726);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nameGradient 3s ease-in-out infinite;
        }
        
        .animate-morph-float {
          animation: morphFloat 6s ease-in-out infinite;
        }
        
        .animate-image-glide {
          animation: imageGlide 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .animate-ellipse-rotate {
          animation: ellipseRotate 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1300 { animation-delay: 1.3s; }
        
        /* Hover effects */
        .hover-magnetic:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 10px 25px rgba(251, 146, 60, 0.3);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hover-tilt:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) scale(1.05);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  )
}

export default HeroSection