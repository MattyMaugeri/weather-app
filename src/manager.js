import * as UI from './userInterface';

export async function retrieveWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=5CY3SLBHNE3ER7M9DNMNQ6TXB&contentType=json`;

    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();

    console.log(data);
    

    return {
        location: formatLocation(data.resolvedAddress),
        temperature: data.currentConditions.temp,
        description: data.description,
        forecast: data.days,
        timelapse: data.days,
        cloudcover: data.currentConditions.cloudcover,
        uv: data.currentConditions.uvindex,
        humidity: data.currentConditions.humidity,
        wind: data.currentConditions.windspeed,
        visibility: data.currentConditions.visibility,
        pressure: data.currentConditions.pressure
    }
}

export function formatLocation(address) {
    const arr = address.split(' ');
    const city = arr[0];
    const country = arr[arr.length - 1];
    const location = [city, country].join(' ');
    return location;
}

// Convert '00:00:00' --> '00:00'
export function formatTime(time) {
    return time.slice(0, 5);
}