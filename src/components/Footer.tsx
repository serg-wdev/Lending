'use client'

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

export default function Footer() {
    return (
            <footer className="bg-gray-900 text-gray-300 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">

                        {/* Company Info - Left */}
                        <div className="w-full lg:w-auto lg:text-left text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 mb-2 sm:mb-3">
                                <span className="block sm:inline">Cornerstone</span>
                                <span className="block sm:inline sm:ml-1">Renovation LLC</span>
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
                                Quality renovation and remodeling services in Apple Valley, MN and surrounding areas.
                            </p>
                        </div>

                        {/* Contact Info - Center */}
                        <div className="w-full lg:w-auto lg:text-center text-center">
                            <h4 className="font-semibold text-orange-400 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Contacts</h4>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                                <p>
                                    <span className="block sm:inline">Email: </span>
                                    <a href="mailto:cornerstone_renovation@outlook.com" className="hover:text-white transition-colors break-all">
                                        cornerstone_renovation@outlook.com
                                    </a>
                                </p>
                                <p>
                                    <span className="block sm:inline">Phone: </span>
                                    <a href="tel:+19524658195" className="hover:text-white transition-colors">
                                        (952) 465-8195
                                    </a>
                                </p>
                                <p className="mt-2 sm:mt-3 text-xs opacity-90">
                                    Serving Apple Valley, MN and surrounding areas
                                </p>
                            </div>
                        </div>

                        {/* Links & Socials - Right */}
                        <div className="w-full lg:w-auto lg:text-right text-center">
                            <h4 className="font-semibold text-orange-400 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Follow Us</h4>
                            
                            <div className="flex justify-center lg:justify-around gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <a href="https://www.instagram.com/cornerstone_renovation_mn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors transform hover:scale-110">
                                    <FaInstagram size={28} className="text-pink-500" />
                                </a>
                                <a href="https://nextdoor.com/pages/cornerstone-renovation-llc-burnsville-mn" target="_blank" rel="noopener noreferrer" aria-label="Nextdoor" className="hover:text-green-500 transition-colors transform hover:scale-110">
                                    <BsFillHouseFill size={28} className="scale-x-[-1] text-green-500" />
                                </a>
                            </div>
                            
                            <ul className="text-xs sm:text-sm">
                                <li>
                                    <a 
                                        href="/privacy-policy" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm">
                        <p>© {new Date().getFullYear()} Cornerstone Renovation LLC. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    );
}
