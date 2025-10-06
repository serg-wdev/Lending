'use client'

import React, { useEffect, useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
    // состояние для отслеживания скролла
    const [scrolled, setScrolled] = useState(false);
    // состояние для мобильного меню
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // состояние для уведомления о копировании email
    const [showEmailNotification, setShowEmailNotification] = useState(false);

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

    // Блокируем скролл когда мобильное меню открыто
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        }

        // Очищаем стили при размонтировании компонента
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        };
    }, [isMobileMenuOpen]);

    // функция для скролла наверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
    };

    // функция для скролла к секциям
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    // функция для копирования email
    const copyEmailToClipboard = async (e: React.MouseEvent) => {
        e.preventDefault();
        const email = 'cornerstone_renovation@outlook.com';
        
        try {
            await navigator.clipboard.writeText(email);
            setShowEmailNotification(true);
            setTimeout(() => {
                setShowEmailNotification(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <header className={`fixed top-0 left-0 z-20 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3 transition-colors duration-300 ${
            scrolled ? "bg-black/70 backdrop-blur-sm shadow-md text-gray-300" : "bg-transparent text-white"
        }`}>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <h2 className='font-bold text-base sm:text-base md:text-lg lg:text-xl'>
                    <button 
                        onClick={scrollToTop}
                        className="hidden sm:inline bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl font-extrabold tracking-wide hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 transition-all duration-300 cursor-pointer"
                    >
                        Cornerstone Renovation
                    </button>
                    <button 
                        onClick={scrollToTop}
                        className={`sm:hidden bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl font-extrabold tracking-wide hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 transition-all duration-300 cursor-pointer ${
                            scrolled ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Cornerstone Renovation
                    </button>
                </h2>
                
                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-4 xl:gap-6 items-center text-xs xl:text-sm'>
                    <a 
                        href="tel:+19524658195" 
                        className="relative flex items-center gap-1 xl:gap-2 group"
                        aria-label="Call us"
                    >
                        <FaPhone size={12} />
                        <span className="hidden xl:inline">(952) 465-8195</span>
                        <span className="xl:hidden">Call</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a 
                        href="https://maps.google.com/?q=Apple+Valley,+MN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative flex items-center gap-1 xl:gap-2 group"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={12} />
                        <span className="hidden xl:inline">Apple Valley, MN</span>
                        <span className="xl:hidden">Location</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        onClick={copyEmailToClipboard}
                        className="relative flex items-center gap-1 xl:gap-2 group"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={12} />
                        <span className="hidden xl:inline">cornerstone_renovation@outlook.com</span>
                        <span className="xl:hidden">Email</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
                
                {/* Tablet Navigation */}
                <div className='hidden md:flex lg:hidden gap-3 items-center text-xs'>
                    <a 
                        href="tel:+19524658195" 
                        className="relative flex items-center gap-1 group"
                        aria-label="Call us"
                    >
                        <FaPhone size={12} />
                        Call
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        onClick={copyEmailToClipboard}
                        className="relative flex items-center gap-1 group"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={12} />
                        Email
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
                
                {/* Mobile Navigation */}
                <div className='md:hidden flex items-center gap-3'>
                    <a 
                        href="tel:+19524658195" 
                        className="relative flex items-center gap-1 text-sm group"
                        aria-label="Call us"
                    >
                        <FaPhone size={12} />
                        <span className="hidden xs:inline">Call</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    
                    {/* Burger Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="ml-2 p-2 hover:text-blue-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[60] top-0 left-0 right-0 bottom-0 w-screen h-screen min-h-screen" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh'}}>
                    {/* Close button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-4 right-4 p-3 text-white hover:text-blue-400 transition-colors"
                        aria-label="Close menu"
                    >
                        <FaTimes size={24} />
                    </button>
                    
                    <div className="flex flex-col justify-center items-center h-full px-8 space-y-8">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors py-4"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors py-4"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("contact-form")}
                            className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors py-4"
                        >
                            Contact
                        </button>
                        
                        <div className="border-t border-gray-600 pt-8 mt-8 w-full max-w-xs">
                            <div className="space-y-6">
                                <a 
                                    href="tel:+19524658195" 
                                    className="flex items-center justify-center gap-3 text-white hover:text-blue-400 transition-colors py-3 text-lg"
                                >
                                    <FaPhone size={20} />
                                    (952) 465-8195
                                </a>
                                <a 
                                    href="mailto:cornerstone_renovation@outlook.com"
                                    onClick={copyEmailToClipboard}
                                    className="flex items-center justify-center gap-3 text-white hover:text-blue-400 transition-colors py-3 text-lg"
                                >
                                    <FaEnvelope size={20} />
                                    Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Уведомление о копировании email */}
            {showEmailNotification && (
                <div className="fixed top-12 right-16 bg-green-500 text-white px-3 py-1 rounded text-xs font-medium z-[70] transition-all duration-300 shadow-md">
                    Email copied!
                </div>
            )}
        </header>
    )
}