import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Myappointment() {
    const { doctors } = useContext(AppContext);

    return (
        <div className="p-4">
            <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-xl">My Appointments</p>

            <div className="flex flex-col gap-6 mt-6">
                {doctors.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 border-b pb-6">
                        {/* Doctor Image */}
                        <div className="flex-shrink-0">
                            <img className="w-32 h-32 object-cover rounded bg-indigo-50" src={item.image} alt={item.name} />
                        </div>

                        {/* Doctor Details */}
                        <div className="flex-1 text-sm text-zinc-600 text-left">
                            <p className="text-neutral-800 font-semibold text-lg">{item.name}</p>
                            <p className="mb-2">{item.speciality}</p>
                            <p className="text-zinc-700 font-medium">Address:</p>
                            <p className="text-xs">{item.address.line1}</p>
                            <p className="text-xs">{item.address.line2}</p>
                            <p className="text-xs mt-2">
                                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span> 25, March, 2025 | 8:30 PM
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 justify-center sm:justify-start">
                            <button className="text-sm text-stone-500 text-center min-w-[150px] py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                                Pay Online
                            </button>
                            <button className="text-sm text-stone-500 text-center min-w-[150px] py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Myappointment;
