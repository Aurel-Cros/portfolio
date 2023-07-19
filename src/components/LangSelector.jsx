import React, { useState } from 'react';
export default function LangSelector() {
    const [lang, setLang] = useState('fr');

    function switchLang(newState) {
        setLang(newState);
    }

    return (
        <div className={"lang-selector" + (lang === 'en' ? ' en' : '')}>
            <img onClick={() => { switchLang('fr') }} src="./assets/icons/fr-flag.svg"></img>
            <img onClick={() => { switchLang('en') }}  src="./assets/icons/uk-flag.svg"></img>
            <div className="background"></div>
        </div>
    )
}