import { Link, useLocation } from "react-router-dom";

import styled from 'styled-components';
import backArrow from '../assets/icons/back-arrow.svg';

const BackLink = styled(Link)`
	color: transparent;
	font-size: 0.1rem;
	padding: 1rem;
	background: url(${backArrow});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center center;
`

export default function () {
    const location = useLocation();
    const { pathname } = location;
    const target = /\/project\/(?:.+)/.test(pathname) ? "/my-work" : "/"
    console.log(pathname)
    return pathname !== "/" ? (
        <BackLink to={target}>Retour</BackLink>
    ) : null
}