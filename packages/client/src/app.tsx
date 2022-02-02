import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { routerConfig } from './routes';
import { useRoutes } from 'react-router-dom';

// import { Layout } from './components/Layout';
const App = () => {
  const content = useRoutes(routerConfig);
  return (
    <ThemeProvider theme={{}}>
      {content}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
