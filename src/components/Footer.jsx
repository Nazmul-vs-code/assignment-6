import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#101727] text-gray-400 py-16'>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12'>
                
                <div className='space-y-4'>
                    <h2 className='text-white text-2xl font-bold'>DigiTools</h2>
                    <p className='leading-relaxed'>
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div className='space-y-4'>
                    <h4 className='text-white font-semibold text-lg'>Product</h4>
                    <p className='hover:text-white cursor-pointer'>Features</p>
                    <p className='hover:text-white cursor-pointer'>Pricing</p>
                    <p className='hover:text-white cursor-pointer'>Templates</p>
                    <p className='hover:text-white cursor-pointer'>Integrations</p>
                </div>

                <div className='space-y-4'>
                    <h4 className='text-white font-semibold text-lg'>Company</h4>
                    <p className='hover:text-white cursor-pointer'>About</p>
                    <p className='hover:text-white cursor-pointer'>Blog</p>
                    <p className='hover:text-white cursor-pointer'>Careers</p>
                    <p className='hover:text-white cursor-pointer'>Press</p>
                </div>

                <div className='space-y-4'>
                    <h4 className='text-white font-semibold text-lg'>Resources</h4>
                    <p className='hover:text-white cursor-pointer'>Documentation</p>
                    <p className='hover:text-white cursor-pointer'>Help Center</p>
                    <p className='hover:text-white cursor-pointer'>Community</p>
                    <p className='hover:text-white cursor-pointer'>Contact</p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-white font-semibold text-lg'>Social Links</h3>
                    <div className='flex gap-5 text-xl'>
                        <FaInstagram className='hover:text-white cursor-pointer' />
                        <FaFacebookF className='hover:text-white cursor-pointer' />
                        <FaXTwitter className='hover:text-white cursor-pointer' />
                    </div>
                </div>

            </div>

            <div className='w-[90%] mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                <p>© 2026 Digitools. All rights reserved.</p>
                
                <div className='flex gap-8'>
                    <p className='hover:text-white cursor-pointer text-sm'>Privacy Policy</p>
                    <p className='hover:text-white cursor-pointer text-sm'>Terms of Service</p>
                    <p className='hover:text-white cursor-pointer text-sm'>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;