import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div id='aboutMe'  className=' p-28 md:mt-40 mt-80 mb-16 mx-auto '>
      <div className='heading flex flex-row justify-center '>
        <div className=' font-limelight  text-4xl'>ABOUT ME</div>
          <Image src='/assets/aboutMe.png' width={100} height={10} alt='aboutme'/>
      </div>
      <div className='flex flex-col mx-auto mt-10 max-w-3xl'>
        <div className='flex flex-col space-y-11 '>
          <div className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-start'>
            <p className='text-sm'>I am a 20 year old Computer Science student passionate about learning and innovation.</p>
            <div className='flex items-center mt-1'>
              <img className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' alt='upasana'/>
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
          <div className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-end'>
            <p className='text-sm'>I am studying Computer Science in EPITA, France.</p>
            <div className='flex items-center mt-1'>
              <img className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' alt='upasana'/>
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
          <div className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-start'>
            <p className='text-sm'>I am a Web Developer skilled in ReactJS, NextJS, NodeJS, Tailwind, Typescript, Javascript, Flask and many more.</p>
            <div className='flex items-center mt-1'>
              <img className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' alt='upasana'/>
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
          <div className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-end'>
            <p className='text-sm'>I am a fast learner who is constantly learning new skills and building experience.</p>
            <div className='flex items-center mt-1'>
              <img className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' alt='upasana'/>
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe