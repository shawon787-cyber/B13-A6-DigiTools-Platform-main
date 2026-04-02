import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white">
 <div className='max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-4 border-b-1 border-amber-50/10 p-10'>
                    <nav className='flex flex-col'>
                        <h6 className="text-xl font-medium mb-2">Product</h6>
                        <div className='flex flex-col text-gray-400 text-sm gap-2'>
                            <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integration</a>
                        </div>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="text-xl font-medium mb-2">Company</h6>
                        <div className='flex flex-col text-gray-400 text-sm gap-2'>
                            <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Help Center</a>
                        </div>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="text-xl font-medium mb-2">Resources</h6>
                        <div className='flex flex-col text-gray-400 text-sm gap-2'>
                            <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Services</a>
                        </div>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="text-xl font-medium mb-3">Social Icons</h6>
                        <div className='flex items-center gap-4'>
                            <a className="link link-hover"><FaFacebook></FaFacebook></a>
                        <a className="link link-hover"><FaTwitter></FaTwitter></a>
                        <a className="link link-hover"><FaInstagram></FaInstagram></a>
                        </div>
                    </nav>
  
 </div>
</footer>
            <div className='bg-gray-900  px-10 py-4'>
                <footer className="flex justify-between text-xs text-gray-400 max-w-7xl mx-auto">
                 <p> © 2026 Digitools. All rights reserved.</p>                
                <nav className='flex gap-4'>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
            </footer>
            </div>
        </div>
    );
};

export default Footer;