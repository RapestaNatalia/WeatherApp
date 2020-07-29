import { combineReducers } from 'redux';
import { weatherReducer } from 'reducers/weatherReducer/';

export const defaultReducer = (state = 0, action) => state;

const rootReducer = combineReducers({
  defaultReducer,
  weatherReducer
});

export default rootReducer;
