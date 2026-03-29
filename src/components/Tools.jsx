import React from 'react';
import Write from '../assets/products/writing_2327400 1.png'

const Tools = () => {
    return (
        <div className='w-[90%] mx-auto p-10'>
            <div className='border
             border-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 rounded-md'>
                <div className="card w-80 bg-white shadow-xl border border-gray-200 p-6 rounded-3xl">
                    <div className="flex justify-between items-start mb-4">
                        <button className='btn rounded-[30px] p-2'>
                            <img src={Write} alt="Icon" className="" />

                        </button>
                        <span className="badge bg-[#4F39F6]/10 text-[#4F39F6] border-none font-bold">v1.0</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-2">Pro Plan</h2>
                    <p className="text-gray-500 mb-6 text-sm">Advanced features for power users.</p>

                    <h4 className="text-3xl font-bold mb-2">
                        $29<span className="text-lg font-normal">/mo</span>
                    </h4>

                    <div className="space-y-3 my-3">

                        <p className="text-gray-600 flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Unlimited AI generations
                        </p>

                        <p className="text-gray-600 flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Unlimited AI generations
                        </p>

                        <p className="text-gray-600 flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Unlimited AI generations
                        </p>

                    </div>

                    <button className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white text-lg">
                        Buy Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Tools;