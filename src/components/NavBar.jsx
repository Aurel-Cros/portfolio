import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { glassmorph } from '../styles/mixins';

import LangSelector from './LangSelector';
import getContent from '../utils/contentManager';

const NavDiv = styled.div`
	${glassmorph.light}
	box-sizing: border-box;
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: 1fr auto;
	place-items: center;

	&.closed {
		.navWrapper {
			left: 100vw;
		}
		.navSwitch :first-child {
			rotate: 90deg;
		}
	}

`

const NavLink = styled(Link)`
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	font-variant: all-small-caps;
`

export default function NavBar() {
    const [isOpen, setOpen] = useState(true);

    const content = getContent().navbar;
    return (
        <NavDiv className={isOpen ? '' : 'closed'} >
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
                    <NavLink to="/about-me" className="nav about">{content.about}</NavLink>
                    <NavLink to="/my-work" className="nav work">{content.work}</NavLink>
                    <NavLink to="/contact" className="nav contact">{content.contact}</NavLink>
                </div>

            </div>

            <button className="navSwitch" onClick={() => { setOpen(!isOpen) }}>
                <span></span>
                <span></span>
            </button>
        </NavDiv>
    )
}