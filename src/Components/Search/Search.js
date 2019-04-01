import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../utlis/media';


import { connect } from 'react-redux';
import { ApiRun, ApiTake, StateOfImageFunc } from '../../actions/ApiRequest';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 10vh;
  transition: .5s;
`;

const H1 = styled.h1`
  margin: 0;
  margin-top: ${({stateOfApp}) => stateOfApp === 1 ? 3 : 0}vh;
  padding: 0;
  text-align: center;
  font-size: ${({stateOfApp}) => stateOfApp === 1 ? 1 : 1.2}rem;
  color: white;
  font-weight: 500;

  ${media.fullHd`
    font-size: ${({stateOfApp}) => stateOfApp === 1 ? 1.4 : 1.7}rem;
  `}
`;

const InputText = styled.input`
  margin-top: ${({stateOfApp}) => stateOfApp === 1 ? 0 : 2}vh;
  border: none;
  border-bottom: white solid 2px;
  text-align: center;
  color: white;
  background: none;
  outline: 0;
  font-size: ${({stateOfApp}) => stateOfApp === 1 ? 1.2 : 1.5}rem;
  height: 5vh;
  width: 80%;

  ${media.tablet`
    font-size: ${({stateOfApp}) => stateOfApp === 1 ? 1 : 1.2}rem;
    height: 6vh;
    width: 60%;
  `}
`;

const LoadingP = styled.div`
  font-size: ${({stateOfApp}) => stateOfApp === 1 ? 1 : 1.2}rem;
  margin-top: 2vh;
`;

const AnyPhotoP = styled(LoadingP)`
  font-size: 1.2rem;
  color: #722B2B;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.fullHd`
    font-size: 1.7;
  `}
`;

class Search extends Component{

  confirm = (e) => {
    let letter = e.key;
    let stringLetters = e.target.value;
    if(letter === 'Enter'){
      this.props.onTakeApi(stringLetters);
      this.props.onLoading(true);
    }
  };
  
  render(){

    const { stateOfApp, loading } = this.props

    return(
      <>
        <SearchWrapper>
          <H1 stateOfApp={stateOfApp}>What do you want to see in a cosmos?</H1>
          <InputText stateOfApp={stateOfApp} onKeyUpCapture={this.confirm.bind(this)}/>
          {
            loading ? <LoadingP stateOfApp={stateOfApp}>Loading...</LoadingP> : null
          }
          {
            stateOfApp === 2 && loading !== true ? 
              <AnyPhotoP >There isn’t any photo for your question</AnyPhotoP> : null
          }
        </SearchWrapper>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    myTab: state.ApiImages,
    loading: state.loading,
    stateOfApp: state.StateOfMyApp,
  }
}

const mapActionToProps = {
  onLoading: ApiRun,
  onTakeApi: ApiTake,
  onStanOfApp: StateOfImageFunc,
}

export default connect(mapStateToProps, mapActionToProps)(Search);