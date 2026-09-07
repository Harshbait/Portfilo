import React from 'react'
// import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='hie fixed top-0 right-0 w-full max-w-full z-30 px-3 py-11 sm:px-17 sm:py-17 flex items-center justify-end pointer-events-none'>
      
  <a
    href='/Hari Bait_Resume.pdf'
    target='_blank'
    rel='noopener noreferrer'
    download={true}
    className='pointer-events-auto'
  >
    <button className='hire bg-black text-[14px] sm:text-xl px-6 py-3 rounded-full border-4 transition-all duration-700 hover:scale-110 hover:font-bold cursor-pointer'>
      Resume 
    </button>
  </a>
</div>
  )
}

export default Header
