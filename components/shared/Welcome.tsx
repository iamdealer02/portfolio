import React from 'react'
import animationData from '@/public/animation.json';
import Lottie from "lottie-react";
import NavBar from './NavBar';
import Links from './Links';

const Welcome = () => {
  return (
    <div className='h-screen '> {/* Added h-screen class to make the div match the screen height */}
  <svg className='absolute top-0 right-0' width="314" height="850" viewBox="0 0 314 850" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M194.883 180.59L228.182 37.1305V1H313V37.1305V815H2L228.182 664.102L189.228 530.206L243.261 347.428L194.883 180.59Z" fill="#2F2F2F" stroke="#505050"/>
  </svg>
  
  {/* nav bar */}
  <div className='flex flex-row justify-center items-center px-10 py-10'>
    <NavBar/>
  </div>

  <div className='flex flex-col justify-center items-center h-screen '>
    <div className='container mx-auto flex flex-col items-center'>

        <svg width="886" height="42" viewBox="0 0 886 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-7.10211e-10" y1="41.5" x2="770.602" y2="41.5" stroke="#FAFAFA"/>
        <line x1="62.8278" y1="21.6613" x2="833.43" y2="21.6613" stroke="#FAFAFA"/>
        <line x1="115.398" y1="0.5" x2="886" y2="0.499999" stroke="#FAFAFA"/>
        </svg>

        <div className='font-lexend-giga text-4xl text-center mt-4'>
        {'< UPASANA\'S PORTFOLIO />'}
        </div>
    </div>
    <div className=' grid grid-flow-col grid-col-3 w-full'>
        
        <Links/>
        {/* margin 0 auto */}
    <div className=' my-0 mx-auto'>

      <Lottie
          animationData={animationData}
          className="mr-5 mb-0"
          style={{ width: '500px' }}
          loop={true}
        />
    </div>
    </div>

  </div>


</div>

  )
}

export default Welcome