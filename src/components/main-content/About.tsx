

'use client'

import React from "react";

export default function About() {
    return (
            <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-4 md:mb-6">
                            <span className="block sm:inline">About</span>
                            <span className="block sm:inline sm:ml-2">Cornerstone Renovation</span>
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        {/* <div className="w-16 sm:w-20 md:w-24 h-1 bg-black mx-auto"></div> */}
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <img 
                                src="/about.jpg" 
                                alt="Cornerstone Renovation team working on a home renovation project" 
                                className="rounded-lg shadow-lg w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                                    At Cornerstone Renovation, we believe that every home deserves to be built on a solid foundation — both in structure and in values. Just as Christ is the Cornerstone of our faith, we strive to make honesty, integrity, and respect the cornerstones of our work.
                                </p>
                                
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                                    We are a family-owned remodeling company serving Lakeville, Apple Valley, Burnsville, Eagan, Farmington, Savage, Prior Lake, Shakopee, Bloomington, Rosemount, Inver Grove Heights, Edina, Richfield, and surrounding areas of Minnesota.
                                </p>
                                
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                                    For us, renovation is more than just construction — it is about creating warm, lasting spaces where families can thrive, grow, and make memories together.
                                </p>
                                
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                                    With every project, whether it's a kitchen remodel, bathroom renovation, siding repair, deck restoration, cabinet refinishing, or handyman services, we bring a commitment to excellence and detail.
                                </p>
                                
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left font-medium">
                                    We stand by the words: <span className="text-blue-600">"Renovation You Can Trust."</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}