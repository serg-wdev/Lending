import React, {JSX} from "react";

// types.ts (можно создать отдельный файл для типов)
export interface Reviews {
    id: string;
    name: string;
    role: string;
    text: string;
    avatar: string;
}


const REVIEWS: Reviews[] = [
    {
        id: 't1',
        name: 'Alison S.',
        role: 'Homeowner',
        text: 'I would highly recommend Cornerstone Renovation LLC. Yevi and his dad along with the rest of his team beautifully completed a total remodel... What I value most is their wealth of knowledge, creativity, perfection, honesty, and kindness.',
        avatar: 'http://static.photos/people/200x200/1'
    },
    {
        id: 't2',
        name: 'Diane J.',
        role: 'Homeowner',
        text: 'Yevi was wonderful to work with. He was very accommodating with the last minute changes/additions to our project. We will definitely use Cornerstone Renovation for future projects.',
        avatar: 'http://static.photos/people/200x200/2'
    },
    {
        id: 't3',
        name: 'Brenton S.',
        role: 'Homeowner',
        text: 'I\'m very satisfied with the work done by Cornerstone, both interior and exterior painting (along with siding repair and power washing). Highly recommended!',
        avatar: 'http://static.photos/people/200x200/3'
    },
    {
        id: 't4',
        name: 'Sarah M.',
        role: 'Homeowner',
        text: 'Professional, reliable, and excellent craftsmanship. Cornerstone Renovation transformed our kitchen beyond our expectations. The attention to detail was outstanding.',
        avatar: 'http://static.photos/people/200x200/4'
    },
];

export default function Testimonials(): JSX.Element {
    return (
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
                <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
                            What Our Clients Say
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-3 sm:mb-4"></div>
                        {/* <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-black mx-auto"></div> */}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {REVIEWS.map((t: Reviews) => (
                                <div key={t.id} className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl">
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{t.name}</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">{t.role}</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <p className="text-gray-700 italic text-xs sm:text-sm md:text-base leading-relaxed">
                                        "{t.text}"
                                    </p>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}
