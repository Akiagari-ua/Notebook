import React from 'react';

import { TButtonProps } from './types';
import { BaseButton } from './styles';

export const Button = ({ children, type }: TButtonProps) => {
  return <BaseButton type={type}>{children}</BaseButton>;
};
