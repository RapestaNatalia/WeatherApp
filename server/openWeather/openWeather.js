const fetch = require("node-fetch-commonjs");
const path = require("path");

require("dotenv").config();

const weather_url =
  process.env.WEATHER_URL || "https://api.openweathermap.org/data/2.5/";
const weather_key = process.env.WEATHER_KEY || "";

async function getCurrentWeather(city) {
  try {
    const resp = await fetch(
      `${weather_url}weather?q=${city}&units=metric&lang=en&APPID=${weather_key}&lang=es`
    );
    const json = await resp.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function getForestWeather(city) {
  try {
    const resp = await fetch(
      `${weather_url}forecast?q=${city}&units=metric&lang=en&APPID=${weather_key}`
    );
    const json = await resp.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  getCurrentWeather,
  getForestWeather,
};
