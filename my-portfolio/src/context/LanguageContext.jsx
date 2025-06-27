import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage("language", "en");

    const toggleLanguage = () => {
        const newLang = language === "en" ? "tr" : "en";
        setLanguage(newLang);
        toast.success(newLang === "en" ? "Language set to English" : "Dil Türkçe olarak ayarlandı");
    };



    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);