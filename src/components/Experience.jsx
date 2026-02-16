import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isMobile: "(max-width: 768px)",
      isLaptop: "(min-width: 769px) and (max-width: 1800px)",
      isDesktop: "(min-width: 1801px)"
    }, (context) => {
      // Timeline Line Logic
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: ".timeline-line",
          scrub: true,
          start: "top 170%",
          end: "bottom 40%" 
        }
      });
    });
  }, { scope: container });
  

  return (
    <div ref={container} className="relative bg-[#FFFBEB] py-20 sm:py-32 px-4 sm:px-16 flex justify-center overflow-hidden">
      
      {/* Central Timeline Line - On mobile, shifted to the left slightly or kept center */}
      <div className="absolute left-[10%] sm:left-1/2 transform -translate-x-1/2 h-[80%] top-[10%] w-1 bg-black timeline-line" />

      <div className="relative transition-transform duration-700 ease-in-out hover:scale-110 w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between">
        
        {/* Experience Card */}
        {/* On mobile: width is 85%, shifted to the right using ml-auto or left-[15%] */}
        <div className="rotate  ml-auto sm:ml-0 w-[85%] sm:w-[45%] bg-black
                p-6 sm:p-8 rounded-2xl border-b-4 border-r-4 border-[#2b254a] 
                shadow-xl origin-top relative 
                will-change-transform backface-hidden">
          
  {/* Date inside card - ONLY VISIBLE ON SMALL SCREENS */}
  <p className="sm:hidden text-[#aaa6c3] text-[14px] font-semibold mb-2">
    December 2025 — March 2026
  </p>

  {/* Flex container for header on laptops to keep it clean */}
  <div className="flex flex-col gap-1">
    <h3 className="text-white text-[20px] sm:text-[24px] font-bold leading-tight">
      Lunar Finis
    </h3>
    <p className="text-[#aaa6c3] text-[14px] sm:text-[16px] font-semibold mb-4 sm:mb-5">
      Full Stack Developer Intern
    </p>
  </div>
  
  <ul className="list-disc ml-5 space-y-2">
    <li className="text-[13px] sm:text-[14px] pl-1 tracking-wider text-gray-300">
      Developed backend features by creating RESTful APIs with Node.js and Express.js
    </li>
    <li className="text-[13px] sm:text-[14px] pl-1 tracking-wider text-gray-300">
      Designed and Build MongoDB schemas, handling CRUD operations with Mongoose
    </li>
    <li className="text-[13px] sm:text-[14px] pl-1 tracking-wider text-gray-300">
      Collaborated with team members using Git and GitHub for code management
    </li>
  </ul>
</div>

        {/* Center: Logo Badge */}
        {/* On mobile: Shifted to align with the left-aligned line */}
        <div className="absolute left-[5%] sm:left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border-4 border-[#2b254a] z-10 shadow-lg">
          <img src="/image.png" alt="Lunar" className="w-[60%] h-[60%] object-contain" />
        </div>

        {/* Right Side Date - ONLY VISIBLE ON LARGER SCREENS */}
        <div className="hidden sm:block w-[45%] pl-10">
          <p className="text-black text-[16px] font-[Potfilo1]">
            December 2025 — March 2026
          </p>
        </div>

      </div>
    </div>
  );
};

export default Experience;