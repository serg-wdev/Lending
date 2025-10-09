'use client'

import React from "react";

import { MdOutlineHandshake } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const reasons = [
    { title: "Trusted Quality", desc: "We stand by our work with guaranteed satisfaction and professional craftsmanship", icon: <MdOutlineHandshake size={60}/> },
    { title: "Family Values", desc: "We treat every home like our own, bringing care and attention to every project", icon: <MdFamilyRestroom size={60}/> },
    { title: "Affordable Solutions", desc: "High-quality renovation at honest prices that fit your budget", icon: <GiReceiveMoney size={60}/> },
];

export default function WhyChooseUs() {
    return (
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 min-h-screen sm:min-h-0">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                            <span className="block sm:inline">Why Choose</span>
                            <span className="block sm:inline sm:ml-2">Cornerstone Renovation</span>
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        <p className="text-gray-700 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                            Experience the difference that trust, quality, and family values bring to your home renovation project.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 max-w-6xl mx-auto">
                        {reasons.map((reason, index) => (
                                <div key={reason.title} className="flex flex-col items-center text-center bg-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 shadow-lg border border-gray-100">
                                    <div className="mb-4 sm:mb-6">
                                        <div className="flex justify-center items-center p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-orange-100 text-orange-600 shadow-lg">
                                            {reason.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-lg xl:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        {reason.title}
                                    </h3>
                                    
                                    <p className="text-gray-700 text-sm sm:text-base md:text-sm lg:text-xs xl:text-sm leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}
