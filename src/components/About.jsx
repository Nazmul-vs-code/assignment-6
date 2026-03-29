import React from 'react';

const About = () => {
    return (
        <div className='border border-red-600 p-4 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="flex mx-auto w-2/3 items-center justify-around">

                <div className="border border-none border-l border-gray-400">
                    <h3 className='font-bold text-2xl'>50K+</h3>
                    <p>Active Users</p>
                </div>
                <div className="border-l border-r border-gray-400 px-6">
                    <h3 className='font-bold text-2xl'>50K+</h3>
                    <p >Active Users</p>
                </div>
                <div className="">
                    <h3 className='font-bold text-2xl'>4.9</h3>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default About;