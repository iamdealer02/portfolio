import Lottie from 'lottie-react'
import React from 'react'
import animationData from '@/public/contactAnimation.json';
import Image from 'next/image';
import Link from 'next/link';


const Contact = () => {
    const SendEmail = (e: { preventDefault: () => void; target: { name: { value: string; }; email: { value: string; }; message: { value: string; }; }; }) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        fetch('/api/submitForm', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                alert('Message sent successfully!');
                e.target.name.value = '';
                e.target.email.value = '';
                e.target.message.value = '';
            } else {
                alert('Message failed to send. Please try again later.');
            }
        });
    }
    
  return (
    <div id='contactMe' className='mt-20 mb-16 mx-auto'>
        <div className='heading flex flex-col justify-center items-center'>
            <div className='font-limelight text-4xl'>GET IN TOUCH</div>
            <div className='flex md:flex-row flex-col justify-center items-center'>
                <Lottie
            animationData={animationData}
            className="mr-5 mb-0"
            style={{ width: '500px' }}
            loop={true}
            />
            <div className="max-w-lg mx-auto">
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {SendEmail(e as unknown as { preventDefault: () => void; target: { name: { value: string; }; email: { value: string; }; message: { value: string; }; }; })}} method='POST' className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium ">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="appearance-none block w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                        Message
                    </label>
                    <div className="mt-1">
                        <textarea
                        id="message"
                        name="message"
                        
                        required
                        className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        ></textarea>
                    </div>
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Send
                    </button>
                    </div>
                </form>
            </div>
            
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='project-desc font-lexend-giga flex-1 p-1'>
            Feel free to reach out to me for any queries, collaborations, or just to say hi!
            </div>
            <div className='mail mt-4'>
                <Link href="mailto:sharmaupasana823@gmail.com">
                    <Image src='/assets/mail.png' alt='mail' width={30} height={30} />
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact