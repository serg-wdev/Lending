'use client'

import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import BurgerMenu from './ui/BurgerMenu'

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
                        href="https://maps.app.goo.gl/qiPkPwXGwAcZgNhi6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=cornerstone_renovation@outlook.com&su=Home%20Renovation%20Inquiry&body=Hello%20Cornerstone%20Renovation%20LLC,%0A%0AI%20am%20interested%20in%20your%20renovation%20services.%20Please%20contact%20me%20to%20discuss%20my%20project.%0A%0AThank%20you!" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        href="https://maps.app.goo.gl/qiPkPwXGwAcZgNhi6" 
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
                        href="google.com/maps/place/Cornerstone+Renovation+LLC,+Galaxie+Ave,+Apple+Valley,+MN+55124/data=!4m2!3m1!1s0x87f63184403b0ef1:0xcd29a64f7d4553cb?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjM4LjIYACDIvAcqmQEsOTQyNjc3MjcsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNjI3MzksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjUsOTQyODY4NzZCAlVT&skid=05ce604c-3b52-41fb-a487-758b9a50114c" 
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