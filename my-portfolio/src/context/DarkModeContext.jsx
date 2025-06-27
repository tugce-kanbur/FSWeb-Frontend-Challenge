import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useLocalStorage("light", false);
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        toast.info(newMode ? "Karanlık mod aktif" : "Aydınlık mod aktif");
    };


    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? "dark" : ""}>{children}</div>
        </DarkModeContext.Provider>
    )
}


export const useDarkMode = () => useContext(DarkModeContext);








