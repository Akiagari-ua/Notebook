import React from 'react';

import { LoginPage, MainPage, WelcomePage } from '../pages';
import { Navigate } from 'react-router';

import { routes } from './routes';

export const routerConfig = [
  {
    path: routes.AUTH_PAGE,
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Navigate to={routes.NOTEPAD} />,
  },
  {
    path: `${routes.NOTEPAD}`,
    element: <MainPage />,
    children: [
      {
        path: '',
        element: <WelcomePage />,
      },
      {
        path: `:id`,
        element: <>id</>,
      },
    ],
  },
];
