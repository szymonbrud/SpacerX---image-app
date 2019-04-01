import React, { Component } from 'react';
import Layout from './Layout/Layout.js';
import styled from 'styled-components';
import Logo from './Components/Logo/Logo';
import AboutButton from './Components/AboutButton/AboutButton'
import Search from './Components/Search/Search';
import AboutPage from './Components/AboutPage/AboutPage';
import Images from './Components/Images/Images';

import { connect } from 'react-redux';
import { AboutPageVisible } from './actions/ApiRequest';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
`;

const WrapperForSearch = styled.div`
  width: 100%;
  height: 20vh;
  background: ${({stateOfApp}) => stateOfApp === 1 ? `rgba(0,0,0,.1)` : `rgba(0,0,0,0)`};
  border-bottom: ${({stateOfApp}) => stateOfApp === 1 ? `.5px solid #000` : `0px solid #352929`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {

    const { stateOfApp, AboutPageVisibleStan, AboutPageVisible } = this.props;

    return (
      <>
        <Layout>
          <Logo stateOfApp={stateOfApp}>SpacerX</Logo>
          <AboutButton stateOfApp={stateOfApp} onClick={() => AboutPageVisible(true)}>About app</AboutButton>
          <MainWrapper>
            <WrapperForSearch stateOfApp={stateOfApp}>
              <Search/>
            </WrapperForSearch>
            <Images/>
          </MainWrapper>
          {
            AboutPageVisibleStan ? <AboutPage/> : null
          }
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateOfApp: state.StateOfMyApp,
    AboutPageVisibleStan: state.AboutPageVisible,
  }
}

const mapActionToProps = {
  AboutPageVisible: AboutPageVisible,
}

export default connect(mapStateToProps, mapActionToProps) (App);
