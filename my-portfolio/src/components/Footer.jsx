import React from 'react';
import { contactData } from "../data/data";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from '../context/DarkModeContext';
function Footer() {
    const { language } = useLanguage();
    const { darkMode } = useDarkMode();
    return (
        <section className="w-full bg-[#F9F9F9] dark:bg-[#252128] flex justify-center items-center py-[60px] px-4 md:px-[60px]">
            <div className="w-full max-w-[540px] flex flex-col items-center gap-4 md:gap-6 text-center">
                <h3 className="text-[32px] md:text-[48px] font-bold leading-[120%] text-[#4731D3] dark:text-[#8F88FF] font-Inter">
                    {contactData.title[language]}
                </h3>
                <p className="text-[16px] md:text-[24px] font-normal leading-[150%] text-[#120B39] dark:text-white max-w-[90%] md:max-w-[448px] font-Inter">
                    {contactData.description[language]}
                </p>
                <a
                    href={`mailto:${contactData.email}`}
                    className="text-[16px] md:text-[20px] font-medium underline text-[#4731D3] dark:text-[#8F88FF] tracking-wide font-Inter"
                >
                    {contactData.email}
                </a>
                <div className="flex gap-5 h-[35px] mt-2">
                    {contactData.icons.map((icon) => (
                        <a key={icon.id} href={icon.link} target="_blank" rel="noreferrer">
                            <img
                                src={darkMode ? icon.iconDark : icon.iconLight}
                                alt={icon.name}
                                className="w-6 h-6"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer;
