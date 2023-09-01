import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat.ttf";
import MontserratItalic from "../assets/fonts/Montserrat-Italic.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: Montserrat;
  src: local('Montserrat'), url(${Montserrat}) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: Montserrat;
  font-style: italic;
  src: local('Montserrat-Italic'), local('Montserrat'), url(${MontserratItalic}) format('truetype');
  font-display: swap;
}
`;

export default FontStyles;
