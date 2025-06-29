import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

function Header() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { language, toggleLanguage } = useLanguage();

    const isEnglish = language === "en";

    return (
        <>
            <header className="hidden lg:flex justify-between items-center px-0 mb-10 py-6">
                <p className="text-3xl font-bold text-secondary translate-x-[100px]">almila</p>

                <div className="flex items-center gap-4 translate-x-[185px] translate-y-[-30px]">
                    <button
                        onClick={toggleLanguage}
                        className="text-sm font-bold tracking-wider text-secondary dark:text-white"
                    >
                        {isEnglish ? "TÜRKÇE’YE GEÇ" : "SWITCH TO EN"}
                    </button>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                        <div
                            className="w-11 h-6 bg-[#8F88FF] rounded-full 
                        dark:bg-gray-700 peer-checked:after:translate-x-full 
                        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-0.5 after:start-[2px] 
                        after:bg-[#FFE86E] dark:after:bg-white
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-[#3A3A3A]"
                        ></div>

                        <span className="ml-2 text-sm font-medium text-primary dark:text-gray-300">
                            {isEnglish
                                ? darkMode
                                    ? "LIGHT MODE"
                                    : "DARK MODE"
                                : darkMode
                                    ? "AYDINLIK MOD"
                                    : "KARANLIK MOD"}
                        </span>
                    </label>
                </div>
            </header>
            <header className="block lg:hidden flex justify-between items-center px-4 py-4">
                <p className="text-l font-bold text-secondary">almila</p>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-xs font-bold tracking-wider text-secondary dark:text-white"
                    >
                        {isEnglish ? "TÜRKÇE’YE GEÇ" : "SWITCH TO EN"}
                    </button>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                        <div className="w-10 h-5 bg-[#8F88FF] rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#FFE86E] dark:after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#3A3A3A]" />
                        <span className="ml-2 text-[11px] font-medium text-secondary dark:text-gray-300">
                            {isEnglish
                                ? darkMode
                                    ? "LIGHT MODE"
                                    : "DARK MODE"
                                : darkMode
                                    ? "AYDINLIK MOD"
                                    : "KARANLIK MOD"}
                        </span>
                    </label>
                </div>

            </header>
        </>
    );
}

export default Header;

