import React, { useState } from 'react';
export default function LangSelector() {
    const [lang, setLang] = useState('fr');

    function switchLang(newState) {
        setLang(newState);
        console.log(lang);
    }

    return (
        <div className={"lang-selector" + (lang === 'en' ? ' en' : '')}>
            <img onClick={() => { switchLang('fr') }} src="./assets/fr-flag.svg"></img>
            <img onClick={() => { switchLang('en') }}  src="./assets/uk-flag.svg"></img>
            <div className="background"></div>
        </div>
    )
}