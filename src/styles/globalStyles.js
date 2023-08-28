import { createGlobalStyle } from "styled-components";
import * as mixins from './mixins';
import colors from './colors';
import backgroundImage from '../assets/images/newyork-background-pp.webp';

const GlobalStyles = createGlobalStyle`
html {
    overflow-x: hidden;
}
body {
    margin: 0;
    font-family: Montserrat, serif;
    color: ${colors.greyText};
    font-size: 0.85rem;
    overflow-x: hidden;
}

#root {
	min-height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center bottom;
    padding-bottom: 2rem;
}

main {
    position: relative;
    width: min(75rem, 95vw);
    margin: 1.4rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
}
h1 {
    font-family: Montserrat;
    font-size: 3.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-variant: small-caps;

    color: ${colors.darkBlue};
}
h2 {
    color: ${colors.darkBlue};

    font-family: Montserrat;
    font-size: 2.2rem;
    font-weight: 500;
    font-variant: all-small-caps;
    letter-spacing: 0.14rem;
}
a {
    text-decoration: none;
    color: ${colors.greyText};
    &.underline {
        padding-bottom: 0.1rem;
        background-image: linear-gradient(to right, ${colors.darkBlue}, 50%, ${colors.darkBlue25});
        background-size: 0 1px;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        transition: background-size 600ms cubic-bezier(.57,0,.25,.63);
        &:not(.inactive):hover  {
            background-size: calc(100% - 2.5rem) 1px;
        }
        &:before {
            display: inline-block;
            content: "";
            margin: -0.33rem 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            background-size: 1.5rem 1.5rem;
            background-repeat: no-repeat;
        }
    }
    
    &.inactive {
        filter: grayscale(100%) contrast(10%);
        cursor: default;
    }
}
button {
    font-family: Montserrat;
}
@media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
    :root {
        font-size: clamp(13px, 4vw, 16px);
    }
    main {
        width: min(600px, 90%);
    }
    h1 {
        font-size: 2.4rem;
    }
}
`

export default GlobalStyles;