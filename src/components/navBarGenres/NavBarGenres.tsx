import React from 'react'

const NavBarGenres = () => {
  return (
    <div className='bg-white'>
      <nav className='grid grid-cols-4 sm:flex justify-center sm:gap-8 text-center py-3'>
        <button>Rap</button>
        <button>Pop</button>
        <button>Electro</button>
        <button>Reggae</button>
        <button>Rock</button>
        <button>Hip-Hop</button>
        <button>Dance Hall</button>
        <button>R&B</button>
      </nav>
    </div>
  )
}

export default NavBarGenres