import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function RelatedDoc({ speciality, docID }) { // Fixed destructuring of props
    const { doctors } = useContext(AppContext);
    const [relDoc, setRelDoc] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docID);
            setRelDoc(doctorsData);
        }
    }, [doctors, speciality, docID]);

    return (
        <div className='flex flex-col items-center gap-3 sm:gap-4 my-10 text-gray-900 px-3 sm:px-5'>
            <h1 className='text-2xl sm:text-3xl font-semibold text-center'>Top Doctors to Book</h1>
            <p className='text-center text-gray-600 text-sm sm:text-base max-w-2xl'>
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-6'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='border border-blue-200 rounded-xl overflow-hidden shadow hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer bg-white'
                        key={index}
                    >
                        <div className='bg-blue-100'>
                            <img className='w-full h-40 sm:h-48 object-contain' src={item.image} alt="" />
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center justify-center gap-2 text-green-500 text-sm mb-2'>
                                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>

                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'>
                More
            </button>
        </div>
    );
}

export default RelatedDoc;