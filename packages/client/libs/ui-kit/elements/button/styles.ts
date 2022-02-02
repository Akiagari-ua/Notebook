import styled from 'styled-components';
import { rem } from '../../utils';

export const BaseButton = styled.button`
  border: ${rem(2)} solid #000;
  background: transparent;
  box-shadow: ${rem(3)} ${rem(3)} rgba(0, 0, 0, 1);
  cursor: pointer;
  outline: none;
  letter-spacing: ${rem(1)};
  position: relative;
  overflow: hidden;
  transition: ease.3s;

  &:before {
    content: ' ';
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    mix-blend-mode: multiply;
    left: -100%;
    top: 0;
    z-index: -1;
    transition: ease.3s;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: #fff;
    box-shadow: ${rem(3)} ${rem(3)} #fff;
  }
`;
