'use client'

import React from "react";
import { FaPaintBrush, FaHome, FaHammer, FaTools } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            title: "Painting Services",
            icon: <FaPaintBrush size={50} />,
            color: "from-blue-500 to-blue-700",
            bgColor: "from-blue-50 to-blue-100",
            description: "Professional painting services for both interior and exterior spaces with premium quality materials and expert craftsmanship.",
            items: [
                "Exterior house painting & staining",
                "Deck staining & refinishing",
                "Interior wall & ceiling painting",
                "Enamel & stain applications",
                "Cabinet refinishing & restoration",
                "Ceiling painting & texturing",
                "Drywall installation & repair",
                "Color consultation & design",
            ],
        },
        {
            title: "Home Renovation",
            icon: <FaHome size={50} />,
            color: "from-green-500 to-green-700",
            bgColor: "from-green-50 to-green-100",
            description: "Complete home transformation services from kitchen remodels to basement finishing with attention to every detail.",
            items: [
                "Kitchen remodeling & design",
                "Bathroom renovation & fixtures",
                "Basement finishing & waterproofing",
                "Flooring installation & repair",
                "Tile & backsplash installation",
                "Railing & stair installation",
                "Custom built-ins & storage",
                "Electrical & plumbing updates",
            ],
        },
        {
            title: "Exterior Services",
            icon: <FaHammer size={50} />,
            color: "from-orange-500 to-orange-700",
            bgColor: "from-orange-50 to-orange-100",
            description: "Comprehensive exterior maintenance and improvement services to protect and enhance your home's curb appeal.",
            items: [
                "Siding installation & repair",
                "General exterior repairs",
                "Deck installation & restoration",
                "Gutters installation & cleaning",
                "Window & door replacement",
                "Roofing repairs & maintenance",
                "Exterior lighting installation",
                "Weatherproofing & insulation",
            ],
        },
        {
            title: "Handyman Services",
            icon: <FaTools size={50} />,
            color: "from-purple-500 to-purple-700",
            bgColor: "from-purple-50 to-purple-100",
            description: "Reliable handyman services for all your home maintenance needs with quick response and quality workmanship.",
            items: [
                "Faucet & lighting installation",
                "Small home repairs & fixes",
                "General maintenance tasks",
                "Furniture assembly & mounting",
                "Door & window adjustments",
                "Hardware installation & repair",
                "Caulking & weatherstripping",
                "Minor electrical & plumbing",
            ],
        },
    ];

    return (
            <section
                    id="services"
                    className="relative w-full bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
                    style={{
                        backgroundImage: "url('/bg-services.jpg')",
                    }}
            >
                {/* полупрозрачная подложка */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-[2px]" />

                <div className="relative container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 max-w-7xl">
                    {/* Заголовок */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                            <span className="block sm:inline">Our</span>
                            <span className="block sm:inline sm:ml-2">Services</span>
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-blue-600 mx-auto rounded-full mb-3 sm:mb-4" />
                        <p className="text-gray-700 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                            We provide a comprehensive range of home renovation and improvement services with professional craftsmanship.
                        </p>
                    </div>

                    {/* Адаптивная сетка услуг */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 xl:grid-rows-2 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                                <div key={index} className='flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 shadow-xl border border-white/30'>
                                    
            
                                    
                                    
                                    {/* Заголовок */}
                                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Описание */}
                                    <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-xs xl:text-sm leading-relaxed text-center mb-4 sm:mb-6">
                                        {service.description}
                                    </p>
                                    
                                    {/* Список услуг */}
                                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-center w-full flex-1">
                                        {service.items.map((item, idx) => (
                                                <li key={idx} className="text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-base">
                                                    <span className="leading-relaxed font-medium">{item}</span>
                                                </li>
                                        ))}
                                    </ul>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}