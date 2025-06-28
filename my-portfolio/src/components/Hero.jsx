import React from 'react';
import Header from './Header';
import { heroData } from '../data/data';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';

export default function Hero() {
    const { language } = useLanguage();
    const { darkMode } = useDarkMode();

    return (
        <section className="w-[1440px] h-[671px] flex font-Inter md:px-[60px]">

            <div className="flex-1 bg-primary dark:bg-[#171043] text-white p-12 ">
                <Header />
                <div className='translate-x-[100px]'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10 text-secondary dark:text-[#CBF281] leading-tight">
                        {heroData.heading[language]}
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-secondary dark:text-[#CBF281] leading-tight">
                        {heroData.heading1[language]}
                    </h1>

                    <p className="mt-6 max-w-xl text-base sm:text-lg text-white">
                        {heroData.description[language]}
                    </p>
                    <p className="mt-2 max-w-xl text-base sm:text-lg text-white">
                        {heroData.description1[language]}
                    </p>

                    <div className="flex gap-4 mt-8">
                        {heroData.buttons.map((btn, index) => (
                            <a
                                key={index}
                                href={btn.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-[10px] px-[20px] py-[12px] border border-[#3730A3] dark:border-[#FFFFFF] rounded-[6px] text-[#3730A3] dark:text-[#FFFFFF] bg-white dark:bg-[#252128] text-base font-medium hover:bg-indigo-50 transition"
                            >
                                <img
                                    src={darkMode ? btn.iconDark : btn.iconLight}
                                    alt={btn.label[language]}
                                    className="w-5 h-5"
                                />
                                <span>{btn.label[language]}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-[432px] bg-secondary dark:bg-[#211F0B] flex items-center justify-center px-4">
                <img
                    src={heroData.image}
                    alt="Hero görseli"
                    className="absolute top-1/2 left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
            </div>
        </section>
    );
}
