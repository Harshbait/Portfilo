import React from 'react'

import Myproject from '../components/Myproject'
import Projects from '../components/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import "./Image.css"

const Page6 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add({
      isMobile: '(max-width: 768px)',
      isDesktop: '(min-width: 769px)'
    }, (context) => {
      const { isMobile } = context.conditions;

      if (isMobile) {
        gsap.from('.rota', {
          transform: 'rotateX(-90deg)',
          duration: 2,
          opacity: 0,
          ease: 'power1.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#secion4',
            start: 'top 85%',
            end: 'top 25%',
            scrub: 1,
          },
        });
      } else {
        gsap.from('.rota', {
          transform: 'rotateX(-90deg)',
          duration: 6,
          opacity: 0,
          ease: 'linear',
          stagger: 1,
          scrollTrigger: {
            trigger: '.rotat',
            start: 'top 15%',
            end: 'top -65%',
            scrub: 2,
          },
        });
      }
    });

    return () => mm.revert();
  });

  return (
      <div
        id="secion4"
        className="min-h-screen lg:h-screen w-full bg-amber-50 p-2 sm:p-4"
      >
        <div
          className="
            rota YO relative
            w-full
            min-h-[95vh] lg:h-full 
            bg-black
            rounded-[34px]
            px-[4vw]
            py-8 lg:py-0
            shadow-2xl shadow-gray-700
            flex flex-col md:flex-row
            items-center justify-around
            gap-6
          "
        >
          <Myproject />
          <Projects />
        </div>
      </div>
  );
};



export default Page6
