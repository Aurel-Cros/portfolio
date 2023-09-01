import { createContext, useState } from 'react';
export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [lang, setLangState] = useState(
        localStorage.getItem('lang') || 'fr');
    const setLang = (value) => {
        setLangState(value);
        localStorage.setItem('lang', value);
    }
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    )
}