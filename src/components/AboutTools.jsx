import React, { use, useState } from 'react';
import AvailableProducts from './AvailableProducts';
import SelectedCards from './SelectedCards';

const AboutTools = ({ productPromise }) => {
    const products = use(productPromise);

    const [selectedType, setSelectedType] = useState('available');
    console.log(selectedType, "Selected type is here")

    const [selectedCarts, setSelectedCarts] = useState([]);

    return (
        <div className='flex flex-col bg-gray-100 min-h-screen'>
            <div className="mx-auto text-center w-2/5 space-y-3">
                <h1 className='font-semibold text-3xl'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setSelectedType('available')}
                        className={`btn
                        ${selectedType === 'available' ? 'text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]' : ''}`
                        }>Products</button>

                    <button
                        onClick={() => setSelectedType('cart')}
                        className={`btn
                        ${selectedType === 'cart' ? 'text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]' : ''}`
                        }>Cart ({selectedCarts.length})</button>
                </div>
            </div>

            <div className='w-[90%] mx-auto p-10'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 rounded-md'>

                    {
                        selectedType == 'available' ?
                            <AvailableProducts products={products}
                                selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}
                            />
                            :
                            <div className="col-span-full">
                                <SelectedCards selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default AboutTools;