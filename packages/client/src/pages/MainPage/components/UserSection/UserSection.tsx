import React from 'react';
import { Icon } from '@notepad/ui-elements';
import { Wrapper } from './styles';

export const UserSection = () => {
  return (
    <Wrapper>
      <Icon name={Icon.icons.user} size={Icon.size.medium} />
      <div>Nikita</div>
    </Wrapper>
  );
};
