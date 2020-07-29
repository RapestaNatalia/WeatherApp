const path = require('path');

require('dotenv').config()

const fetchNode = require('node-fetch');

const weather_url = process.env.WEATHER_URL || 'https://api.openweathermap.org/data/2.5/' ;
const weather_key=process.env.WEATHER_KEY || ''  ;



  async function getCurrentWeather(city){
    console.log('process variables',weather_key,weather_url);
    console.log('current city',city);
    try {
        const resp = await fetchNode(`${weather_url}weather?q=${city}&units=metric&lang=es&APPID=${weather_key}&lang=es`);
        const json = await resp.json();
        return json;
    } catch (error) {
      console.error(error)
    }
  }
  
  async function getForestWeather(city) {

    try {
        const resp = await fetchNode(`${weather_url}forecast?q=${city}&units=metric&lang=es&APPID=${weather_key}&lang=es`)
        const json = await resp.json()
        return json;
    } catch (error) {
      console.error(error)
    }
    
  }
module.exports={
    getCurrentWeather,
    getForestWeather
}