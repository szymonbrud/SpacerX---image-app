import React, { Component } from 'react';
import styled from 'styled-components';
import bg from '../../img/bg.png';
import Logo from '../Logo/Logo';
import AboutButton from '../AboutButton/AboutButton';
import media from '../../utlis/media';

import { connect } from 'react-redux';
import { AboutPageVisible } from '../../actions/ApiRequest';

const WrapperAbout = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0; 
  background: url(${bg});
  background-size: 100% 100%;
  z-index: 9000;

  animation-name: spadanie;
  animation-fill-mode: forwards;  
  animation-duration: .4s;
  animation-iteration-count: infinite;
  animation-iteration-count: 1;

  @keyframes spadanie
  {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const H1 = styled.h1`
  padding: 0;
  font-weight: 700;
  font-size: 1.4rem;
  margin: 15vh 0 0 6%;

  @media(orientation: landscape){
    margin: 20vh 0 0 6%;
  }
  @media(max-width: 900px) and (orientation: landscape){
    font-size: 1.1rem;
  }

  ${media.fullHd`
    font-size: 1.6rem;
  `}
`;

const Text1 = styled.p`
  padding: 0;
  margin: 0 6%;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  @media(max-width: 900px) and (orientation: landscape){
    font-size: .8rem;
  }

  ${media.fullHd`
    font-size: 1.6rem;
  `}
`;

const Text2 = styled.p`
  padding: 0;
  margin: 10vh 6%;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  @media(max-width: 900px) and (orientation: landscape){
    font-size: .8rem;
  }

  ${media.fullHd`
    font-size: 1.6rem;
  `}
`;

const KontaktDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  background: rgba(213,75,61,.8);
  border-top: solid black .5px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media(orientation: landscape){
    flex-direction: inherit;
    align-items: center;
  }

  ${media.desktop`
    left: 50%;
    width: 50%
    height: 10vh;
    border: none;
  `}
`;

const P = styled.p`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin: .5vh 6%;

  @media(max-width: 900px) and (orientation: landscape){
    font-size: .8rem;
  }

  ${media.desktop`
    font-size: .6rem;
  `}
  ${media.fullHd`
    font-size: 1.2rem;
  `}
`;



class AboutPage extends Component{
  
  render(){

    const { AboutPageVisible } = this.props;

    return(
      <>
        <WrapperAbout>
          <Logo>SpacerX</Logo>
          <AboutButton onClick={() => AboutPageVisible(false)}>Back</AboutButton>
          <H1>Hello,</H1>
          <Text1>
            Aplikacja jest przeznaczona do oglądania zdjęć kosmosu oraz innych obiektów związanych ze zdjęciami satelitarnymi oraz bezpośrednio z NASA. Wpisujecie co chcielibyście zobaczyć (oczywiście po angielsku), a waszym oczom ukazują się zdjęcia o danym zapytaniu. Aplikacja została stworzona ponieważ chciałem doskonalić się jako Frontend Developer
            w react oraz redux właśnie w tych technologiach została napisana owa aplikacja.
          </Text1>
          <Text2>
            Jeśli ktoś byłby ciekawy kodu lub chciał się ze mną skontaktować to daję link do mojego GitHuba.
          </Text2>
          <KontaktDiv>
            <P>Link do mojego GitHuba:</P>
            <P>Wkrótce dostępny</P>
          </KontaktDiv>
        </WrapperAbout>
      </> 
    )
  }
}

const mapStateToProps = () => {
  return{
    
  }
}

const mapActionToProps = {
  AboutPageVisible: AboutPageVisible,
}

export default connect(mapStateToProps, mapActionToProps) (AboutPage);