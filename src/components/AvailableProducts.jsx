import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product , setSelectedCarts , selectedCarts}) => {
    // console.log(products, "Products found here")

    const [isSelected, setIsSelected] = useState(false);
    const handleAddToCart = () => {
        setIsSelected(true);
        toast.success(`${product.name} added to cart!`);
        setSelectedCarts([...selectedCarts, product]);
        

    }

    return (

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

            <button
                disabled={isSelected}
                onClick={handleAddToCart}
                className={`btn w-full 
                
                ${isSelected ? "bg-green-400 "

                        : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none "
                    }
                    text-lg rounded-3xl text-white
                    `
                }>
                {isSelected ? "✔ Added to cart" : "Buy Now"}
            </button>
        </div>
    )


};



const AvailableProducts = ({ products , setSelectedCarts , selectedCarts }) => {
    return (
        <>
            {
                products.map(product => <ProductCard  key={product.id} product={product} setSelectedCarts={setSelectedCarts} selectedCarts={selectedCarts}></ProductCard>)
            }
        </>
    );
};

export default AvailableProducts;