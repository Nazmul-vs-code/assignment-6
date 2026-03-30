import React  from 'react';

const AvailableProducts = ({ products }) => {
    // console.log(products, "Products found here")
    return (


        products.map(product => (


            <div className="card w-80 bg-white shadow-xl border border-gray-200 p-6 rounded-3xl mx-auto">
                <div className="flex justify-between items-start mb-4">
                    <button className='btn rounded-[30px] p-2'>
                        <img src={product.icon} alt="Icon" className="" />

                    </button>
                    <span className="badge bg-[#4F39F6]/10 text-[#4F39F6] border-none font-bold">{product.tagType}</span>
                </div>

                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-500 mb-6 text-sm">{product.description}</p>

                <h4 className="text-3xl font-bold mb-2">
                    ${product.price}<span className="text-lg font-normal">{product.period}</span>
                </h4>

                <div className="space-y-3 my-3">

                    {
                        product.features.map((feature, index) => (
                            <p key={index} className="text-gray-600 flex items-center gap-2">
                                <span className="text-green-500 font-bold">✓</span> {feature.text}
                            </p>
                        ))
                    }



                </div>

                <button className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white text-lg rounded-3xl">
                    Buy Now
                </button>
            </div>
        )
        )


    );
};

export default AvailableProducts;