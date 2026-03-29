import React from 'react';

const AboutTools = () => {
    return (
        <div className='flex  p-10 items-center justify-center bg-gray-100'>
            <div className="mx-auto text-center w-2/5 space-y-3">
            <h1 className='font-semibold text-3xl'>Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            <div className="flex items-center justify-center">
                <button className='btn text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Products</button>
                <button className='btn'>Cart (2)</button>
            </div>
            </div>
        </div>
    );
};

export default AboutTools;