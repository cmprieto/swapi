import { createGlobalStyle } from "styled-components";
import RobotoWoff from "./fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff";
import RobotoWoff2 from "./fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff2";
import Starjhol from "./fonts/Star_Jedi_Hollow/Starjhol.ttf";
import Starjedi from "./fonts/starjedi/Starjedi.ttf";
import Anton from "./fonts/Anton/Anton.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');

/*     font-family: 'Star_Jedi_Hollow';
    src: url(${Starjhol}) format('ttf'); */

  /*   font-family: 'Starjedi';
    src: url(${Starjedi}) format('ttf'); */

  /*    font-family: 'Anton';
    src: url(${Anton}) format('ttf');  */
}
`;

export default FontStyles;
