import { createGlobalStyle } from "styled-components";
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
`

export default GlobalStyles;