import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import regions from './regions/regions';
// import missionsReducer from './missions/missions';

const reducer = combineReducers({
  regions,
  // missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
