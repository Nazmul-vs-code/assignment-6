import React from 'react';
import Man from "../assets/normal/user.png"
import Pakage from "../assets/normal/package.png"
import Rocket from "../assets/normal/rocket.png"

const Steps = () => {
    return (
        <div className='w-[90%] max-w-7xl mx-auto py-20 px-6'>
            <div className="text-center mb-16">
                <h1 className='text-4xl font-extrabold text-gray-900 mb-4'>Get Started in 3 Steps</h1>
                <p className='text-gray-500 text-lg max-w-xl mx-auto'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                <div className="relative bg-white p-10 rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center text-center">
                    
                    <span className='absolute -top-5 -right-5 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white font-black text-xl w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg'>
                        01
                    </span>
                    
                    <div className="bg-gray-50 p-8 rounded-full mb-8 border border-gray-100">
                        <img src={Man} alt="User" className="w-20 h-20 object-contain" />
                    </div>
                    
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Create Account</h2>
                    <p className='text-gray-500 leading-relaxed text-base'>
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                    
                    <div className="mt-8 w-16 h-1.5 bg-[#4F39F6]/20 rounded-full"></div>
                </div>
                
                <div className="relative bg-white p-10 rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center text-center">
                    
                    <span className='absolute -top-5 -right-5 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white font-black text-xl w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg'>
                        02
                    </span>
                    
                    <div className="bg-gray-50 p-8 rounded-full mb-8 border border-gray-100">
                        <img src={Pakage} alt="Package" className="w-20 h-20 object-contain" />
                    </div>
                    
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Choose Products</h2>
                    <p className='text-gray-500 leading-relaxed text-base'>
                        SBrowse our catalog and select the toolsthat fit your needs.
                    </p>
                    
                    <div className="mt-8 w-16 h-1.5 bg-[#4F39F6]/20 rounded-full"></div>
                </div>
                
                <div className="relative bg-white p-10 rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center text-center">
                    
                    <span className='absolute -top-5 -right-5 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white font-black text-xl w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg'>
                        03
                    </span>
                    
                    <div className="bg-gray-50 p-8 rounded-full mb-8 border border-gray-100">
                        <img src={Rocket} alt="Rocket" className="w-20 h-20 object-contain" />
                    </div>
                    
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Start Creating</h2>
                    <p className='text-gray-500 leading-relaxed text-base'>
                        Download and start using your premium tools immediately.
                    </p>
                    
                    <div className="mt-8 w-16 h-1.5 bg-[#4F39F6]/20 rounded-full"></div>
                </div>

            </div>
        </div>
    );
};

export default Steps;