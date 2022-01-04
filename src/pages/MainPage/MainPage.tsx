import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { SidebarContainer, ContentContainer, Wrapper } from './styles';

export const MainPage = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        {[
          ...Array(20)
            .fill('')
            .map((_, i) => (
              <Link to={`${i}`} key={i}>
                Notepad {i}
              </Link>
            )),
        ]}
      </SidebarContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Wrapper>
  );
};
