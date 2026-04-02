import { Package, Rocket, User } from 'lucide-react';
import React from 'react';

const Started = () => {
    return (
        <div className='bg-slate-50 py-16'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-center font-bold text-4xl lg:text-5xl'>Get Started in 3 Steps</h2>
                <p className='text-gray-500 text-center mt-3'>Start using premium digital tools in minutes, not hours.</p>
                <div className='mt-8 grid md:grid-cols-3 gap-6'>
                    <div className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2'>
                        <div className='flex justify-end'>
                            <p className="bg-gradient-to-r from-violet-600 to-fuchsia-500 py-2 px-3 text-white rounded-full">01</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className="bg-gradient-to-br from-violet-100 to-fuchsia-100 p-3 w-16 text-center rounded-xl">
                                <span className="text-violet-600">
                                    <User className="h-10 w-10" />
                                </span>
                            </p>
                            <h3 className='mt-4 text-xl font-medium'>Create Account</h3>
                            <p className='text-gray-500 text-center mb-5'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2'>
                        <div className='flex justify-end'>
                            <p className="bg-gradient-to-r from-violet-600 to-fuchsia-500 py-2 px-3 text-white rounded-full">02</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className="bg-gradient-to-br from-violet-100 to-fuchsia-100 p-3 w-16 text-center rounded-xl">
                                <span className="text-violet-600">
                                    <Package className="h-10 w-10" />
                                </span>
                            </p>
                            <h3 className='mt-4 text-xl font-medium'>Choose Products</h3>
                            <p className='text-gray-500 text-center mb-5'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2'>
                        <div className='flex justify-end'>
                            <p className="bg-gradient-to-r from-violet-600 to-fuchsia-500 py-2 px-3 text-white rounded-full">03</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className="bg-gradient-to-br from-violet-100 to-fuchsia-100 p-3 w-16 text-center rounded-xl">
                                <span className="text-violet-600">
                                    <Rocket className="h-10 w-10" />
                                </span>
                            </p>
                            <h3 className='mt-4 text-xl font-medium'>Start Creating</h3>
                            <p className='text-gray-500 text-center mb-5'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;