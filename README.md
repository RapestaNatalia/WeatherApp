# WeatherApp

This Weather App shows you:

    - The current weather of your city.
    - The forecasted weather of your city.
    - Configure a list of cities (max. 5) to know the weather of these     cities.
    - Add and delete cities from this list.

Steps to execute application:

# Server:
    - cd server
    - npm install
    - Create .env file inside /server
    - Set the #### values with yours:
        PORT=####
        WEATHER_URL= 'https://api.openweathermap.org/data/2.5/'
        WEATHER_KEY= '####'
        IP_API_URL='http://api.ipapi.com/'
    - npm start

# Public the server for testing the mobile app. In this case we need the public ip.
    - https://ngrok.com/ is a good option. 
    Press get started for free and follow the instruction 
    (download, unzip ngrox and connect it with the port of the server).

# Client:
    - Replace ngrox-url in config/environment/index  server's url for the ngrox url obtained in the previous steps
    'ngrox-url/v1/'
    - cd weatherApp
    - npm install
    - npx react-native run-android
    

# Test server part:
    - Replace ngrox-url in api-test.js file for the ngrox url obtained in the previous steps
    - cd server
    - npm test