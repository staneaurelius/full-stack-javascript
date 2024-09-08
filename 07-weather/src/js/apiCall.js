import APIKEY from './keyGen';

function getWeatherInfo (location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/last5days/today?key=${APIKEY}&include=days`

    const weatherData = fetch(url, { 'method': 'GET' })
        .then(response => response.json());
    
    return weatherData;
};

function getTodayWeather (weatherData) {
    const todayWeather = weatherData
        .then(response => response.days)
        .then(response => response[6]);

    return todayWeather;
};

function getPastWeather (weatherData) {
    const pastWeather = weatherData
        .then(response => response.days)
        .then(data => data.slice(0, 6))
        .then(data => data.reverse());

    return pastWeather;
};

export { getWeatherInfo, getTodayWeather, getPastWeather };