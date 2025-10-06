'use client'

import React, { useEffect, useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

export default function Header() {
    // состояние для отслеживания скролла
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // функция для скролла наверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className={`fixed top-0 left-0 z-20 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 transition-colors duration-300 ${
            scrolled ? "bg-black/70 backdrop-blur-sm shadow-md text-gray-300" : "bg-transparent text-white"
        }`}>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <h2 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl'>
                    <button 
                        onClick={scrollToTop}
                        className="hidden sm:inline bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl font-extrabold tracking-wide hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 transition-all duration-300 cursor-pointer"
                    >
                        Cornerstone Renovation
                    </button>
                    <button 
                        onClick={scrollToTop}
                        className="sm:hidden bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl font-extrabold tracking-wide hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 transition-all duration-300 cursor-pointer"
                    >
                        Cornerstone
                    </button>
                </h2>
                
                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-4 xl:gap-6 items-center text-xs xl:text-sm'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center gap-1 xl:gap-2 hover:text-blue-400 transition-colors"
                        aria-label="Call us"
                    >
                        <FaPhone size={12} />
                        <span className="hidden xl:inline">(952) 465-8195</span>
                        <span className="xl:hidden">Call</span>
                    </a>
                    <a 
                        href="https://maps.google.com/?q=Apple+Valley,+MN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 xl:gap-2 hover:text-blue-400 transition-colors"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={12} />
                        <span className="hidden xl:inline">Apple Valley, MN</span>
                        <span className="xl:hidden">Location</span>
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        className="flex items-center gap-1 xl:gap-2 hover:text-blue-400 transition-colors"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={12} />
                        <span className="hidden xl:inline">cornerstone_renovation@outlook.com</span>
                        <span className="xl:hidden">Email</span>
                    </a>
                </div>
                
                {/* Tablet Navigation */}
                <div className='hidden md:flex lg:hidden gap-3 items-center text-xs'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                        aria-label="Call us"
                    >
                        <FaPhone size={12} />
                        Call
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={12} />
                        Email
                    </a>
                </div>
                
                {/* Mobile Navigation */}
                <div className='md:hidden flex items-center gap-2'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center gap-1 hover:text-blue-400 transition-colors text-xs"
                        aria-label="Call us"
                    >
                        <FaPhone size={12} />
                        <span className="hidden xs:inline">Call</span>
                    </a>
                </div>
            </div>
        </header>
    )
}