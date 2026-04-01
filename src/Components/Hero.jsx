import React from 'react';
import heroImg from '../assets/banner.png';
import toolsImage from '../assets/Group5.png'


const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6 py-16'>
            <div className='w-full'>
                <div className='flex items-center gap-2 bg-violet-200 p-2 rounded-full w-72 justify-center'>
                    <img src={toolsImage} alt="" />
                    <p className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='text-6xl font-bold py-4'>Supercharge Your
                    Digital Workflow</h2>
                <p className='text-gray-500 text-xl'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div className='flex items-center gap-3 mt-5'>
                    <button className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 text-xl">Explore Products</button>
                    <button
                        className="flex items-center gap-2 p-3 rounded-full relative overflow-hidden text-black font-semibold text-lg"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"></span>


                        <span className="absolute inset-0 m-0.5 rounded-full bg-white"></span>


                        <span className="relative flex items-center gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#7f00ff" />
                                        <stop offset="100%" stopColor="#e100ff" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M5 3L19 12L5 21V3Z"
                                    stroke="url(#grad)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Watch Demo</span>
                        </span>
                    </button>
                </div>
            </div>
            <div className='w-full flex items-center justify-center lg:justify-end'>
                <img src={heroImg} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;