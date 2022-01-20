import React from 'react';
import { Outlet } from 'react-router-dom';

import { UserSection } from './components';
import { SidebarContainer, ContentContainer, Wrapper } from './styles';

export const MainPage = () => {
  // const notepads: any = [];
  return (
    <Wrapper>
      <SidebarContainer>
        <UserSection />
      </SidebarContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Wrapper>
  );
};
