import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import themes from './ui-kit/theme';
import { routerConfig } from './routes';
import { useRoutes } from 'react-router-dom';

// import { Layout } from './components/Layout';

const currentTheme = 'light';

const App = () => {
  const content = useRoutes(routerConfig);
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      {content}
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
