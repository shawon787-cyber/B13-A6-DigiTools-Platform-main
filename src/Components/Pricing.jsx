import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='py-16'>
            <div className='max-w-7xl mx-auto px-4'>
                <h3 className='text-4xl lg:text-5xl text-center font-bold'>Simple, Transparent Pricing</h3>
                <p className='text-gray-600 text-center mt-3'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
               <div className='grid md:grid-cols-3 mt-8 gap-6'>
                    <div className='bg-gray-100 p-8 rounded-2xl flex flex-col justify-between'>
                        <div>
                            <h3 className='text-xl font-medium'>Starter</h3>
                        <p className='text-gray-500 text-xs'>Perfect for getting started</p>
                        <p className='text-xs mt-3 text-gray-600'><span className='text-xl font-medium text-black'>$0</span> /Month</p>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Unlimited AI generations</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Unlimited AI generations</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Unlimited AI generations</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Unlimited AI generations</span></span>
                        </div>
                        <button className='px-6 py-3 text-white font-semibold rounded-full w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 text-xl mt-5'>Get Started Free</button>
                    </div>
                    <div className='bg-gray-100 p-8 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 text-white shadow-2xl'>
                        <div className='relative'>
                            <p className='absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 rounded-full bg-amber-200 text-amber-600 font-medium'>
                                Most Popular
                            </p>
                        </div>
                        <h3 className='text-xl font-medium'>Pro</h3>
                        <p className=' text-xs'>Best for professionals</p>
                        <p className='text-xs mt-3'><span className='text-xl font-medium '>$29</span> /Month</p>
                        <span className='flex items-center text-sm mt-2'><Check className=''></Check><span className=''>Access to all premium tools</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className=''></Check><span className=''>Unlimited Templates</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className=''></Check><span className=''>Unlimited Support</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className=''></Check><span className=''>Unlimited Projects</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className=''></Check><span className=''>Cloud Sync</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className=''></Check><span className=''>Advance analytics</span></span>
                        <button className='px-6 py-3 text-violet-600 bg-white font-semibold rounded-full w-full  text-xl mt-5'>Get Started Free</button>
                    </div>
                    <div className='bg-gray-100 p-8 rounded-2xl'>
                        <h3 className='text-xl font-medium'>Enterprise</h3>
                        <p className='text-gray-500 text-xs'>For teams and businesses</p>
                        <p className='text-xs mt-3 text-gray-600'><span className='text-xl font-medium text-black'>$99</span> /Month</p>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Everything in Pro</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Team collaboration</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Custom integrations</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Dedicated support</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>Unlimited AI generations</span></span>
                        <span className='flex items-center text-sm mt-2'><Check className='text-green-600'></Check><span className='text-gray-600'>SLA guarantee</span></span>
                        <button className='px-6 py-3 text-white font-semibold rounded-full w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 text-xl mt-5'>Get Started Free</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Pricing;