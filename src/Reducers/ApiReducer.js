import {API_IMAGES, LOADING, STATE_OF_IMAGES, About_Page_Visible } from '../actions/ApiRequest';

export function apiReducer(state = [], { type, payload }){
  switch(type){
    case API_IMAGES:
      return payload.myAllImages;
    default:
      return state;
  }
}

export function loadingReducer(state = false, { type, payload }){
  switch(type){
    case LOADING: 
      return payload.myAllData;
    default:
      return state;
  }
}

export function StateOfImages(state = 0, { type, payload }){
  switch(type){
    case STATE_OF_IMAGES:
      return payload.StanOfMyApp;
    default:
      return state;
  }
}

export function AboutPageReducer(state = false, { type, payload }) {
  switch(type){
    case About_Page_Visible:
      return payload.StanOfAboutVisibleState
    default:
      return state;
  }
}