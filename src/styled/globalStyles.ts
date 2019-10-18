import { createGlobalStyle } from 'styled-components';

// minimum reset styles and font setting
export const GlobalStyles = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-overflow-scrolling: touch;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 112.5%;
  }
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background: rgb(246, 247, 248);
  }

`;
