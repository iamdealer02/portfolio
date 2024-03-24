import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='relative md:fixed links p-5 ml-5  border rounded-md border-solid border-white-100 flex flex-col justify-start items-end self-end w-fit'>
            <div className='font-lexend-giga text-sm text-center mt-4 w-fit'>
                
                <Image  src={'/assets/pfp.png'} className='mb-11' alt='Upasana' width={200} height={200}/>
                <Link legacyBehavior href="https://www.linkedin.com/in/upasana-sharma-0387a8226/" passHref>
                    <a className='flex flex-row justify-between items-center' target="_blank" rel="noopener noreferrer">
                        <Image src='/assets/linkedin.png' className='mr-4' width={50} height={50} alt='links'/>
                        {'< LINKEDIN />'}
                    </a>
                </Link>
                <Link legacyBehavior href="https://github.com/iamdealer02" passHref>
                    <a className='flex flex-row justify-between items-center mt-5' target="_blank" rel="noopener noreferrer">
                        <Image src='/assets/github.png' className='mr-4' width={50} height={50} alt='links'/>
                        {'< GITHUB />'}
                    </a>
                </Link>

   
            </div>
        </div>
  )
}

export default Links