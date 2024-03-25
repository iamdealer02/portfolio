import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageExpand: React.FC<ProjectImageProps> = ({ src, alt, width, height }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative'>
      <div className={`project-img ml-7 flex-1 cursor-pointer ${isExpanded ? 'z-10' : ''}`} onClick={toggleExpand}>
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
      {isExpanded && (
        <div
          className='fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50'
          onClick={toggleExpand}
        >
          <div className='max-w-screen-xl rounded-md overflow-hidden flex justify-center items-center'>
            <div className="expand-animation">
              <Image src={src} width={1000} height={1000} alt={alt} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageExpand;
