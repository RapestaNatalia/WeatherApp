
const fetch = require('node-fetch');
const ip_api_url = process.env.IP_API_URL || 'http://api.ipapi.com/' ;
const ip_api_key = process.env.API_API_KEY || ''  ;

async function getLocation (end_ip){
    try{
    const resp = await fetch(`${ip_api_url}${end_ip}?access_key=${ip_api_key}`);
    const json = await resp.json();
    return json;    
    }catch (error) {
        console.error(error)
      }
  }

  module.exports={getLocation}
