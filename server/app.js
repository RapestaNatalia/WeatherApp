const express = require("express");
const app = express();
app.use(express.json());
app.set("trust proxy", true);

const BASE_ROUTE = "/v1";
const port = process.env.PORT || 3000;

const weather_routes = require("./routes/openWeather");
const location_routes = require("./routes/ip-api");
app.use(BASE_ROUTE, weather_routes);
app.use(BASE_ROUTE, location_routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
