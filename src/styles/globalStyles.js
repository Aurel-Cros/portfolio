import { createGlobalStyle } from "styled-components";
import * as mixins from './mixins';
import colors from './colors';
import backgroundImage from '../assets/images/newyork-background-pp.webp';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: Montserrat, serif;
    color: ${colors.greyText};
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
}
button {
    font-family: Montserrat;
}
@media screen and (max-width: 820px){
    :root {
        font-size: 12px;
    }
}
`

export default GlobalStyles;