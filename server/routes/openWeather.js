const express = require('express');

const api_weather = express.Router();
const weather = require('../openWeather/openWeather');
const location = require('../ip-api/ip-api');

api_weather.get('/current/:city?', async(req, res) => {
    try {
        let city = req.params.city;
        console.log('city req',city);
        if (!city) {
            var remote_ip = req.headers['x-real-ip'] || req.connection.remoteAddress  || req.headers['x-forwarded-for'];
            end_ip=remote_ip.split(':')[3];
            console.log(end_ip);
            const loc=await location.getLocation('xxx.xxx.xxx.xx');
            city=loc.city;
            console.log('city ip-api',city);
            
        }
         const weather_result = await weather.getCurrentWeather(city);
         console.log('result',weather_result);
         res.status(200).json(weather_result);
        } catch (e) {
              console.log(e);
        }
});
api_weather.get('/forest/:city?', async(req, res) => {
    try {
        let city = req.params.city;
        console.log('city req',city);
        if (!city) {
            var remote_ip = req.headers['x-real-ip'] || req.connection.remoteAddress  || req.headers['x-forwarded-for'];
            end_ip=remote_ip.split(':')[3];
            console.log(end_ip);
            const loc=await location.getLocation('xxx.xxx.xxx.xx');
            city=loc.city;
            console.log('city ip-api',city);
            
        }
        const weather_result = await weather.getForestWeather(city);
        console.log('result',weather_result);
        res.status(200).json(weather_result);
        } catch (e) {
              console.log(e);
        }
});

module.exports=api_weather;