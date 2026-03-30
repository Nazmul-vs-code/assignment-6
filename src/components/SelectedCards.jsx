import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const SelectedCards = ({ setSelectedCarts, selectedCarts }) => {

    const handleDelete = (id) => {
        const remainingCarts = selectedCarts.filter(cart => cart.id !== id);
        setSelectedCarts(remainingCarts);
        toast.error("😔 Product removed from cart!");
    }

    return (
        <div className='border border-green-500 mx-auto p-5 w-full flex flex-col min-h-[300px]'>

            {
                selectedCarts.length != 0 ?
            <div className="">


                {/* The List of Products */}
                <div className="flex-grow space-y-4">
                    {selectedCarts.map((selectedcart) => (
                        <div key={selectedcart.id} className="flex justify-between items-center rounded-md border border-gray-300 p-4 bg-white shadow-sm">
                            <div className='flex items-center gap-4'>
                                <img src={selectedcart.icon} alt="Icon" className="w-16 h-16" />
                                <div>
                                    <h3 className="font-bold text-lg">{selectedcart.name}</h3>
                                    <p className="text-gray-500">${selectedcart.price}</p>
                                </div>
                            </div>
                            <button onClick={ () => handleDelete(selectedcart.id)} 
                            className='btn btn-ghost text-red-500 text-2xl'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    ))}
                </div>

                {/* The Checkout Button at the Bottom */}
                <div className="mt-4">
                    <div className="flex items-center justify-between gap-2">
                        <span>Total : </span>
                        {/* Change this line */}
                        <span className="font-bold">$ {selectedCarts.reduce((acc, item) => acc + item.price, 0)}</span>
                    </div>
                    <button
                    onClick={() => {
                        toast.success(`
                            😄 😊 😃 😁
                            Proceeding to checkout!`);
                        setSelectedCarts([]);
                    }}
                    className='btn w-full text-white text-lg rounded-xl border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 '>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
            : 
            <div>
                "NOTHING FOUND"
            </div>
            }
        </div>
    );
};

export default SelectedCards;