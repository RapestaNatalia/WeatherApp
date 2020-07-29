# WeatherApp

Steps to execute application:

# Client:
    -Replace xx in config/environment/index  server's url with your personal ip
    'http://192.xx.xx.x:3000/v1/'
    -cd weatherApp
    -npm install
    -npx react-native run-android
    
# Server:
    -cd server
    -npm install
    -Create .env file inside /server
    -Set the #### values with yours:
        PORT=####
        WEATHER_URL= 'https://api.openweathermap.org/data/2.5/'
        WEATHER_KEY= '####'
        IP_API_URL='http://api.ipapi.com/'
        IP_API_KEY='####'
    -npm start
