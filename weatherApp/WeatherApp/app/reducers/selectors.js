import { createSelector } from 'reselect';

export const getCurrentSelector = createSelector(
    state => state.weatherReducer.currentWeather,
    currentWeather =>currentWeather
);
export const isCurrentWeatherFetchingSelector = createSelector(
    state => state.weatherReducer.isCurrentWeatherFetching,
    isCurrentWeatherFetching => isCurrentWeatherFetching
 );
export const isForestWeatherFetchingSelector = createSelector(
    state => state.weatherReducer.isForestWeatherFetching,
    isForestWeatherFetching =>isForestWeatherFetching
 );
export const getForecastedSelector = createSelector(
    state => state.weatherReducer.forestWeather,
    forestWeather => forestWeather
 );
 export const selectedIdSelector = createSelector(
     state => state.weatherReducer.selectedId,
     selectedId => selectedId
 )