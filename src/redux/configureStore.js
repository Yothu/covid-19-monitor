import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import regions from './regions/regions';

const reducer = combineReducers({
  regions,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
