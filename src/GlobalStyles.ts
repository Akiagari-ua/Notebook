import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
      font-family: 'Balsamiq Sans', cursive;
    }
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#root {
  height: 100vh;
}
`;
