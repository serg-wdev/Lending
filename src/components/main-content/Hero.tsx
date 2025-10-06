'use client'

import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
            <section
                    className="relative z-0 w-full min-h-[100svh] bg-cover bg-center bg-fixed flex items-center justify-center"
                    style={{
                        backgroundImage: "url('/bg-image.jpeg')",
                    }}
            >
                {/* затемнение */}
                <div className="absolute inset-0 bg-black/40 sm:bg-black/50 pointer-events-none z-10" />

                {/* контент */}
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-20 flex flex-col justify-center items-center text-center min-h-screen max-w-7xl">
                    <h1 className="text-neutral-100 font-bold leading-tight mb-3 sm:mb-4 md:mb-6 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                        <span className="block sm:inline">Cornerstone</span>
                        <span className="block sm:inline sm:ml-2">Renovation</span>
                    </h1>

                    <p className="text-neutral-200 sm:text-neutral-300 mb-6 sm:mb-8 md:mb-10 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl">
                        Renovation You Can Trust
                    </p>

                    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center w-full max-w-md xs:max-w-none">
                        <button
                                onClick={() => scrollToSection("services")}
                                className="bg-blue-600 text-neutral-200 rounded-md px-4 xs:px-6 md:px-8 py-2 md:py-3 text-xs xs:text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-colors duration-300 w-full xs:w-auto min-w-[140px] sm:min-w-[160px]"
                        >
                            Our Services
                        </button>

                        <button
                                onClick={() => scrollToSection("contact-form")}
                                className="bg-transparent text-neutral-200 border border-white rounded-md px-4 xs:px-6 md:px-8 py-2 md:py-3 text-xs xs:text-sm sm:text-base md:text-lg hover:bg-white/20 transition-colors duration-300 w-full xs:w-auto min-w-[140px] sm:min-w-[160px]"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* стрелка вниз */}
                <button
                        onClick={() => scrollToSection("about")}
                        className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm text-white rounded-full w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center shadow-lg hover:bg-black/40 transition-all duration-300 cursor-pointer group z-30"
                >
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl group-hover:translate-y-1 transition-transform duration-300">
                        <IoIosArrowDown />
                    </div>
                </button>
            </section>
    );
}