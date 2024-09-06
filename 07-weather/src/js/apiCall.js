import APIKEY from './keyGen';

function getWeatherInfo (location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/last2days/today?key=${APIKEY}&include=days`

    const weatherData = fetch(url, { 'method': 'GET' })
        .then(response => response.json());
    
    return weatherData;
};

function getTodayWeather (weatherData) {
    const todayWeather = weatherData
        .then(response => response.days)
        .then(response => response[3]);

    return todayWeather;
};

export { getWeatherInfo, getTodayWeather };