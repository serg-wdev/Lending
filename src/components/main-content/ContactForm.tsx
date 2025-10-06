'use client'

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formatPhoneNumber = (value: string) => {
        // Удаляем все нецифровые символы
        const phoneNumber = value.replace(/\D/g, '');
        
        // Если номер начинается с цифр, форматируем его
        if (phoneNumber.length >= 3) {
            const areaCode = phoneNumber.slice(0, 3);
            const remaining = phoneNumber.slice(3);
            
            if (remaining.length === 0) {
                return `(${areaCode})`;
            } else if (remaining.length <= 3) {
                return `(${areaCode}) ${remaining}`;
            } else {
                return `(${areaCode}) ${remaining.slice(0, 3)}-${remaining.slice(3, 7)}`;
            }
        }
        
        return phoneNumber;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            const formattedPhone = formatPhoneNumber(value);
            setFormData(prev => ({
                ...prev,
                [name]: formattedPhone
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        
        setIsSubmitting(false);
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <section id="contact-form" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                        Get Your Free Estimate
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-3 sm:mb-4"></div>
                    {/* <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-black mx-auto mb-3 sm:mb-4"></div> */}
                    <p className="text-gray-700 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                        Ready to transform your home? Contact us today for a free consultation and estimate.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">Get in Touch</h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center lg:text-left">
                                We're here to help bring your renovation dreams to life. Reach out to us using any of the methods below.
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <FaPhone size={16} />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                                    <a href="tel:+19524658195" className="text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base">
                                        (952) 465-8195
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <FaEnvelope size={16} />
                                </div>
                                <div className="text-center lg:text-left min-w-0">
                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                                    <a href="mailto:cornerstone_renovation@outlook.com" className="text-gray-700 hover:text-blue-600 transition-colors text-xs xs:text-sm sm:text-base break-all">
                                        cornerstone_renovation@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <FaMapMarkerAlt size={16} />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Service Area</h4>
                                    <p className="text-gray-700 text-xs xs:text-sm sm:text-base">
                                        Apple Valley, Lakeville, Burnsville, Eagan, and surrounding areas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 lg:order-2 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical text-sm sm:text-base"
                                    placeholder="Tell us about your renovation project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm sm:text-base"
                            >
                                {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
