export const LOADING = 'allData: apiData';
export const API_IMAGES = 'addImages: apiImages';
export const STATE_OF_IMAGES = 'StateOfImage';
export const About_Page_Visible = "aboutPageVisible";

export function ApiRun(myState){
  return{
    type: LOADING,
    payload: {
      myAllData: myState,
    }
  }
}

export function FinallyRequest(items){
  return{
    type: API_IMAGES,
    payload: {
      myAllImages: items,
    }
  }
}

export function StateOfImageFunc(value){
  return{
    type: STATE_OF_IMAGES,
    payload:{
      StanOfMyApp: value,
    }
  }
}

export function AboutPageVisible(value) {
  return{
    type: About_Page_Visible,
    payload:{
      StanOfAboutVisibleState: value,
    }
  }
}

export function ApiTake(newApi){
  return dispatch => {
    fetch(`https://images-api.nasa.gov/search?q=${newApi}&media_type=image`)
      .then(res => res.json())
      .then(res => {
        if(res.collection.items.length > 0){
          dispatch(StateOfImageFunc(1));
        } else {
          dispatch(StateOfImageFunc(2));
        }
        dispatch(FinallyRequest(res.collection.items));
      })
      .finally(() => {
        dispatch(ApiRun(false));
      })
  }
}