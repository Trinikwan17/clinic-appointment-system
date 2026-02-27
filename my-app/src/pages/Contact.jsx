import React from "react";
import { assets } from "../assets/assets";
function Contact()
{

    return (
        <div>
            <div className="text-center text-2xl pt-10 text-gray-500">
                <p>Contact <span className="text-gray-700 font-semibold">Us</span></p>
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm text-left ">
                <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt=""/>
                <div className="flex flex-col justify-center items-start gap-6 ">
                    <p className="font-semibold text-lg text-gray-600">Our Office</p>
                    <p className="text-gray-500">Mulund Goregaon Link Road, <br/> Mulund West, Mumbai-400078</p>
                    <p className="text-gray-500">Tel: +91-22-6799-4444<br/>Email: Fortishospital90@gmail.com</p>
                    <p className="font-semibold text-lh text-gray-600">Careers at MEDICARE</p>
                    <p className="text-gray-500">Learn more about our teams and job openings.</p>
                    <button className="border border-black px-8 py- 4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
                </div>
            </div>
     
        </div>
    );
}
export default Contact;