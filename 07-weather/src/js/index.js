import '../css/normalize.css';
import '../css/style.css';
import { fahrenheitToCelcius, celciusToFahrenheit, weatherIcons } from './utils';
import { getWeatherInfo, getTodayWeather, getPastWeather } from './apiCall';
import { format, addDays } from 'date-fns';

const tempUnitHandler = (function () {
    const celciusButton = document.querySelector('#celcius'),
        fahrenheitButton = document.querySelector('#fahrenheit');

    celciusButton.addEventListener('click', (e) => {
        if (!celciusButton.classList.contains('active-btn')) {
            fahrenheitButton.classList.toggle('active-btn');
            celciusButton.classList.toggle('active-btn');
            mainDisplayHandler.convertToCelcius();
            historyDisplayHandler.convertToCelcius();
        };
    });

    fahrenheitButton.addEventListener('click', (e) => {
        if (!fahrenheitButton.classList.contains('active-btn')) {
            celciusButton.classList.toggle('active-btn');
            fahrenheitButton.classList.toggle('active-btn');
            mainDisplayHandler.convertToFahrenheit();
            historyDisplayHandler.convertToFahrenheit();
        };
    });
})();

const searchbarHandler = (function () {
    const searchBar = document.querySelector('#search-bar');

    searchBar.addEventListener('search', (e) => {
        let searchValue = searchBar.value;
        if (searchBar.value.includes(' ')) {
            searchValue = searchValue.replace(' ', '%20');
        };
        displayUpdater.updateDisplay(searchValue);
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
        date.textContent = format(currentDate, 'MMMM dd, yyyy');
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

const historyDisplayHandler = (function () {
    const historyCards = document.querySelectorAll('.history-card');

    const generateCardComponent = function (card, date, pastData) {
        while (card.firstChild) {
            card.removeChild(card.lastChild);
        };

        const cardDate = document.createElement('h3'),
            cardImg = document.createElement('img'),
            cardTemp = document.createElement('p');

        cardDate.textContent = date;
        cardImg.src = weatherIcons[pastData.icon];
        cardTemp.textContent = pastData.temp;

        card.appendChild(cardDate);
        card.appendChild(cardImg);
        card.appendChild(cardTemp);
    };

    const updateHistoryCards = function (startDate, dataArray) {
        for (let i = 0; i < dataArray.length; i++) {
            const updatedCard = historyCards[i],
                cardDate = format(addDays(startDate, -(i+1)), 'MMM dd, yyyy'),
                inputData = dataArray[i];

            generateCardComponent(updatedCard, cardDate, inputData);
        };
    };

    const convertToCelcius = function () {
        const cardTemps = document.querySelectorAll('.history-card');

        cardTemps.forEach(card => {
            const cardTemp = card.lastChild;
            cardTemp.textContent = fahrenheitToCelcius(cardTemp.textContent);
        });
    };

    const convertToFahrenheit = function () {
        const cardTemps = document.querySelectorAll('.history-card');

        cardTemps.forEach(card => {
            const cardTemp = card.lastChild;
            cardTemp.textContent = celciusToFahrenheit(cardTemp.textContent);
        });
    };

    return { updateHistoryCards, convertToCelcius, convertToFahrenheit }
})();

const displayUpdater = (function () {
    const today = new Date();
    
    const updateDisplay = function (location) {
        const weatherInfo = getWeatherInfo(location);
        weatherInfo.then(response => {
            const extractedData = [response.resolvedAddress, today];
            mainDisplayHandler.updateLocationDate(...extractedData);
        });

        const todayWeather = getTodayWeather(weatherInfo);
        todayWeather.then(data => {
            const extractedData = [
                data.icon, data.conditions, data.temp, data.tempmin, data.tempmax,
                data.feelslike, data.windspeed, data.uvindex, data.humidity
            ];

            mainDisplayHandler.updateMainNumbers(...extractedData);
        });

        const pastWeather = getPastWeather(weatherInfo);
        pastWeather.then(data => {
            historyDisplayHandler.updateHistoryCards(today, data);
        });
    };

    // For initializing display
    updateDisplay('Jakarta');

    return { updateDisplay };
})();