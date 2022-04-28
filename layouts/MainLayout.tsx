import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/global-style';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  );
};

export default MainLayout;
