import React, {useState} from 'react'
import { Link } from 'react-scroll';
import {saveAs} from 'file-saver'


const NavBar = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [hideLinks, setHideLinks] = useState(false);

  const toggleLinks = () => {
    setHideLinks(!hideLinks);
  };

  const handleDownloadResume = () => {
    setIsFrozen(true);
    const resumeUrl = '/Resume-Upasana.pdf';
    
    // Fetch the resume file
    fetch(resumeUrl)
      .then(response => response.blob())
      .then(blob => {
        // Use file-saver to save the file
        // take 2 sec to download
        setTimeout(() => {
          saveAs(blob, 'Upasana-resume.pdf');
          setIsFrozen(false);
        }, 1000);
       
        
      })
      .catch(error => {
        console.error('Error downloading the resume:', error);
      });
  };
  

  return (
    <>
<div  className=' hidden  md:flex flex-row md:fixed top-0 w-full justify-center items-center  z-10 '>
  
  <div className={`overlay ${isFrozen ? 'show' : ''}`}></div>
  <div className='w-fit flex flex-col  md:flex-row h-full bg-black p-10'>

  <Link to="aboutMe" smooth={true} duration={500}>
  <button  className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>ABOUT ME</button>
  </Link>

    <button  onClick={handleDownloadResume} className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>MY RESUME</button>
    <Link to="myProjects" smooth={true} duration={500}>
      <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>MY PROJECTS</button>
    </Link>
    <Link to="contactMe" smooth={true} duration={500}>
      <button className='text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'> CONTACT</button>
    </Link>
  </div>
</div>

  {/* get my resume */}
  <button onClick={handleDownloadResume} className= 'md:hidden text-white bg-custom-gray mr-11  pr-5 pl-5 pt-2 pb-2  text-sm font-lexend-giga  hover:bg-gray-900 hover:scale-105 transition-transform'>CLICK HERE TO GET RESUME</button>

</>
  )
}

export default NavBar