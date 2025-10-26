'use client'

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Функция для плавного скролла наверх
    const scrollToTop = () => {
        const startPosition = window.pageYOffset;
        const distance = -startPosition;
        const duration = 800;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    // Отслеживание скролла
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[9999] bg-black/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white/40 hover:border-white/60"
            aria-label="Scroll to top"
        >
            <div className="text-2xl sm:text-3xl md:text-4xl hover:-translate-y-1 transition-transform duration-300">
                <IoIosArrowUp />
            </div>
        </button>
    );
}
