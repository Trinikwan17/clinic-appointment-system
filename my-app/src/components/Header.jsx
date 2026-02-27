import React from "react";
import { assets } from "../assets/assets";

function Header() {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 items-center'>

            {/* -------------------Left side----------------- */}
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 py-10 md:py-[5vw] text-center md:text-left'>
                <p className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug'>
                    Book Appointment <br /> With Trusted Doctors
                </p>

                <div className='flex flex-col items-center md:flex-row gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="Doctors" />
                    <p className='text-white text-sm md:text-base leading-relaxed'>
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        schedule your appointment and get the best treatment.
                    </p>
                </div>

                <a href="#speciality" className='flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book Appointment
                    <img className='w-3' src={assets.arrow_icon} alt="Arrow" />
                </a>
            </div>

            {/* -------------------Right side----------------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absulte bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Header Image" />
            </div>

        </div>
    );
}

export default Header;
