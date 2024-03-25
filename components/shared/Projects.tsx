import React from 'react'

const Projects = () => {
  return (
    <div className='mx-auto  md:p-28 p-4' id='myProjects'>
        <div className='flex flex-col items-center justify-center '>
            <div className='font-limelight text-4xl'>MY PROJECTS</div>
            <div className='projects flex flex-col mx-auto mt-10 max-w-5xl  justify-center items-center'>
                <div className='project-heading font-lexend-giga md:text-2xl text-lg'>PROJECT 1 : AI SAAS PLATFORM</div>
                {/* HR LINE */}
                <div className=' w-full h-1 bg-white mt-2'></div>
                    <div className='flex md:flex-row flex-col justify-center items-center mt-5'>
                        <div className='project-desc   font-lexend-giga flex-1'>
                        AI image SaaS Platform that excels processing capabilities, integrates a secure
                        payment infrastructure, offers advanced image search functionalities.
                        Supports multiple AI features: Image Restoration, Recoloring, Object Removal,
                        Generative filling and Background removal.
                    </div>
                    <div className='project-img ml-7 flex-1'>
                        <img src='/assets/project1.png' alt='project1' />
                    </div>
                </div>
                <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2 mt-10 text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform '>
                    VIEW LIVE
                </button>
            </div>

            {/* project 2  */}
            <div className='projects flex flex-col mx-auto mt-10 max-w-5xl  justify-center items-center'>
                <div className='project-heading font-lexend-giga md:text-2xl text-lg'>PROJECT 2 : RIDE AND DRIVE WITH BOOBER</div>
                {/* HR LINE */}
                <div className=' w-full h-1 bg-white mt-2'></div>
                    <div className='flex md:flex-row flex-col justify-center items-center mt-5'>
                        <div className='project-desc   font-lexend-giga flex-1'>
                        Boober is a web application built using the Flask framework, aiming to replicate the core functionalities of the popular ride-sharing service, Uber. 
                        Developed by Upasana Sharma as part of an International Bachelor's in Computer Science program,
                        Boober serves as a practical exploration of web development concepts, Flask framework features, and integration with third-party services.
                    </div>
                    <div className='project-img ml-7 flex-1'>
                        <img src='/assets/project2.png'   alt='project1' className=''/>
                    </div>
                </div>
                <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2 mt-10 text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform '>
                    VIEW LIVE
                </button>
            </div>

            {/* project 3 */}
            <div className='projects flex flex-col mx-auto mt-10 max-w-5xl  justify-center items-center'>
                <div className='project-heading font-lexend-giga md:text-2xl text-lg'>PROJECT 3 : SOCIAL MEDIA INTERACTIVE PLATFORM</div>
                {/* HR LINE */}
                <div className=' w-full h-1 bg-white mt-2'></div>
                    <div className='flex md:flex-row flex-col justify-center items-center mt-5'>
                        <div className='project-desc    font-lexend-giga flex-1'>
                        The Twitter Clone project aims to replicate the core functionalities of 
                        the popular social media platform Twitter using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                         This comprehensive guide provides step-by-step instructions on setting up, developing, and deploying a Twitter-like application.
                    </div>
                    <div className='project-img ml-7 flex-1'>
                        <img src='/assets/project3.png'   alt='project1' className=''/>
                    </div>
                </div>
                <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2 mt-10 text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform '>
                    VIEW LIVE
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default Projects