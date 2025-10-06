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
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-20 flex flex-col justify-center items-center text-center min-h-screen max-w-7xl">
                    <h1 className="text-neutral-100 font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                        <span className="block sm:inline">Cornerstone</span>
                        <span className="block sm:inline sm:ml-2">Renovation</span>
                    </h1>

                    <p className="text-neutral-200 sm:text-neutral-300 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl">
                        Renovation You Can Trust
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center w-full max-w-lg sm:max-w-none">
                        <button
                                onClick={() => scrollToSection("services")}
                                className="bg-blue-600 text-neutral-200 rounded-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] font-semibold"
                        >
                            Our Services
                        </button>

                        <button
                                onClick={() => scrollToSection("contact-form")}
                                className="bg-transparent text-neutral-200 border-2 border-white rounded-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] font-semibold"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* стрелка вниз */}
                <button
                        onClick={() => scrollToSection("about")}
                        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center shadow-lg hover:bg-black/40 hover:scale-110 transition-all duration-300 cursor-pointer z-50 border border-white/20 hover:border-white/40"
                >
                    <div className="text-2xl sm:text-3xl md:text-4xl hover:translate-y-1 transition-transform duration-300">
                        <IoIosArrowDown />
                    </div>
                </button>
            </section>
    );
}