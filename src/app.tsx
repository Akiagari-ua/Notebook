import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
import Header from './components/Header';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import themes from './ui-kit/theme';

const currentTheme = 'light';

const App = () => {
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
