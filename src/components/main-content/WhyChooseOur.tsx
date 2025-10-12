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
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100 min-h-screen sm:min-h-0">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#063A55]/90 mb-3 sm:mb-4 md:mb-6">
                            <span className="block sm:inline">Why Choose</span>
                            <span className="block sm:inline sm:ml-2">Cornerstone Renovation</span>
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-[#063A55]/70 mx-auto rounded-full mb-3 sm:mb-4" />

                        <p className="text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                            Experience the difference that trust, quality, and family values bring to your home renovation project.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 max-w-6xl mx-auto">
                        {reasons.map((reason, index) => (
                                <div key={reason.title} className="flex flex-col items-center text-center p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10">
                                    <div className="mb-4 sm:mb-6">
                                        <div className="flex justify-center items-center text-[#063A55]/90">
                                            {reason.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-lg xl:text-2xl font-bold text-[#063A55]/90 mb-3 sm:mb-4">
                                        {reason.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-xs xl:text-sm leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}
