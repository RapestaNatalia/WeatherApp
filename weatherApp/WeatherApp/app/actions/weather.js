import CONFIG from 'config/environment/';
import { fetchUrl } from 'helpers/network';
import { getWeekday, groupBy, mostOcurrences } from 'helpers/utils/';
import { Alert } from 'react-native';
import strings from 'config/constants/strings';
export const REQUEST_CURRENT_WEATHER_POSITION = 'REQUEST_WEATHER_POSITION';
export const REQUEST_FORECAST_WEATHER_POSITION =
  'REQUEST_FORECAST_WEATHER_POSITION';
export const FORESCAST_WEATHER_POSITION_SUCCESS =
  'FORESCAST_WEATHER_POSITION_SUCCESS';
export const CURRENT_WEATHER_POSITION_SUCCESS =
  'CURRENT_WEATHER_POSITION_SUCCESS';
export const FORESCAST_WEATHER_POSITION_ERROR =
  'FORESCAST_WEATHER_POSITION_ERROR';
export const CURRENT_WEATHER_POSITION_ERROR = 'CURRENT_WEATHER_POSITION_ERROR';
export const CHANGE_SELECTED_LOCATION = 'CHANGE_SELECTED_LOCATION';

export function requestCurrentWeatherPosition() {
  return {
    type: REQUEST_CURRENT_WEATHER_POSITION
  };
}
export function requestForecastWeatherPosition() {
  return {
    type: REQUEST_FORECAST_WEATHER_POSITION
  };
}

export function currentWeatherPositionSuccess(result) {
  return {
    type: CURRENT_WEATHER_POSITION_SUCCESS,
    payload: { result }
  };
}
export function forecastWeatherPositionSuccess(result) {
  return {
    type: FORESCAST_WEATHER_POSITION_SUCCESS,
    payload: { result }
  };
}

export function currentWeatherPositionFailed(error) {
  return {
    type: CURRENT_WEATHER_POSITION_ERROR,
    err: error
  };
}
export function forecastWeatherPositionFailed(error) {
  return {
    type: FORESCAST_WEATHER_POSITION_ERROR,
    err: error
  };
}

export function getForecastWeatherPosition(city) {
  let conditions='forest'
  if(city){
     conditions=conditions+'/'+city;;
  }
  return (dispatch, getState) => {
    dispatch(requestForecastWeatherPosition());
    const apiUrl = `${CONFIG.SERVER}${conditions}`;

    fetchUrl(apiUrl)
      .then(result => {
        if(result.data!=""){
          const prepareResult = prepareForecastResultToSave(result.data);
          dispatch(forecastWeatherPositionSuccess(prepareResult));  
        }else{
          dispatch(
            forecastWeatherPositionFailed(strings.no_results)
          )
        } 
       })
      .catch(err =>
        dispatch(
          forecastWeatherPositionFailed(err)
        )
      );
  };
}
function prepareForecastResultToSave(result) {
  const newArray = result.list.map(i => ({
    weekday: getWeekday(i.dt),
    minTemp: i.main.temp_min,
    maxTemp: i.main.temp_max,
    icon: i.weather[0].icon.substring(0, 2),
    weatherText: i.weather[0].description
  }));

  let groupWeekday = groupBy(newArray, 'weekday');

  let firstWeekdayWeather = [];

  for (let i in groupWeekday) {
    let minTemp = Math.min(...groupWeekday[i].map(d => d.minTemp));
    let maxTemp = Math.max(...groupWeekday[i].map(d => d.maxTemp));
    const weatherTextIcon = mostOcurrences(
      groupWeekday[i].map(d => `${d.icon}-${d.weatherText}`)
    ).split('-');
    firstWeekdayWeather.push({
      weekday: groupWeekday[i][0].weekday,
      minTemp: minTemp,
      maxTemp: maxTemp,
      icon: weatherTextIcon[0],
      weatherText: weatherTextIcon[1],
      id:result.city.id
    });
  }
  firstWeekdayWeather= firstWeekdayWeather.slice(0,5);

  return firstWeekdayWeather;
}

export function getCurrentWeatherPosition(city) {
  let conditions='current'
  if(city){
     conditions=conditions+'/'+city;
  }
  return (dispatch, getState) => {
    dispatch(requestCurrentWeatherPosition());
    const apiUrl = `${CONFIG.SERVER}${conditions}`;

    fetchUrl(apiUrl)
      .then(result => {
        if(result.data!=""){
          const prepareResult = prepareCurrentResultToSave(result.data);
          dispatch(currentWeatherPositionSuccess(prepareResult));
        }else{
          dispatch(
            currentWeatherPositionFailed(strings.no_results)
          )
        }  
      })
      .catch(err =>
        dispatch(
          currentWeatherPositionFailed(
            err
          )
        )
      );
  };
}
function prepareCurrentResultToSave(result) {
  const weekday = getWeekday(result.dt);
  const preparedResult = {
    temp: result.main.temp,
    icon: result.weather[0].icon.substring(0, 2),
    weekday: weekday,
    description: result.weather[0].description,
    city:result.name,
    id:result.id
  };
  return preparedResult;
}

export function getLocations() {
  return require('assets/raw/city.list.min.json');
}

export function changeSelected(selectedId){
  return (dispatch, getState) => {
    dispatch(requestChangeSelected(selectedId));
}
}
export function requestChangeSelected(selectedId){
  return{
    type:CHANGE_SELECTED_LOCATION,
    payload:selectedId
  }
}