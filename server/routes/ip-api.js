const express = require('express');

const location = require('../ip-api/ip-api');

const api_location = express.Router();

api_location.get('/location',async(req,res)=>{
    try {
        let remote_ip = req.headers['x-real-ip'] || req.connection.remoteAddress  || req.headers['x-forwarded-for'];
        end_ip=remote_ip.split(':')[3];
        console.log(end_ip);
        const loc=await location.getLocation(end_ip);
        console.log(loc);
        if(!loc.city){
            res.status(404).json({code:404,message:'City not found'});
        }else{
            res.status(200).json(loc);
        }
       } catch (e) {
             console.log(e);
       }
})
module.exports=api_location;