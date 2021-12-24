const fetch = require("node-fetch-commonjs");

const ip_api_url = process.env.IP_API_URL || "http://ip-api.com/json/";

async function getLocation(end_ip) {
  try {
    const url = `${ip_api_url}${end_ip}`;
    const resp = await fetch(url);
    const json = await resp.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getLocation };
