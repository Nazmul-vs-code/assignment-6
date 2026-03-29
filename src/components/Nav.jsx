import React from 'react';
import { SlBasket } from 'react-icons/sl';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-[90%] mx-auto mt-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="btn text-xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#8807eb] bg-clip-text text-transparent border-none">
                    DigiTools
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn'>
                    <SlBasket></SlBasket>
                </button>
                <button className="btn">Login</button>
                <a className="btn text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
            </div>
        </div>
    );
};

export default Nav;