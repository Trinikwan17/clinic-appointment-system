import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const navigate = useNavigate();
    
    const [token, setToken] = useState(true)

    return (
        <div className='w-full flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-8'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />

            <ul className='hidden md:flex items-center gap-12 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-full left-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 text-left'>
                                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                        : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
                }
            </div>
        </div>
    );
}

export default Navbar;