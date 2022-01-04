import React from 'react';

import { Container } from './styles';
import type { TLayoutProps } from './types';

export const Layout = ({ children }: TLayoutProps) => {
  return <Container>{children}</Container>;
};
