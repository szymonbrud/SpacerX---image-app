import React, { Component } from "react";
import styled from "styled-components";
import bg from "../../img/bg.png";
import Logo from "../Logo/Logo";
import AboutButton from "../AboutButton/AboutButton";
import media from "../../utlis/media";

import { connect } from "react-redux";
import { AboutPageVisible } from "../../actions/ApiRequest";

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
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-iteration-count: 1;

  @keyframes spadanie {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const H1 = styled.h1`
  padding: 0;
  font-weight: 700;
  font-size: 1.4rem;
  margin: 15vh 0 0 6%;

  @media (orientation: landscape) {
    margin: 20vh 0 0 6%;
  }
  @media (max-width: 900px) and (orientation: landscape) {
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

  @media (max-width: 900px) and (orientation: landscape) {
    font-size: 0.8rem;
  }

  ${media.fullHd`
    font-size: 1.6rem;
  `}
`;

const Text2 = styled.p`
  padding: 0;
  margin: ${({ two }) => (two ? "1vh" : "6vh")} 6% 2vh;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  @media (max-width: 900px) and (orientation: landscape) {
    font-size: 0.8rem;
  }

  ${media.fullHd`
    font-size: 1.6rem;
  `}
`;

class AboutPage extends Component {
  render() {
    const { AboutPageVisible } = this.props;

    return (
      <>
        <WrapperAbout>
          <Logo>SpacerX</Logo>
          <AboutButton onClick={() => AboutPageVisible(false)}>
            Back
          </AboutButton>
          <H1>Hello,</H1>
          <Text1>
            Aplikacja jest przeznaczona do oglądania zdjęć kosmosu oraz innych
            obiektów związanych ze zdjęciami satelitarnymi oraz bezpośrednio z
            NASA. Wpisujecie co chcielibyście zobaczyć (oczywiście po
            angielsku), a waszym oczom ukazują się zdjęcia o danym zapytaniu.
            Aplikacja została stworzona ponieważ chciałem doskonalić się jako
            Frontend Developer w react oraz redux właśnie w tych technologiach
            została napisana owa aplikacja.
          </Text1>
          <Text2>
            <div>
              Ikonka logo aplikacji jest z:
              <br />
              Icons made by{" "}
              <a href="https://www.freepik.com/" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>{" "}
              is licensed by{" "}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="blank"
              >
                CC 3.0 BY
              </a>
            </div>
          </Text2>
        </WrapperAbout>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapActionToProps = {
  AboutPageVisible: AboutPageVisible
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(AboutPage);
