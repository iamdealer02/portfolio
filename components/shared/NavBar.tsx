import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row fixed justify-center items-center px-10 py-10'>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>ABOUT ME</button>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>MY RESUME</button>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>MY PROJECTS</button>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'> CONTACT</button>
  </div>
  )
}

export default NavBar