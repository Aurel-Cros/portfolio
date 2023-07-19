import React from 'react';
import LangSelector from './LangSelector.jsx';

export default function NavBar() {
    return (
        <div className="navbar">
            <LangSelector />
            <div className="socials">
                <p>Find me</p>
                <img alt="GitHub link" src="./assets/icons/github.svg"></img>
                <img alt="LinkedIn link" src="./assets/icons/linkedin.svg"></img>
            </div>
        </div>
    )
}