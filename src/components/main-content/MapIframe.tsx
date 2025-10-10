'use client'

import React, {JSX} from "react";

export default function MapIframe(): JSX.Element {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#063A55]/90 mb-4">
                        Find Us
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-[#063A55]/70 mx-auto rounded-full mb-3 sm:mb-4"></div>
                    {/* <div className="w-20 h-1 bg-black mx-auto mb-4"></div> */}
                    <p className="text-[#063A55]/70 max-w-2xl mx-auto text-lg">
                        Located in Apple Valley, MN, serving the Twin Cities metro area
                    </p>
                </div>
                
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.348464928976!2d-93.21694409278616!3d44.746995044143524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f63184403b0ef1%3A0xcd29a64f7d4553cb!2sCornerstone%20Renovation%20LLC!5e0!3m2!1sen!2sus!4v1759609977201!5m2!1sen!2sus&hl=en"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        title="Cornerstone Renovation LLC Location"
                        aria-label="Google Maps showing Cornerstone Renovation LLC location in Apple Valley, MN"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}