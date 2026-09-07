import React from 'react'
import Canvas from './Canvas'


const Page3 = () => {
  const technologies = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'Java',
    'GSAP',
    'ScrollTrigger',
    'Locomotive Scroll'
  ];

  return (
    <div className='min-h-screen lg:h-screen w-full bg-amber-50 p-3 sm:p-4'>
      <div className="relative min-h-[95vh] lg:h-full w-full rounded-[34px] overflow-hidden shadow-2xl shadow-gray-700 bg-black">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="page-3 absolute top-0 left-0 h-full w-full object-cover rounded-[34px] z-10 pointer-events-none opacity-80"
          src="file1.mp4"
        />

        <div className="z-30 relative lg:absolute top-0 left-0 px-6 sm:px-10 lg:px-14 xl:px-20 py-6 sm:py-8 lg:py-10 max-w-full lg:max-w-[50vw] flex flex-col justify-center">
          <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <div>
              <h1 className='text-white text-[7vh] sm:text-[9vh] md:text-[11vh] lg:text-[12vh] xl:text-[14vh] font-[Potfilo2] leading-none'>
                About
              </h1>
              <p className="text-amber-200 font-[Potfilo1] font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                Aspiring MERN Stack Developer
              </p>
            </div>
          </div>
          
          <h2 className='text-white text-[15px] sm:text-[17px] md:text-[19px] xl:text-[21px] font-[Potfilo1] font-bold leading-snug sm:leading-relaxed mb-2 sm:mb-3'>
            I am <span className='text-amber-200'>Hari Bait</span>, a Final Year Engineering student at{' '}
            <a href='https://www.sakec.ac.in/' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline inline-block'>
              SAKEC
            </a>{' '}
            and an aspiring <span className='text-amber-400'>MERN Stack Developer</span>.
          </h2>

          <p className='text-gray-300 text-[13px] sm:text-[15px] md:text-[16px] xl:text-[18px] font-[Potfilo1] font-medium leading-relaxed mb-3 sm:mb-4'>
            I enjoy building modern and interactive web applications and continuously improving my skills in frontend and backend development.
          </p>

          <div className='flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] sm:text-[14px] md:text-[15px] font-[Potfilo1] font-semibold text-gray-300 py-2 px-3 sm:px-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 my-2'>
            <span>Current CGPA: <span className='text-amber-200 font-bold'>8.29</span></span>
            <span className='text-gray-500 hidden sm:inline'>•</span>
            <span>12th: <span className='text-amber-200 font-bold'>65.67%</span></span>
            <span className='text-gray-500 hidden sm:inline'>•</span>
            <span>10th: <span className='text-amber-200 font-bold'>74.80%</span></span>
          </div>

          <div className="mt-2 sm:mt-3">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Technologies & Libraries
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] sm:text-xs font-[Potfilo1] text-gray-200 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="text-gray-400 text-xs sm:text-sm font-[Potfilo1]">Contact:</span>
            <a
              href="mailto:harshbait44@gmail.com"
              className="text-amber-200 hover:text-amber-100 hover:underline text-xs sm:text-sm font-[Potfilo1] font-semibold"
            >
              harshbait44@gmail.com
            </a>
          </div>
        </div>

        <div>
          <Canvas className="pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default Page3
