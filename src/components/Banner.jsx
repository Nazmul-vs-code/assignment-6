import React from 'react';
import Ract from '../assets/normal/Rectangle 4.png'
import banner from '../assets/normal/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className='text-3xl p-10 font-bold w-[90%] mx-auto flex items-center justify-between gap-3 my-12'>
            {/* Left side */}
            <div className="space-y-5">
                <div className="flex items-center gap-5 text-sm bg-[#4F39F6]/10 text-[#4F39F6] font-semibold px-3 py-1 rounded-full ">
                    <img src={Ract} alt="Rectangle" />
                    <p className=''>
                        New: AI-Powered Tools Available
                    </p>
                </div>

                <h1 className='text-3xl'>Supercharge YourDigital Workflow</h1>
                <p className='text-gray-400 text-[40%]'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>

                <div className="flex gap-2 items-center">
                    <button className='btn text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-md'>Explore Products</button>
                    <button className='btn btn-outline rounded-md'><CiPlay1 /> Watch Demo</button>
                </div>
            </div>
            {/* Right side */}
            <div className="">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;