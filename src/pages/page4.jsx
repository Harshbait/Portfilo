import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import Experience from '../components/Experience'
import './Image.css'

const Page4 = () => {

  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add({
      isMobile: '(max-width: 768px)',
      isLaptop: '(min-width: 769px) and (max-width: 1800px)',
      isDesktop: '(min-width: 1801px)'
    }, (context) => {
      const { isMobile, isLaptop } = context.conditions;

      if (isMobile) {
        gsap.from('.rotate', {
          transform: 'rotateX(-90deg)',
          duration: 2,
          opacity: 0,
          ease: 'power1.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.rotate',
            start: 'top 100%',
            end: 'top 20%',
            scrub: 1,
          },
        });
      } else if (isLaptop) {
        gsap.from('.rotate', {
          transform: 'rotateX(-90deg)',
          duration: 2,
          opacity: 0,
          ease: 'linear',
          stagger: 1,
          scrollTrigger: {
            trigger: '.rotate',
            start: 'top 170%',
            end: 'top -150%',
            scrub: 2,
          },
        });
      } else {
        gsap.from('.rotate', {
          transform: 'rotateX(-90deg)',
          duration: 2,
          opacity: 0,
          ease: 'linear',
          stagger: 1,
          scrollTrigger: {
            trigger: '.rotate',
            start: 'top 260%',
            end: 'top -150%',
            scrub: 2,
          },
        });
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="page-4 bg-amber-50 p-9 text-black text-center overflow-hidden"
    >
      <div className="rotate">
        <h3 className="text-[42vw] font-[Potfilo2] leading-[35vw]">MY</h3>
      </div>

      <div className="rotate">
        <h3 className="text-[42vw] font-[Potfilo2] leading-[35vw]">WORK</h3>
      </div>

      <div className="rotate">
        <h3 className="text-[42vw] font-[Potfilo2] leading-[35vw] uppercase">
          EXPERIENCE
        </h3>
      </div>

      <div className='rotate'>
        <Experience />

      </div>

      <div className="h-1 w-1/2 mx-auto mt-20 bg-black" />
    </div>
  )
}

export default Page4
