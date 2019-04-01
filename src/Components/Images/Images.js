import React, { Component } from 'react';
import styled from 'styled-components';
import bg from '../../img/bg.jpg';
import media from '../../utlis/media';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);

const ImageWrapper = styled.div`
  width: 100%;
  height: ${({StateOfApp}) => StateOfApp === 1 ? 80 : 0 }vh;
  overflow: auto;
  transition: .5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: ${({hei}) => hei ? 1 : 0}px solid black;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PageLoad = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 80vw;
  height: 30vh;
  margin: 10px;
  background: rgba(10, 10, 10, .7);
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-sizing: border-box; */
  border: 1px solid #fff;

  ${media.phone`
    width: 40%;
    height: 23vw;
  `}

  ${media.tablet`
    width: 30%;
    height: 21vw;
  `}

  ${media.desktop`
    width: 17%;
    height: 13vw;
  `}
`;

const P = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;

  ${media.tablet`
    font-size: .6rem;
  `}
`;

const Page = styled.div`
  /* width: 80vw;
  height: 30vh; */
  /* margin: 10px; */
  width: calc(100% + 2px);
  height: calc(100% + 2px);

  position: absolute;
  left: -1px;
  top: -1px;
  z-index: 1000;

  background-image: url(${({oneImage}) => oneImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const PageW = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .2s;

  :hover{
    cursor: pointer;
    opacity: .1;
  }
`;

//about PHOTO

const WrapperInfo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3000;
  background-image: url('${bg}');
  background-size: 100% 100%;
`;

const WrapperInfo2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.5);
`;

const I = styled.div`
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 3vw;
  left: 3vw;
  ${media.desktop`
    font-size: 1.7rem;
    top: 1vw;
    left: 1vw;
  `}

  cursor: pointer;
`;

const H1Div = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  margin-top: 4vh;

  
`;

const PhotoLoadWrapper = styled.div`
  margin: 4vh 5% 0;
  background: rgba(10, 10, 10, .7);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  width: 90%;
  height: 30vh;
  color: white;
  position: relative;
  top: 0;
  left: 0;

  @media (orientation: landscape) {
    height: calc(20vw);
  }
`;


const ImageAbout = styled.div`
  width: calc(100% + 2px);
  height: calc(100% + 2px);

  position: absolute;
  left: -1px;
  top: -1px;
  z-index: 1000;

  background-image: url(${({bgImage}) => bgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const DescriptionText = styled.div`
  font-size: .8rem;
  color: white;
  margin: 3vh 5% 0;
  width: 90%;
  height: 50vh;
  overflow: auto;

  @media (orientation: landscape) {
    width: 120vw;
    height: 80vh;
  }

  ${media.desktop`
    font-size: .8rem;
  `}

  ${media.fullHd`
    font-size: 1.2rem;
  `}
`;

const CenterWrapper = styled.div`

  height: 88vh;

  @media (orientation: landscape) {
    display: flex;    
  }
`;

class Images extends Component {

  constructor(){
    super();

    this.state = {
      InfoAboutPhotoVisible: false,
      numberOfPhoto: Number,
    }
  }

  showDescription = (i) => {
    this.setState({
      InfoAboutPhotoVisible: !this.state.InfoAboutPhotoVisible,
      numberOfPhoto: i,
    });
  }

  render(){

    console.log(this.props.StateOfApp)

    const { InfoAboutPhotoVisible, numberOfPhoto } = this.state;

    return(
      <>
        <ImageWrapper StateOfApp={this.props.StateOfApp}>
          {
            this.props.myTab.map((item, i) => 
              <PageLoad key={i}>
                <P>loading...</P>
                <Page oneImage={item.links[0].href}>
                  <PageW onClick={() => this.showDescription(i)}/>
                </Page>
              </PageLoad>
            )
          }
          {
            InfoAboutPhotoVisible ?
              <>
                <WrapperInfo onClick={() => this.showDescription()} stateOf={InfoAboutPhotoVisible}>
                  <WrapperInfo2>
                    <I>
                      <FontAwesomeIcon icon="arrow-left"/>
                    </I>
                    <H1Div>About this photo</H1Div>
                    <CenterWrapper>
                      <PhotoLoadWrapper>
                        Loading...
                        <ImageAbout bgImage={this.props.myTab[numberOfPhoto].links[0].href}/>
                        {console.log(this.props.myTab[numberOfPhoto].data[0].description)}
                      </PhotoLoadWrapper>
                      <DescriptionText>
                        {this.props.myTab[numberOfPhoto].data[0].description}
                      </DescriptionText>
                    </CenterWrapper>
                  </WrapperInfo2>
                  {/* <Logo>SpacerX</Logo>
                  <WrapperImg bg={this.props.imagess[this.state.descrip]}></WrapperImg>
                  <WrapperToText>{this.props.tab[this.state.descrip]}</WrapperToText>
                  <Back onClick={() => this.showDescription()}>Back</Back> */}
                </WrapperInfo>
              </> : null           
          }
        </ImageWrapper>
      </>
    )
  }
}

const mapPropsToState = (state) => {
  return{
    myTab: state.ApiImages,
    StateOfApp: state.StateOfMyApp,
  }
}

const mapActionToState = {

}

export default connect(mapPropsToState, mapActionToState) (Images);