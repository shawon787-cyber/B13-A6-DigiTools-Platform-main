import React from 'react';

const Rating = () => {
    return (
        <div className="bg-gradient-to-r from-violet-700 to-fuchsia-600 mb-10">
            <div className='max-w-7xl mx-auto px-4 text-white text-center flex justify-between py-10'>
                <div className='border-r-2 p-4 w-full'>
                    <h2 className='font-bold text-3xl lg:text-6xl'>50k+</h2>
                    <p className='text-gray-300'>Active Users</p>
                </div>
                <div className='border-r-2 p-4 w-full'>
                    <h2 className='font-bold text-3xl lg:text-6xl'>200+</h2>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>
                <div className='p-4 w-full'>
                    <h2 className='font-bold text-3xl lg:text-6xl'>4.9</h2>
                    <p className='text-gray-300'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;