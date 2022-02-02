import React from 'react';
import { Outlet } from 'react-router-dom';

import { UserSection, NotesList } from './components';
import { SidebarContainer, ContentContainer, Wrapper } from './styles';

export const MainPage = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        <UserSection />
        <NotesList list={[]} />
      </SidebarContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Wrapper>
  );
};
