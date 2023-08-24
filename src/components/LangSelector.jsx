import { useContext } from 'react';
import { LangContext } from '../utils/context';

import colors from '../styles/colors';
import styled from 'styled-components';
import frFlag from '../assets/icons/fr-flag.svg';
import ukFlag from '../assets/icons/uk-flag.svg';

const LangSelectorElement = styled.div`	
    grid-column: 1;
	position: relative;
	width: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.5rem;
	padding: 0.5rem 0;
	gap: 1rem;

	img {
		z-index: 1;
		cursor: pointer;
		width: 2.4rem;
		height: 1.6rem;
	}

	.background {
		z-index: -1;
		position: absolute;
		top: ${props => props.lang === 'en' ? 'calc(100% - 2.55rem)' : 0};
		left: 0;
		content: "";
		width: 100%;
		height: 2.55rem;
		border-radius: 1rem;
		opacity: 0.2;
		background-color: ${colors.whiteBase};

		transition: top 300ms ease-in-out;
	}
`

export default function LangSelector() {
	const { lang, setLang } = useContext(LangContext);

	function switchLang(newState) {
		setLang(newState);
	}

	return (
		<LangSelectorElement lang={lang} >
			<img alt="Drapeau français" onClick={() => { switchLang('fr') }} src={frFlag}></img>
			<img alt="Flag of england" onClick={() => { switchLang('en') }} src={ukFlag}></img>
			<div className="background"></div>
		</LangSelectorElement>
	)
}