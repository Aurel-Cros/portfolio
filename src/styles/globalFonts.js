import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat.ttf";
import MontserratItalic from "../assets/fonts/Montserrat-Italic.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: Montserrat;
  src: url(${Montserrat}) format('truetype');
}

@font-face {
  font-family: Montserrat;
  font-style: italic;
  src: url(${MontserratItalic}) format('truetype');
}
`;

export default FontStyles;
