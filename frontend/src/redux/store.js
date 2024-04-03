import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from 'redux';
  import thunk from 'redux-thunk';

  import { productReducer } from './User_Redux/products/reducer';

  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootReducer = combineReducers({
    productReducer,
  });
  export const store = legacy_createStore(
    rootReducer,
    enhancer(applyMiddleware(thunk)),
  );