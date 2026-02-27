import React from "react";
import { assets } from "../assets/assets";

function Footer() {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-left'>
                {/* ----------Left section-------------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        Thanks for joining with us. We are always trying to get you a complete service.
                        You can view your daily schedule, reach patients' appointments at home!
                    </p>
                </div>

                {/* ----------Center section-------------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* ----------Right section-------------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 9372015690</li>
                        <li>Medicare05@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* -------------Copyright text--------- */}
                <hr className="my-4" />
                <p className="text-sm text-gray-500">
                    Copyright 2025 © Medicare - All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
