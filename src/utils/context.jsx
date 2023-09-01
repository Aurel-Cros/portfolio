import { createContext, useState } from 'react';
export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [lang, setLangState] = useState(
        localStorage.getItem('lang') || 'fr');
    document.querySelector("html").setAttribute("lang", lang);

    const setLang = (value) => {
        document.querySelector("html").setAttribute("lang", value);
        localStorage.setItem('lang', value);
        setLangState(value);
    }
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    )
}