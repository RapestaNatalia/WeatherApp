import {
    REQUEST_FORECAST_WEATHER_POSITION,
    REQUEST_CURRENT_WEATHER_POSITION,
    FORESCAST_WEATHER_POSITION_SUCCESS,
    CURRENT_WEATHER_POSITION_SUCCESS,
    CURRENT_WEATHER_POSITION_ERROR,
    FORESCAST_WEATHER_POSITION_ERROR,
    CHANGE_SELECTED_LOCATION
  } from 'actions/weather/';
  
  const initialState = {
    isCurrentWeatherFetching: false,
    isForestWeatherFetching: false,
    currentWeather: [],
    forestWeather: [],
    selectedId:0,
    error: ''
  };
  export function weatherReducer(state = initialState, action) {
    switch (action.type) {
      case REQUEST_CURRENT_WEATHER_POSITION:
        return {
          ...state,
          isCurrentWeatherFetching: true
        };
      case REQUEST_FORECAST_WEATHER_POSITION:
        return {
          ...state,
          isForestWeatherFetching: true
        };
      case FORESCAST_WEATHER_POSITION_SUCCESS:
        return {
          ...state,
          isForestWeatherFetching: false,
          forestWeather: [...state.forestWeather,action.payload.result]
        };
      case CURRENT_WEATHER_POSITION_SUCCESS:
        return {
          ...state,
          isCurrentWeatherFetching: false,
          currentWeather: [...state.currentWeather,action.payload.result]
        };
      case CURRENT_WEATHER_POSITION_ERROR:
        return {
          ...state,
          isCurrentWeatherFetching: false,
          error: action.err,
          currentWeather: [...state.currentWeather]
        };
      case FORESCAST_WEATHER_POSITION_ERROR:
        return {
          ...state,
          isForestWeatherFetching: false,
          error: action.err,
          forestWeather: [...state.forestWeather]
        };
      case CHANGE_SELECTED_LOCATION:
        return {
          ...state,  
          selectedId:action.payload
        };
      default:
        return state;
    }
  }
  