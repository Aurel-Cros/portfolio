import { Link, useLocation } from "react-router-dom";

import styled from 'styled-components';
import backArrow from '../assets/icons/back-arrow.svg';

const BackLink = styled(Link)`
    position: absolute;
    z-index: 1;
    top: 1rem;
    left: -1rem;
	color: transparent;
	font-size: 0.1rem;
    margin: 1.5rem;
	padding: 1rem;
	background: url(${backArrow});
	background-repeat: no-repeat;
	background-size: 2rem;
	background-position: left center;

    transition: left 200ms ease-in-out;
    &:hover {
        left: -2rem;
        padding-right: 2rem;
    }
    &:active {
        scale: 0.9;
    }
`

export default function () {
    const location = useLocation();
    const { pathname } = location;
    const target = /\/project\/(?:.+)/.test(pathname) ? "/my-work" : "/"
    return pathname !== "/" ? (
        <BackLink to={target}>Retour</BackLink>
    ) : null
}