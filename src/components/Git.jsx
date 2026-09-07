import React from 'react'

const Git = () => {
  return (
    <div
      className="
        absolute z-30
    left-[30%] -translate-x-1/2
    py-[88vh]
    flex items-center gap-2

    sm:gap-3

    lg:left-1/2
    lg:-translate-x-1/2
    lg:py-10
  "
    >
      <a
        href="https://github.com/Harshbait"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <img
          className="h-10 transition-transform duration-700 ease-in-out hover:scale-120 sm:h-12"
          src="/GitHub-Symbol.png"
          alt="GitHub"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/hari-bait-82b1ab288"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <img
          className="h-11 transition-transform duration-700 ease-in-out hover:scale-120 sm:h-13"
          src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
          alt="LinkedIn"
        />
      </a>

      <a href="mailto:harshbait44@gmail.com" title="harshbait44@gmail.com">
        <img
          className="h-10 pl-3 transition-transform duration-700 ease-in-out hover:scale-120 sm:h-12"
          src="https://img.icons8.com/?size=100&id=124376&format=png&color=000000"
          alt="Email"
        />
      </a>
    </div>
  )
}

export default Git