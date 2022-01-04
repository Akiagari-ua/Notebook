import React from 'react';

import { Input } from '@ui/form';
import { Button } from '@ui/elements';

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
