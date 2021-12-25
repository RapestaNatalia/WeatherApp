# WeatherApp

This Weather App shows you:

    1. The current weather of your city.
    2. The forecasted weather of your city.
    3. Configure a list of cities (max. 5) to know the weather of these cities.
    4. Add and delete cities from this list.

Steps to execute application:

## Server:
    1. cd server
    2.  npm install
    3.  Create .env file inside /server
    4.  Set the #### values with yours:
        PORT=####
        WEATHER_URL= 'https://api.openweathermap.org/data/2.5/'
        WEATHER_KEY= '####'
        IP_API_URL='http://api.ipapi.com/'
    5.  npm start

## Public the server for testing the mobile app. In this case we need the public ip.
    1. https://ngrok.com/ is a good option. 
    Press get started for free and follow the instruction 
    (download, unzip ngrox and connect it with the port of the server).

## Client:
    1. Replace ngrox-url in config/environment/index  server's url for the ngrox url obtained in the previous steps
    'ngrox-url/v1/'
    2. cd weatherApp
    3. npm install
    4. npx react-native run-android
    

## Test server part - external api:
    1. Replace ngrox-url in api-test.js file for the ngrox url obtained in the previous steps
    2.  cd server
    3.  npm test