import React from 'react'

const Myproject = () => {
  return (
    <div className='rota flex flex-col justify-center'>
       <h1 className="text-[50px] sm:text-[70px] md:text-[8vw] lg:text-[7vw] font-[Potfilo2] px-1 py-1 sm:py-3 text-white leading-none">My Projects</h1>
       <div className='mt-2 sm:mt-4 font-[Potfilo1] text-gray-400 text-xs sm:text-sm md:text-base'>
         <p className='text-gray-300'>Open for opportunities & collaborations</p>
         <a href="mailto:harshbait44@gmail.com" className='text-amber-200 hover:underline inline-block mt-1 font-semibold'>
           harshbait44@gmail.com
         </a>
       </div>
    </div>
  )
}

export default Myproject
