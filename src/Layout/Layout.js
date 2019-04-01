import React from 'react';
import styled, { createGlobalStyle , ThemeProvider} from 'styled-components';
import { theme } from '../utlis/theme';
import bg from '../img/bg.jpg';
import media from '../utlis/media';


const GlobalStyle = createGlobalStyle`

  html{
    font-size: 15px; 

    ${media.tablet`
      font-size: 22px;
    `}

    ${media.desktop`
      font-size: 22px;
    `}
  }

  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  background-image: url('${bg}');
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
`;

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;