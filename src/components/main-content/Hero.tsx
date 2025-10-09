'use client'

import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
    return (
        <section
            className="relative z-0 w-full min-h-[100svh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: "url('/bg-image.jpeg')",
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover'
            }}
        >
            {/* затемнение */}
            <div className="absolute inset-0 bg-black/40 sm:bg-black/50 pointer-events-none z-10" />

            {/* контент */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-20 flex flex-col justify-center items-center text-center min-h-screen max-w-7xl">
                <h1 className="text-neutral-100 font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                    <span className="block sm:inline">Cornerstone</span>
                    <span className="block sm:inline sm:ml-2">Renovation</span>
                </h1>

                <p className="text-neutral-200 sm:text-neutral-300 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl">
                    Renovation You Can Trust
                </p>

                <div className="flex justify-center w-full relative z-30 mt-3 sm:mt-0">
                    <a
                        href="#contact-form"
                        className="bg-orange-400 text-white rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl hover:bg-orange-500 transition-colors duration-300 w-4/5 sm:w-auto min-w-[120px] sm:min-w-[200px] font-semibold shadow-lg cursor-pointer relative z-40 text-center"
                    >
                        Free Estimate
                    </a>
                </div>
            </div>

            {/* стрелка вниз */}
            <a
                href="#about"
                className="absolute bottom-10 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-50 border-2 border-white/40 hover:border-white/60"
            >
                <div className="text-2xl sm:text-3xl md:text-4xl hover:translate-y-1 transition-transform duration-300">
                    <IoIosArrowDown />
                </div>
            </a>
        </section>
    );
}