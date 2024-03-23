import React from 'react'
import { Link } from 'react-scroll';


const NavBar = () => {
  return (
<div  className='flex flex-row fixed top-0 w-full justify-center items-center  z-10 '>
  <div className='w-fit h-full bg-black p-10'>
  <Link to="aboutMe" smooth={true} duration={500}>
  <button  className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>ABOUT ME</button>
  </Link>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>MY RESUME</button>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>MY PROJECTS</button>
    <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'> CONTACT</button>

  </div>

  </div>
  )
}

export default NavBar