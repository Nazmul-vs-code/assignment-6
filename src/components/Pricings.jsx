import React from 'react';

const Pricings = () => {
    return (
        <div className='w-[90%] mx-auto my-16'>
            <div className='text-center flex flex-col gap-4 mb-12'>
                <h1 className='text-4xl font-bold text-gray-900'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500 max-w-xl mx-auto'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* Grid Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {/* Card 1: Starter */}
                <div className="bg-white shadow-lg border border-gray-100 p-8 rounded-[32px] flex flex-col items-start">
                    <h4 className="text-[#4F39F6] font-bold text-lg mb-1">Starter</h4>
                    <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
                    <h2 className="text-4xl font-bold mb-8">$0<span className="text-lg font-normal text-gray-400">/month</span></h2>
                    <div className="space-y-4 mb-8 w-full flex-grow text-left">
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Access to 10 free tools</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Basic templates</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Community support</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> 1 project per month</p>
                    </div>
                    <button className="btn w-full py-4 text-white font-semibold rounded-2xl border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                        Get Started Free
                    </button>
                </div>

                {/* Card 2: Pro (Linear Background) */}
                <div className="bg-gradient-to-br from-[#4F39F6] to-[#9514FA] shadow-xl p-8 rounded-[32px] flex flex-col items-start text-white">
                    <h4 className="font-bold text-lg mb-1">Pro</h4>
                    <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
                    <h2 className="text-4xl font-bold mb-8">$29<span className="text-lg font-normal opacity-80">/month</span></h2>
                    <div className="space-y-4 mb-8 w-full flex-grow text-left">
                        <p className="flex items-center gap-3"><span className="font-bold text-white">✓</span> Access to all premium tools</p>
                        <p className="flex items-center gap-3"><span className="font-bold text-white">✓</span> Unlimited templates</p>
                        <p className="flex items-center gap-3"><span className="font-bold text-white">✓</span> Priority support</p>
                        <p className="flex items-center gap-3"><span className="font-bold text-white">✓</span> Unlimited projects</p>
                        <p className="flex items-center gap-3"><span className="font-bold text-white">✓</span> Cloud sync</p>
                        <p className="flex items-center gap-3"><span className="font-bold text-white">✓</span> Advanced analytics</p>
                    </div>
                    <button className="btn w-full py-4 bg-white text-[#4F39F6] font-bold rounded-2xl border-none hover:bg-gray-100">
                        Start Pro Trial
                    </button>
                </div>

                {/* Card 3: Enterprise */}
                <div className="bg-white shadow-lg border border-gray-100 p-8 rounded-[32px] flex flex-col items-start">
                    <h4 className="text-[#4F39F6] font-bold text-lg mb-1">Enterprise</h4>
                    <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
                    <h2 className="text-4xl font-bold mb-8">$99<span className="text-lg font-normal text-gray-400">/month</span></h2>
                    <div className="space-y-4 mb-8 w-full flex-grow text-left">
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Everything in Pro</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Team collaboration</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Custom integrations</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Dedicated support</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> SLA guarantee</p>
                        <p className="text-gray-600 flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Custom branding</p>
                    </div>
                    <button className="btn w-full py-4 text-white font-semibold rounded-2xl border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricings;