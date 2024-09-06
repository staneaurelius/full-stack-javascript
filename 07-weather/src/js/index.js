import '../css/normalize.css';
import '../css/style.css';
import { fahrenheitToCelcius, celciusToFahrenheit, weatherIcons } from './utils';
import { getWeatherInfo, getTodayWeather } from './apiCall';
import { format } from 'date-fns';

const tempUnitHandler = (function () {
    const celciusButton = document.querySelector('#celcius'),
        fahrenheitButton = document.querySelector('#fahrenheit');

    celciusButton.addEventListener('click', (e) => {
        if (!celciusButton.classList.contains('active-btn')) {
            fahrenheitButton.classList.toggle('active-btn');
            celciusButton.classList.toggle('active-btn');
            mainDisplayHandler.convertToCelcius();
        };
    });

    fahrenheitButton.addEventListener('click', (e) => {
        if (!fahrenheitButton.classList.contains('active-btn')) {
            celciusButton.classList.toggle('active-btn');
            fahrenheitButton.classList.toggle('active-btn');
            mainDisplayHandler.convertToFahrenheit();
        };
    });
})();

const mainDisplayHandler = (function () {
    const location = document.querySelector('#location'),
        date = document.querySelector('#current-date'),
        currentWeatherIcon = document.querySelector('#current-weather-icon'),
        currentWeather = document.querySelector('#current-weather'),
        todayTemp = document.querySelector('#avg-temp'),
        minTemp = document.querySelector('#min-temp'),
        maxTemp = document.querySelector('#max-temp'),
        feelsLike = document.querySelector('#feels-like'),
        windSpeed = document.querySelector('#wind-speed'),
        uvIndex = document.querySelector('#uv-index'),
        humidity = document.querySelector('#humidity');

    const updateLocationDate = function (locationData, currentDate) {
        location.textContent = locationData;
        date.textContent = currentDate;
    };

    const updateMainNumbers = function (icon, weatherDesc, tempData, minTempData, maxTempData, feelsLikeData, windData, uvData, humidityData) {
        currentWeatherIcon.src = weatherIcons[icon];
        currentWeather.textContent = weatherDesc;
        todayTemp.textContent = tempData;
        minTemp.textContent = minTempData;
        maxTemp.textContent = maxTempData;
        feelsLike.textContent = feelsLikeData;
        windSpeed.textContent = windData;
        uvIndex.textContent = uvData;
        humidity.textContent = humidityData;
    };

    const convertToCelcius = function () {
        [todayTemp, minTemp, maxTemp, feelsLike].forEach(box => {
            box.textContent = fahrenheitToCelcius(box.textContent);
        });
    };

    const convertToFahrenheit = function () {
        [todayTemp, minTemp, maxTemp, feelsLike].forEach(box => {
            box.textContent = celciusToFahrenheit(box.textContent);
        });
    };


    return { updateLocationDate, updateMainNumbers, convertToCelcius, convertToFahrenheit };
})();

const displayInitializer = (function () {
    let today = format(new Date(), 'MMMM dd, yyyy'),
        currentLocation = 'Jakarta';
    
    // Initialize weather data
    let weatherInfo = getWeatherInfo(currentLocation);
    weatherInfo.then(response => {
        const extractedData = [response.resolvedAddress, today];
        mainDisplayHandler.updateLocationDate(...extractedData);
    });

    let todayWeather = getTodayWeather(weatherInfo);
    todayWeather.then(data => {
        const extractedData = [
            data.icon, data.conditions, data.temp, data.tempmin, data.tempmax,
            data.feelslike, data.windspeed, data.uvindex, data.humidity
        ];

        mainDisplayHandler.updateMainNumbers(...extractedData);
    });
})();