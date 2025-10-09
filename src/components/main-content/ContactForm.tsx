'use client'

import React, { useState, useEffect } from 'react';
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

    // Функция для автоматического изменения высоты textarea
    const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    // Предотвращаем горизонтальный скролл на iOS при фокусе на поля
    useEffect(() => {
        const preventHorizontalScroll = () => {
            document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
        };

        const restoreScroll = () => {
            document.body.style.overflowX = 'unset';
            document.documentElement.style.overflowX = 'unset';
        };

        // Применяем стили при монтировании
        preventHorizontalScroll();

        // Очищаем при размонтировании
        return () => {
            restoreScroll();
        };
    }, []);

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

        // Автоматически изменяем высоту textarea
        if (name === 'message' && e.target instanceof HTMLTextAreaElement) {
            autoResizeTextarea(e.target);
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
        <section id="contact-form" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 bg-gray-50 overflow-x-hidden">
            <div className="container mx-auto px-2 xs:px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl overflow-x-hidden">
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

                <div className="flex justify-center max-w-2xl mx-auto">

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full">
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
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base"
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
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base"
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
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base resize-none overflow-hidden"
                                    placeholder="Tell us about your renovation project..."
                                    style={{ minHeight: '100px' }}
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
