const express = require('express');

const location = require('../ip-api/ip-api');

const api_location = express.Router();

api_location.get('/location',async(req,res)=>{
    try {
        let remote_ip = req.headers['x-real-ip'] || req.connection.remoteAddress  || req.headers['x-forwarded-for'];
        end_ip=remote_ip.split(':')[3];
        console.log(end_ip);
        const loc=await location.location(end_ip);
        console.log(loc);
        res.json(loc);
       } catch (e) {
             console.log(e);
       }
})
module.exports=api_location;