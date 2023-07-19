import LangSelector from './LangSelector.jsx';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navWrapper">
                <LangSelector />
                <div className="socials">
                    <p className="nav">Find me</p>
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
                    <a href="#" className="nav about">About me</a>
                    <a href="#" className="nav work">My work</a>
                    <a href="#" className="nav contact">Get in touch</a>
                </div>
            </div>
            <button className="navSwitch" onClick={() => { document.querySelector('.navbar').classList.toggle('closed') }}>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}