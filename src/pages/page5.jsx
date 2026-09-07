import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Skills from '../components/skills'
import K from '../components/k'

const Page5 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add({
      isMobile: '(max-width: 768px)',
      isDesktop: '(min-width: 769px)'
    }, (context) => {
      const { isMobile } = context.conditions;

      if (isMobile) {
        gsap.from('.rotat', {
          transform: 'rotateY(-90deg)',
          duration: 3,
          opacity: 0,
          ease: 'power1.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.rotat',
            start: 'top 85%',
            end: 'top 20%',
            scrub: 1,
          },
        });
      } else {
        gsap.from('.rotat', {
          transform: 'rotateY(-90deg)',
          duration: 20,
          opacity: 0,
          ease: 'linear',
          stagger: 1,
          scrollTrigger: {
            trigger: '.rotat',
            start: 'top 80%',
            end: 'top 25%',
            scrub: 2,
          },
        });
      }
    });

    return () => mm.revert();
  });

  return (
    <div id='secion2' className="page-5 bg-amber-50 min-h-screen lg:h-screen w-full p-4 flex flex-wrap">
      <div className="pa relative min-h-[90vh] lg:h-full w-full rounded-[34px] shadow-2xl shadow-gray-700 bg-white px-[5vw] py-8 lg:py-0 flex justify-center items-center">
          <K/>
          <div className="sm:ml-30">
            <Skills/>
          </div>
      </div>
    </div>
  );
};

export default Page5;
