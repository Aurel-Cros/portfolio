import { createGlobalStyle } from "styled-components";
import * as mixins from './mixins';
import colors from './colors';
import backgroundImage from '../assets/images/newyork-background.webp';

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
}

main {
    position: relative;
    width: min(75rem, 95vw);
    margin: 1.4rem auto;
    display: flex;
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
    ${mixins.text.subtitle}
    color: ${colors.darkBlue};
}
`

export default GlobalStyles;