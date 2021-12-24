import {
  REQUEST_FORECAST_WEATHER_POSITION,
  REQUEST_CURRENT_WEATHER_POSITION,
  FORESCAST_WEATHER_POSITION_SUCCESS,
  CURRENT_WEATHER_POSITION_SUCCESS,
  CURRENT_WEATHER_POSITION_ERROR,
  FORESCAST_WEATHER_POSITION_ERROR,
  CHANGE_SELECTED_LOCATION,
  DELETE_CURRENT_WEATHER,
  DELETE_FOREST_WEATHER,
  DELETE_CITY,
} from 'actions/weather/';

const initialState = {
  isCurrentWeatherFetching: false,
  isForestWeatherFetching: false,
  currentWeather: [],
  forestWeather: [],
  selectedId: 0,
  error: '',
  temporalCurrent: {},
};
export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CURRENT_WEATHER_POSITION:
      return {
        ...state,
        isCurrentWeatherFetching: true,
      };
    case REQUEST_FORECAST_WEATHER_POSITION:
      return {
        ...state,
        isForestWeatherFetching: true,
      };
    case FORESCAST_WEATHER_POSITION_SUCCESS:
      return {
        ...state,
        isForestWeatherFetching: false,
        forestWeather: [...state.forestWeather, action.payload.result],
      };
    case CURRENT_WEATHER_POSITION_SUCCESS:
      let temp = state.currentWeather;
      temp[action.payload.position] = action.payload.result;
      let tempCurrent = {};
      temp.map((d, index) => {
        tempCurrent[d.id] = index;
      });
      return {
        ...state,
        isCurrentWeatherFetching: false,
        currentWeather: temp,
        temporalCurrent: tempCurrent,
      };
    case CURRENT_WEATHER_POSITION_ERROR:
      return {
        ...state,
        isCurrentWeatherFetching: false,
        error: action.err,
        currentWeather: [...state.currentWeather],
      };
    case FORESCAST_WEATHER_POSITION_ERROR:
      return {
        ...state,
        isForestWeatherFetching: false,
        error: action.err,
        forestWeather: [...state.forestWeather],
      };
    case CHANGE_SELECTED_LOCATION:
      return {
        ...state,
        selectedId: action.payload,
      };
    case DELETE_CURRENT_WEATHER:
      return {
        ...state,
        temporalCurrent: action.payload,
      };
    case DELETE_FOREST_WEATHER:
      return {
        ...state,
        forestWeather: [],
      };
    case DELETE_CITY:
      let newArray = [];
      state.currentWeather.map((val) => {
        if (val.id !== action.payload) {
          newArray.push(val);
        }
      });
      let tempCurrent2 = {};
      newArray.map((d, index) => {
        tempCurrent2[d.id] = index;
      });
      return {
        ...state,
        currentWeather: newArray,
        temporalCurrent: tempCurrent2,
      };
    default:
      return state;
  }
}
