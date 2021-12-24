const express = require("express");
const requestIp = require('request-ip');

const location = require("../ip-api/ip-api");

const api_location = express.Router();

api_location.get("/location", async (req, res) => {
  try {
    const remote_ip = requestIp.getClientIp(req);
    const loc = await location.getLocation(remote_ip);
    if (!loc.city) {
      res.status(404).json({ code: 404, message: "City not found" });
    } else {
      res.status(200).json(loc);
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = api_location;
