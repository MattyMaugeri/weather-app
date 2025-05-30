let currentChart = null;

export async function retrieveWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=5CY3SLBHNE3ER7M9DNMNQ6TXB&contentType=json`;

    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        console.log(data);
        

        // Returns an object with only the relevant information from the API call
        return {
            location: formatLocation(data.resolvedAddress),
            temperature: Math.round(data.days[0].temp),
            description: data.description,
            forecast: data.days,
            timelapse: data.days,
            humidity: data.currentConditions.humidity,
            wind: {
                speed: data.currentConditions.windspeed,
                direction: data.currentConditions.winddir
            },
            pressure: data.currentConditions.pressure,
            uv: data.currentConditions.uvindex,
            sun: {
                time: data.currentConditions.datetime,
                sunrise: data.currentConditions.sunrise,
                sunset: data.currentConditions.sunset,
            }
        }

    } catch (error) {
        console.log(error);
    }

}

export function extractCityFromAddress(address) {
    // Find position of the first comma or hyphen
    const index = address.search(/[,\\-]/);

    // If neither is found, return the whole string trimmed
    if (index === -1) return address.trim();

    // Otherwise, return the substring before the comma or hyphen
    return address.slice(0, index).trim();
}

export function formatLocation(address) {
    const arr = address.split(' ');
    const city = arr[0];
    const country = arr[arr.length - 1];
    const location = [city, country].join(' ');
    return location;
}

// Converts '00:00:00' --> '00:00'
export function formatTime(time) {
    return time.slice(0, 5);
}

export function getCompassDirection(degree) {
    const directions = [
        'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'
    ];

    const index = Math.round(degree / 45) % 8;
    return directions[index];
}

export function calculateUvScale(index) {
    const scale = [
        { max: 2, value: 'Low' },
        { max: 5, value: 'Moderate' },
        { max: 7, value: 'High' },
        { max: 10, value: 'Very High' },
        { max: Infinity, value: 'Extreme' },
    ];

    return scale.find((el) => index <= el.max).value;
}

export function convertTo12Hour(string) {
    const [hours, minutes] = string.split(':');
    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
        .replace(/^0/, '');
}

export function clearChart() {
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }

    const existingCanvas = document.getElementById('myCanvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }

}

export function setCurrentChart(chart) {
    currentChart = chart;
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

export function convertToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

export function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}