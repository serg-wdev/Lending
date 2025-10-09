'use client'

import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import BurgerMenu from './BurgerMenu'

export default function Header() {
    // состояние для мобильного меню
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // функция для скролла наверх
    const scrollToTop = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
    };


    return (
        <header className="fixed top-0 left-0 z-20 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2 bg-[#063A55]/70 backdrop-blur-md shadow-lg text-gray-300 transition-all duration-300 border-b border-[#063A55]/70">
            {/* Desktop/Tablet Layout */}
            <div className='hidden md:flex justify-between items-center max-w-7xl mx-auto h-12 sm:h-14'>
                {/* Logo and Company Name */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    <img src="/logo.svg" alt="Cornerstone Renovation" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg" />
                    <button 
                        className="hidden sm:inline bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent font-bold text-sm sm:text-base lg:text-lg tracking-wide"
                    >
                        Cornerstone Renovation
                    </button>
                </div>
                
                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-6 xl:gap-8 items-center'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Call us"
                    >
                        <FaPhone size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://maps.google.com/?q=Apple+Valley,+MN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={18} className="text-orange-400" />
                    </a>
                </div>
                
                {/* Tablet Navigation */}
                <div className='hidden md:flex lg:hidden gap-6 items-center'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Call us"
                    >
                        <FaPhone size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://maps.google.com/?q=Apple+Valley,+MN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={18} className="text-orange-400" />
                    </a>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className='md:hidden relative flex items-center justify-between max-w-7xl mx-auto h-12 sm:h-14'>
                {/* Burger Menu Button - Left */}
                <BurgerMenu 
                    isOpen={isMobileMenuOpen}
                    onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    onClose={() => setIsMobileMenuOpen(false)}
                />

                {/* Logo - Absolute Center */}
                <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center'>
                    <img src="/logo.svg" alt="Cornerstone Renovation" className="w-8 h-8 bg-white rounded-full shadow-lg" />
                </div>

                {/* Icons - Right */}
                <div className='flex items-center gap-4'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Call us"
                    >
                        <FaPhone size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://maps.google.com/?q=Apple+Valley,+MN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={18} className="text-orange-400" />
                    </a>
                </div>
            </div>

        </header>
    )
}