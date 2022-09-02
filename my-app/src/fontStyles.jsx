import { createGlobalStyle } from "styled-components";
import HelveticaLight from "./assets/fonts/Helvetica Neue Light.otf";
import HelveticaMedium from "./assets/fonts/Helvetica Neue LT Pro 65 Medium.otf";
import HelveticaBold from "./assets/fonts/Helvetica Neue LT Pro 75 Bold.otf";
import HelveticaRegular from "./assets/fonts/HelveticaNeue Regular.ttf";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'helvetica light';
  src: url(${HelveticaLight}) format('otf');
  font-family: 'helvetica medium';
  src: url(${HelveticaMedium}) format('otf');
  font-family: 'helvetica bold';
  src: url(${HelveticaBold}) format('otf');
  font-family: 'helvetica regular';
  src: url(${HelveticaRegular}) format('ttf');
}
`;

export default FontStyles;
