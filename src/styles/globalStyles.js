import { createGlobalStyle } from "styled-components";
import * as mixins from './mixins';
import colors from './colors';
import backgroundImage from '../assets/images/newyork-background.webp';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: Montserrat, serif;
    color: ${colors.darkBlue};
    overflow-x: hidden;
}

#root {
	min-height: 100vh;
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center bottom;
}
h1 {
    font-family: Montserrat;
    font-size: 3.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-variant: small-caps; 
}
h2 {
    ${mixins.text.subtitle}
}
`

export default GlobalStyles;