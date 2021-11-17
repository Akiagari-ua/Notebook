import React from 'react';
import { Flex } from '../../ui-kit/blocks';
import styled, { useTheme } from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.buttons.defaultButton.background};
  color: ${(props) => props.theme.buttons.defaultButton.color};
  border-radius: ${(props) => props.theme.buttons.defaultButton.borderRadius};
  border-color: ${(props) => props.theme.buttons.defaultButton.borderColor};
`;

const Header = () => {
  const theme = useTheme();
  return (
    //@ts-ignore
    <Flex bg={theme.colors.main}>
      {'Hello'}
      <Flex>
        <Button>I am button</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
