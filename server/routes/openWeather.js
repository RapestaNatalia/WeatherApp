const express = require('express');

const api_weather = express.Router();
const weather = require('../openWeather/openWeather');
const location = require('../ip-api/ip-api');

api_weather.get('/current/:city?', async(req, res) => {
    try {
        let city = req.params.city;
        if (!city) {
            var remote_ip = req.headers['x-real-ip'] || req.connection.remoteAddress  || req.headers['x-forwarded-for'];
            end_ip=remote_ip.split(':')[3];
            const loc=await location.getLocation(end_ip);
            city=loc.city;
        }
         const weather_result = await weather.getCurrentWeather(city);
         if(weather_result.weather){
            res.status(200).json(weather_result);
         }else{
             res.status(404).json({code:404,message:'current weather city not found'});
         }
        } catch (e) {
        }
});
api_weather.get('/forest/:city?', async(req, res) => {
    try {
        let city = req.params.city;
        if (!city) {
            var remote_ip = req.headers['x-real-ip'] || req.connection.remoteAddress  || req.headers['x-forwarded-for'];
            end_ip=remote_ip.split(':')[3];
            const loc=await location.getLocation(end_ip);
            city=loc.city;
            
        }
        const weather_result = await weather.getForestWeather(city);
        if(weather_result.list){
            res.status(200).json(weather_result);
         }else{
            res.status(404).json({code:404,message:'current weather city not found'});
         }       
         } catch (e) {

        }
});

module.exports=api_weather;