import React from 'react';

import { Input } from '@notepad/ui-elements/ui-kit/form';
import { Button } from '@notepad/ui-elements';

import { Wrapper, Title } from './styles';

export const LoginPage = () => {
  return (
    <Wrapper>
      <Title>Log In</Title>
      <Input label={'email'} />
      <Input label={'password'} />

      <Button type="submit">Log In</Button>
    </Wrapper>
  );
};
