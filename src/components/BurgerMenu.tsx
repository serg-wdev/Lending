'use client'

import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import { SiNextdoor } from 'react-icons/si'

interface BurgerMenuProps {
    isOpen: boolean
    onToggle: () => void
    onClose: () => void
}

export default function BurgerMenu({ isOpen, onToggle, onClose }: BurgerMenuProps) {
    // состояние для уведомления о копировании email
    const [showEmailNotification, setShowEmailNotification] = useState(false);

    // Блокируем скролл когда мобильное меню открыто
    useEffect(() => {
        if (isOpen) {
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
    }, [isOpen]);

    // функция для скролла к секциям
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            // Сначала закрываем меню
            onClose();
            
            // Небольшая задержка для закрытия меню перед скроллом
            setTimeout(() => {
                const elementTop = el.offsetTop - 60; // Учитываем новую высоту header
                window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth'
                });
            }, 100);
        }
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
        <>
            {/* Burger Menu Button */}
            <button
                onClick={onToggle}
                className="p-3 hover:bg-gray-800/50 rounded-md transition-all duration-300"
                aria-label="Toggle menu"
            >
                {isOpen ? <FaTimes size={18} className="text-orange-400" /> : <FaBars size={18} className="text-orange-400" />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[60] top-0 left-0 right-0 bottom-0 w-screen h-screen min-h-screen" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh'}}>
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-3 text-orange-400 hover:text-orange-300 hover:bg-gray-800/50 rounded-md transition-all duration-300"
                        aria-label="Close menu"
                    >
                        <FaTimes size={24} />
                    </button>
                    
                    <div className="flex flex-col justify-center items-center h-full px-8 space-y-6">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-white text-xl font-semibold hover:text-orange-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800/50"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-white text-xl font-semibold hover:text-orange-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800/50"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("contact-form")}
                            className="text-white text-xl font-semibold hover:text-orange-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800/50"
                        >
                            Free Estimate
                        </button>
                        
                        <div className="border-t border-gray-600 pt-6 mt-6 w-full max-w-xs">
                            <div className="space-y-4">
                                <a 
                                    href="tel:+19524658195" 
                                    className="flex items-center justify-center gap-3 text-white hover:text-orange-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800/50"
                                >
                                    <FaPhone size={18} className="text-orange-400" />
                                    (952) 465-8195
                                </a>
                                
                                {/* Social Media Icons */}
                                <div className="flex justify-center gap-4 pt-4">
                                    <a 
                                        href="https://www.instagram.com/cornerstone_renovation_mn" 
                                        className="flex flex-col items-center gap-1 text-white py-2 px-3 rounded-md hover:bg-gray-800/50"
                                        aria-label="Instagram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram size={20} className="text-pink-500" />
                                        <span className="text-xs">Instagram</span>
                                    </a>
                                    <a 
                                        href="https://nextdoor.com/pages/cornerstone-renovation-llc-burnsville-mn" 
                                        className="flex flex-col items-center gap-1 text-white py-2 px-3 rounded-md hover:bg-gray-800/50"
                                        aria-label="Nextdoor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BsFillHouseFill size={20} className="scale-x-[-1] text-green-500" />
                                        <span className="text-xs">Nextdoor</span>
                                    </a>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Уведомление о копировании email */}
            {showEmailNotification && (
                <div className="fixed top-16 right-4 sm:right-8 bg-green-500 text-white px-3 py-2 rounded-md text-xs font-medium z-[70] transition-all duration-300 shadow-lg border border-green-400/30">
                    Email copied!
                </div>
            )}
        </>
    )
}
