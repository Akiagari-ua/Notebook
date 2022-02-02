import styled from 'styled-components';
import { rem } from '@notepad/ui-elements';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  flex: 1;
  border-right: ${rem(2)} solid;
`;

export const ContentContainer = styled.div`
  flex: 3;
  padding: ${rem(20)};
`;
