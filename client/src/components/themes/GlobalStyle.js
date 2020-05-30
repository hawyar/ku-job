import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    body, html {
        font-family: ${(props) => props.theme.fonts.main};
        height: 100%;
        background-color: ${(props) => props.theme.colors.kindaWhite}
    }
`;

export default GlobalStyle;
