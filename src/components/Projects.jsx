import React from 'react'

const Projects = () => {
  return (
    <div className='rota'>
  <a href="https://chillis.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img
      src="Chilis.png"
      className="h-[30vh] mt-[20vh] ml-[10vh] hover:scale-105 transition-transform duration-600"
      alt="Chillis Project"
    />
  </a>

  <a href="https://chats-hliz.onrender.com/" target="_blank" rel="noopener noreferrer">
    <img
      src="Chats.png"
      className="h-[30vh] mt-[5vh] ml-[10vh] hover:scale-105 transition-transform duration-600"
      alt="Chats Project"
    />
  </a>
</div>

  )
}

export default Projects
