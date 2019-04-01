import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { apiReducer, loadingReducer, StateOfImages, AboutPageReducer } from './Reducers/ApiReducer';

const allReducers = combineReducers({
  ApiImages: apiReducer,
  loading: loadingReducer,
  StateOfMyApp: StateOfImages,
  AboutPageVisible: AboutPageReducer,
})

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  // composeWithDevTools(),
)

const store = createStore(
  allReducers,
  allStoreEnchancers,
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider> ,document.getElementById('root')
);

serviceWorker.unregister();