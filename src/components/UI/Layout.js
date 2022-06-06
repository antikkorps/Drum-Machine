import React from 'react';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  const [isLight, setIsLight] = useState(true);

  function handleToggleTheme() {
    setIsLight(!isLight);
  }

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header isLight={isLight} handleToggleTheme={handleToggleTheme} />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div``;

const Main = styled.div`
  min-height: calc(100vh - 18vh);
  width: 96%;
  max-width: 1246px;
  margin: auto;
  margin-top: 2vh;
`;
