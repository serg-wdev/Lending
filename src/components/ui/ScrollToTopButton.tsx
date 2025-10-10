'use client'

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Функция для скролла наверх
    const scrollToTop = () => {
        // Плавный скролл наверх - используем body
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Отслеживание скролла - с отладкой
    useEffect(() => {
        const toggleVisibility = () => {
            const scrollThreshold = 600;
            
            // Используем максимальное значение из разных источников
            const scrollPosition = Math.max(
                window.pageYOffset || 0,
                document.documentElement.scrollTop || 0,
                document.body.scrollTop || 0,
                window.scrollY || 0
            );
            
            // Отладочная информация
            console.log('=== SCROLL DEBUG ===');
            console.log('window.pageYOffset:', window.pageYOffset);
            console.log('document.documentElement.scrollTop:', document.documentElement.scrollTop);
            console.log('document.body.scrollTop:', document.body.scrollTop);
            console.log('window.scrollY:', window.scrollY);
            console.log('scrollPosition (max):', scrollPosition);
            console.log('scrollThreshold:', scrollThreshold);
            console.log('isVisible will be:', scrollPosition > scrollThreshold);
            console.log('==================');
            
            if (scrollPosition > scrollThreshold) {
                console.log('✅ Showing button');
                setIsVisible(true);
            } else {
                console.log('❌ Hiding button');
                setIsVisible(false);
            }
        };

        // Добавляем слушатели на разные элементы
        window.addEventListener('scroll', toggleVisibility);
        document.addEventListener('scroll', toggleVisibility);
        document.body.addEventListener('scroll', toggleVisibility);
        document.documentElement.addEventListener('scroll', toggleVisibility);

        // Проверяем при загрузке
        toggleVisibility();

        // Очищаем слушатели при размонтировании
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            document.removeEventListener('scroll', toggleVisibility);
            document.body.removeEventListener('scroll', toggleVisibility);
            document.documentElement.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Отладочная информация о состоянии компонента
    console.log('ScrollToTopButton render - isVisible:', isVisible);

    // Показываем кнопку только если видима
    if (!isVisible) {
        console.log('🚫 Button not visible, returning null');
        return null;
    }

    console.log('✅ Button visible, rendering button');
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
