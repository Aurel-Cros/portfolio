import { Link } from 'react-router-dom';

import colors from '../styles/colors';
import styled from 'styled-components';

const StyledButton = styled(Link)`
    cursor: pointer;
    color: ${colors.whiteBase};
    text-align: center;

    background: linear-gradient(to left, ${colors.lightBlue} 65%, ${colors.lime} 120%);
    background-size: 200% 100%;
    background-position: 100% 0;
    border: none;
    border-radius: 1.25rem;
    padding: 0.25rem 1rem;

    font-family: Montserrat;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: -0.007rem;
    text-decoration: none;

    transition: background-position 500ms ease-in-out;
    &:hover {
        background-position: 0 0;
    }
    &:active {
        scale: 0.98;
        box-shadow: inset 1px 1px 4px ${colors.greyText};
    }
`
export default function Button({ to, className, children }) {
    return (
        <StyledButton to={window.location.origin + to} className={className}>
            {children}
        </StyledButton>
    )
}