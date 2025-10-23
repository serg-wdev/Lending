'use client'

import React from "react";
import { FaPaintBrush, FaHome, FaHammer, FaTools } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            title: "Painting Services",
            icon: <FaPaintBrush size={40} />,
            color: "from-orange-500 to-orange-700",
            bgColor: "from-orange-50 to-orange-100",
            description: "Professional painting services for both interior and exterior spaces with premium quality materials and expert craftsmanship.",
            items: [
                "Exterior painting",
                "Deck staining & refinishing",
                "Interior painting",
                "Enamel & stain",
                "Cabinet refinishing",
                "Ceiling painting & texturing",
                "Drywall installation",
                
            ],
        },
        {
            title: "Renovation",
            icon: <FaHome size={40} />,
            color: "from-blue-500 to-blue-700",
            bgColor: "from-blue-50 to-blue-100",
            description: "Complete home transformation services from kitchen remodels to basement finishing with attention to every detail.",
            items: [
                "Kitchen",
                "Bathroom",
                "Basement finishing",
                "Flooring installation",
                "Tile & backsplash",
                "Railing installation",
            ],
        },
        {
            title: "Exterior",
            icon: <FaHammer size={40} />,
            color: "from-orange-500 to-orange-700",
            bgColor: "from-orange-50 to-orange-100",
            description: "Comprehensive exterior maintenance and improvement services to protect and enhance your home's curb appeal.",
            items: [
                "Siding installation",
                "General exterior repairs",
                "Deck installation & repair",
                "Gutters installation",
                
            ],
        },
        {
            title: "Handyman",
            icon: <FaTools size={40} />,
            color: "from-blue-500 to-blue-700",
            bgColor: "from-blue-50 to-blue-100",
            description: "Reliable handyman services for all your home maintenance needs with quick response and quality workmanship.",
            items: [
                "Installation faucets & lighting",
                "Small home repairs",
                "General maintenance tasks"
            ],
        },
    ];

    return (
            <section
                    id="services"
                    className="relative w-full bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-screen sm:min-h-0"
                    style={{
                        backgroundImage: "url('/bg-services.jpg')",
                    }}
            >
                {/* полупрозрачная подложка */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/80" />

                <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 max-w-7xl">
                    {/* Заголовок */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#063A55]/90 mb-3 sm:mb-4 md:mb-6">
                            {/* <span className="block sm:inline">Our</span> */}
                            <p className="block sm:inline sm:ml-2">Our Services</p>
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-[#063A55]/70 mx-auto rounded-full mb-3 sm:mb-4" />
                        <p className="text-[#063A55]/70 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                            We provide a comprehensive range of home renovation and improvement services with professional craftsmanship.
                        </p>
                    </div>

                    {/* Адаптивная сетка услуг */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-10 max-w-4xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className='relative flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full'>
                                {/* Серый заголовок с разноцветным кругом */}
                                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 sm:p-6 text-center relative">
                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-full mb-3 sm:mb-4 shadow-lg`}>
                                            <div className="text-white text-lg sm:text-2xl">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#063A55]/90 mb-2">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Контент */}
                                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                    {/* Описание */}
                                    {/* <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
                                        {service.description}
                                    </p> */}
                                    
                                    {/* Список услуг */}
                                    <div className="flex-1">
                                        {/* <h4 className="text-base font-bold text-gray-800 mb-6 text-center border-b border-gray-200 pb-2">
                                            Services Included
                                        </h4> */}
                                        <ul className="space-y-3">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                                                    <span className="text-base text-[#063A55]/80 leading-relaxed font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Декоративная полоса */}
                                    <div className="mt-6 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}
