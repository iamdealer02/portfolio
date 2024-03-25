import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const divRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold as needed
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    if (aboutMeRef.current) observer.observe(aboutMeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      divRefs.current.forEach((ref, index) => {
        if (ref) {
          setTimeout(() => {
            ref.classList.add('opacity-100');
          }, index * 500); // Adjust delay between divs as needed
        }
      });
    }
  }, [isVisible]);

  return (
    <div id='aboutMe' ref={aboutMeRef} className='p-28 md:mt-40 mt-80 mb-16 mx-auto'>
      <div className='heading flex flex-row justify-center'>
        <div className='font-limelight text-4xl'>ABOUT ME</div>
        <Image src='/assets/aboutMe.png' width={100} height={10} alt='aboutme' />
      </div>
      <div className='flex flex-col mx-auto mt-10 max-w-3xl'>
        <div className='flex flex-col space-y-11'>
          {/* first */}
          <div ref={el => divRefs.current[0] = el} className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-start opacity-0 transition-opacity duration-1000'>
            <p className='text-sm'>I am a 20 year old Computer Science student passionate about learning and innovation.</p>
            <div className='flex items-center mt-1'>
              <Image className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' width={16} height={16} alt='upasana' />
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
          {/* second */}
          <div ref={el => divRefs.current[1] = el} className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-end opacity-0 transition-opacity duration-1000'>
            <p className='text-sm'>I am studying Computer Science in EPITA, France.</p>
            <div className='flex items-center mt-1'>
              <Image className='w-4 h-4 rounded-full mr-1' width={16} height={16} src='/assets/user.jpg' alt='upasana' />
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
          {/* third */}
          <div ref={el => divRefs.current[2] = el} className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-start opacity-0 transition-opacity duration-1000'>
            <p className='text-sm'>I am a Web Developer skilled in ReactJS, NextJS, NodeJS, Tailwind, Typescript, Javascript, Flask and many more.</p>
            <div className='flex items-center mt-1'>
              <Image className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' width={16} height={16} alt='upasana' />
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
          {/* fourth */}
          <div ref={el => divRefs.current[3] = el} className='bg-blue-300 rounded-md text-black md:w-80 w-60 p-3 self-end opacity-0 transition-opacity duration-1000'>
            <p className='text-sm'>I am a fast learner who is constantly learning new skills and building experience.</p>
            <div className='flex items-center mt-1'>
              <Image className='w-4 h-4 rounded-full mr-1' src='/assets/user.jpg' width={16} height={16} alt='upasana' />
              <div className='text-gray-500 text-xs'>Upasana Sharma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
