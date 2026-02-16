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
  });

  return (
      <div
        id="secion4"
        className="h-screen w-full bg-amber-50 p-2 sm:p-4"
      >
        <div
          className="
            rota YO relative
            w-full
            h-full 
            bg-black
            rounded-[34px]
            px-[4vw]
            shadow-2xl shadow-gray-700
            flex flex-col md:flex-row
            gap-4
          "
        >
          <Myproject />
          <Projects />
        </div>
      </div>
  );
};



export default Page6
