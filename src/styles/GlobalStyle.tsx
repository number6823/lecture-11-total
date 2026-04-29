import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {margin: 0; padding: 0; box-sizing: border-box;
}
a {text-decoration: none;
color: inherit;}

body{
    background-color: ${props => props.theme.colors.background.default};
    color: ${props => props.theme.colors.text.default};
    font-family: "Pretendard", sans-serif;
}`;

export default GlobalStyles;
