import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    color: #00030a;
    background-color: rgba(234, 241, 5, 0.76);
  }

  body {
    margin: 0;
    font-family: 'Montserrat', 'Tinos', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.primaryBg};
      //color: ${theme.colors.mainFont};
    line-height: 1.2;
    min-width: 360px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.mainFont};
  }

  ul {
    list-style: none;
  }

  button {
    color: ${theme.colors.secondaryFont};
  }
`