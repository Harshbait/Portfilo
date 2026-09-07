import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      gsap.from('.rotateText', {
        transform: 'rotateX(-90deg)',
        duration: 2,
        opacity: 0,
        ease: 'power2.out',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.rotateText',
          start: 'top 75%',
          end: 'top -50%',
          scrub: 1,
        },
      });
    } else {

      gsap.registerPlugin(ScrollTrigger)

      gsap.from('.rotateText', {
        transform: 'rotateX(-90deg)',
        duration: 2,
        opacity: 0,
        ease: 'linear',
        stagger: 1,
        scrollTrigger: {
          trigger: '.rotateText',
          start: 'top 175%',
          end: 'top -330%',
          scrub: 2,
        }
      })
    }
  });

  return (
    <div className='page-2 bg-amber-50 sm:p-20 text-black text-center overflow-hidden'>
      <div id='secion2' className='relative'>
        {/* <a href="https://www.anzo.studio/" ><h3 className='text-gray-500 font-[Potfilo3]'>@Inspired by Anzo.studio</h3></a> */}
        <div className='rotateText'>
          <h3 className='text-[42vw] font-[Potfilo2] uppercase leading-[35vw]'>Design </h3>
        </div>
        <div className='rotateText'>
          <h3 className='text-[42vw] font-[Potfilo2] uppercase leading-[35vw]'>That
          </h3>
        </div>
        <div className='rotateText'>
          <h1 className='text-[42vw] font-[Potfilo2] uppercase leading-[35vw]'>Doesn’t</h1>
        </div>
        <div className='rotateText'>
          <h1 className='text-[42vw] font-[Potfilo2] uppercase leading-[35vw]'>Just Look</h1>
        </div>
        <div className='rotateText'>
          <h1 className='text-[42vw] font-[Potfilo2] uppercase leading-[35vw]'>good</h1>
        </div>
        <div className='rotateText'>
          <h1 className='text-[42vw] font-[Potfilo2] uppercase leading-[35vw]'>It Works!</h1>
        </div>
      </div>
      <div className='h-1 w-1/2 relative left-1/2 -translate-x-1/2 sm:mt-25 bg-black'></div>
    </div>
  )
}

export default Page2
