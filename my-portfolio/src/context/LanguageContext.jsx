import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage("language", "en");

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "en" ? "tr" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);