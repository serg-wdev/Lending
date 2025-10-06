'use client'

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-1 pt-20">
                <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl">
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                                Privacy Policy
                            </h1>
                            <div className="w-20 sm:w-24 md:w-28 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Information We Collect
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                                        At Cornerstone Renovation LLC, we collect information you provide directly to us, such as when you:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4">
                                        <li>Fill out our contact form</li>
                                        <li>Request a free estimate</li>
                                        <li>Call or email us</li>
                                        <li>Schedule a consultation</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        How We Use Your Information
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                                        We use the information we collect to:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4">
                                        <li>Provide and improve our renovation services</li>
                                        <li>Respond to your inquiries and requests</li>
                                        <li>Schedule consultations and estimates</li>
                                        <li>Communicate with you about your projects</li>
                                        <li>Send you updates about our services (with your consent)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Information Sharing
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4 mt-4">
                                        <li>With service providers who assist us in operating our business</li>
                                        <li>When required by law or to protect our rights</li>
                                        <li>In connection with a business transfer or acquisition</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Data Security
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Your Rights
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                                        You have the right to:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4">
                                        <li>Access and update your personal information</li>
                                        <li>Request deletion of your personal information</li>
                                        <li>Opt-out of marketing communications</li>
                                        <li>Request a copy of your data</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Contact Us
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            <strong>Cornerstone Renovation LLC</strong><br />
                                            Email: <a href="mailto:cornerstone_renovation@outlook.com" className="text-blue-600 hover:text-blue-800">cornerstone_renovation@outlook.com</a><br />
                                            Phone: <a href="tel:+19524658195" className="text-blue-600 hover:text-blue-800">(952) 465-8195</a><br />
                                            Service Area: Apple Valley, MN and surrounding areas
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Changes to This Policy
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any modifications constitutes your acceptance of the updated Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
}
