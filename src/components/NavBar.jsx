import { Link } from 'react-router-dom';

import styled from 'styled-components';
import * as mixins from '../styles/mixins';
import colors from '../styles/colors';

import iconAbout from '../assets/icons/about.svg';
import iconWork from '../assets/icons/projects.svg';
import iconContact from '../assets/icons/contact-darkblue.svg';

import LangSelector from './LangSelector';
import getContent from '../utils/getContent';

const NavDiv = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: 1fr auto;
	place-items: center;
`
const NavWrapper = styled.div`
	${mixins.glassmorph.light}
	padding: 1.5rem 1.75rem;
	position: relative;
	z-index: 0;
	left: ${({ $isOpen }) => ($isOpen ? 0 : 100)}vw;
	top: 0;
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	display: grid;
	grid-template-columns: auto auto 1fr 4rem;
	place-content: center;
	place-items: center;

	transition: left 500ms ease-in-out 250ms;

	@media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
		grid-template-columns: auto auto 1fr;
		gap: 0.25rem;
		padding: 1.5rem 0.5rem;
    }
`
const SocialLinks = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
	grid-column: 2;

	p {
		${mixins.text.nav}
		color: ${colors.whiteBase};
		text-align: center;
		margin: 0;
	}

	div {
		width: auto;
		margin: 0 auto;
		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.55rem;
		border-radius: 1rem;
	}

	img {
		width: 2.5rem;
		aspect-ratio: 1/1;
		transition: all 200ms ease-in-out;
		margin: 0;
		scale: 1;
		filter: drop-shadow(8px 8px 0px transparent);

		&:hover {
			filter: drop-shadow(4px 4px 8px ${colors.greyText});
			scale: 1.06;
			rotate: 15deg;
		}
	}
`
const NavLink = styled(Link)`
	${mixins.text.nav}

	text-align: center;
	text-decoration: none;
	color: ${colors.whiteBase};

	background-position: 0.5rem 50%, 0 100%;
	background-size: 1.5rem 1.5rem, 0% 1px;
	background-repeat: no-repeat;

	transition: background-size 600ms ease-in-out;

	padding: 0.25rem 0 0 2.5rem;

	&.about {
		background-image: url(${iconAbout}),
			linear-gradient(to right,
				transparent 2.55rem,
				${colors.whiteBase} 2.55rem,
				${colors.whiteBase} 100%);
	}

	&.work {
		background-image: url(${iconWork}),
			linear-gradient(to right,
				transparent 2.55rem,
				${colors.whiteBase} 2.55rem,
				${colors.whiteBase} 100%);
	}

	&.contact {
		padding: 0.5rem 1rem 0.5rem 2.5rem;
		border-radius: 1rem;
		color: ${colors.darkBlue};
		background-color: ${colors.lime};
		background-image: url(${iconContact}),
			linear-gradient(to right,
				transparent 2.66rem,
				${colors.darkBlue} 2.66rem,
				${colors.darkBlue} calc(100% - 1rem),
				transparent calc(100% - 1rem));
		background-position: 0.5rem 50%, 0 calc(100% - 0.5rem);
	}

	&:hover {
		background-size: 1.5rem 1.5rem, 100% 1px;
	}


	@media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
		font-size: 1rem;
    }

`
const NavLinksDiv = styled.div`
	grid-column: 3;
	justify-self: end;
	width: min(100%, 35rem);
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
    }
`

export default function NavBar() {

	const content = getContent().navbar;

	return (
		<NavDiv>
			<NavWrapper $isOpen={true}>
				<LangSelector />

				<SocialLinks>
					<p>{content.find_me}</p>
					<div>
						<a href="https://www.github.com/Aurel-Cros" target="_blank">
							<img alt="GitHub link" src="./assets/icons/github-white.svg"></img>
						</a>
						<a href="https://www.linkedin.com/in/aurel-cros/" target="_blank">
							<img alt="LinkedIn link" src="./assets/icons/linkedin.svg"></img>
						</a>
					</div>
				</SocialLinks>

				<NavLinksDiv>
					<NavLink to={window.location.origin + "/about-me"} className="about">{content.about}</NavLink>
					<NavLink to={window.location.origin + "/my-work"} className="work">{content.work}</NavLink>
					<NavLink to={window.location.origin + "/contact"} className="contact">{content.contact}</NavLink>
				</NavLinksDiv>

			</NavWrapper>
		</NavDiv>
	)
}