import LangSelector from './LangSelector.jsx';
import { Link } from 'react-router-dom';
import getContent from '../utils/contentManager';

export default function NavBar() {
    const content = getContent();
    console.log()
    return (
        <div className="navbar">
            <div className="navWrapper">
                <LangSelector />
                <div className="socials">
                    <p className="nav">{content.find_me}</p>
                    <div>
                        <a href="https://www.github.com/Aurel-Cros" target="_blank">
                            <img alt="GitHub link" src="./assets/icons/github-white.svg"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/aurel-cros/" target="_blank">
                            <img alt="LinkedIn link" src="./assets/icons/linkedin.svg"></img>
                        </a>
                    </div>
                </div>
                <div className="navLinks">
                    <Link to="/about-me" className="nav about">{content.About}</Link>
                    <Link to="/my-work" className="nav work">{content.Work}</Link>
                    <Link to="/contact" className="nav contact">{content.Contact}</Link>
                </div>
            </div>
            <button className="navSwitch" onClick={() => { document.querySelector('.navbar').classList.toggle('closed') }}>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}