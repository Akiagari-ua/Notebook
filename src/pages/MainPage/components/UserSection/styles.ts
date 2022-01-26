import styled from 'styled-components';
import { rem } from '../../../../ui-kit/utils';

export const Wrapper = styled.div`
  display: flex;
  height: ${rem(100)};
  border-bottom: ${rem(2)} solid;
  padding: ${rem(15)};
  align-items: center;
  gap: ${rem(10)};
`;
