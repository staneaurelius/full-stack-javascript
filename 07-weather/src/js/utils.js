// All icons
import clearDayIcon from '../img/clear-day.png';
import clearNightIcon from '../img/clear-night.png';
import cloudyDayIcon from '../img/partly-cloudy-day.png';
import cloudyNightIcon from '../img/partly-cloudy-night.png';
import cloudyIcon from '../img/cloudy.png';
import fogIcon from '../img/fog.png';
import rainIcon from '../img/rain.png';
import snowIcon from '../img/snow.png';
import windIcon from '../img/wind.png';

const weatherIcons = {
    'clear-day' : clearDayIcon,
    'clear-night' : clearNightIcon,
    'partly-cloudy-day' : cloudyDayIcon,
    'partly-cloudy-night' : cloudyNightIcon,
    cloudy : cloudyIcon,
    fog : fogIcon,
    rain : rainIcon,
    snow : snowIcon,
    wind : windIcon
};

// Converter functions
function fahrenheitToCelcius (number) {
    const convertedNumber = (Number(number) - 32) * 5 / 9;
    return Math.round(convertedNumber * 10) / 10;
};

function celciusToFahrenheit (number) {
    const convertedNumber = (9 / 5 * Number(number)) + 32;
    return Math.round(convertedNumber * 10) / 10;
};

export { fahrenheitToCelcius, celciusToFahrenheit, weatherIcons };