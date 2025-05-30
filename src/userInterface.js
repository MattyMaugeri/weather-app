import * as Manager from './manager.js';
import Chart from 'chart.js/auto';


// Basic Info Elements
const locationDiv = document.querySelector('.location');
const temperatureDiv = document.querySelector('.temperature-value');
const descriptionDiv = document.querySelector('.description');

// Detailed Content
const forecastDiv = document.querySelector('.forecast');
const timelapseDiv = document.querySelector('.timelapse');

const pressureValue = document.querySelector('.pressure-value');
const pressureMeasurement = document.querySelector('.pressure-measurement');

function renderAll(data) {
    displayBasicInfo(data);
    displayForecast(data.forecast);
    displayTimelapse(data);
    displayHumidity(data.humidity);
    displayWind(data.wind);
    displayPressure(data.pressure);
    displayUV(data.uv);
    displaySunrise(data.sun);
    updateBackdropDisplay(data.icon);
}

function updateDisplay(value) {
    if (value) {
        displayCelsius();
        updateBasicInfoTempDisplays(true);
        updateForecastTempDisplays(true);
    } else {
        displayFahrenheit();
        updateBasicInfoTempDisplays(false);
        updateForecastTempDisplays(false);
    }

}

function displayBasicInfo(data) {
    const address = data.location;
    const temperature = data.temperature;
    const description = data.description;

    locationDiv.innerHTML = address;
    temperatureDiv.innerHTML = temperature;
    descriptionDiv.innerHTML = description;

}

function displayForecast(data) {
    // Clear previous data
    forecastDiv.textContent = '';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 0; i < 7; i++) {
        // Convert to Date object 
        const currentDate = new Date(data.at(i).datetime);

        // Convert to day
        const currentDay = days[currentDate.getDay()];
        const currentTemp = Math.round(data.at(i).temp);

        // Create 7 divs inside forecast for each day
        const div = document.createElement('div');
        div.classList.add('forecast-days');
        div.dataset.day = currentDay;

        const leftDiv = document.createElement('span');
        leftDiv.innerHTML = currentDay;

        const rightDiv = document.createElement('div');
        rightDiv.classList.add('icon-value');

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('icon-span');

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('temp-span');
        tempSpan.innerHTML = currentTemp;

        rightDiv.append(iconSpan);
        rightDiv.append(tempSpan);
        div.append(leftDiv);
        div.append(rightDiv);

        forecastDiv.appendChild(div);
    }
}

function displayTimelapse(data) {
    Manager.clearChart();

    const weeklyData = [];

    for (let i = 0; i < 7; i++) {
        weeklyData.push(data.timelapse.at(i))
    }

    const currentTimelapse = weeklyData.at(0).hours;

    const timelapseData = [];

    for (const hour in currentTimelapse) {
        // console.log(currentTimelapse[hour]);
        timelapseData.push({
            time: Manager.formatTime(currentTimelapse[hour].datetime),
            value: currentTimelapse[hour].temp
        });
    }

    // console.log(timelapseData);

    const canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.style.width = '600';
    canvas.style.height = '200';
    timelapseDiv.appendChild(canvas);

    const labels = timelapseData.map(data => data.time);
    const values = timelapseData.map(data => data.value);

    const ctx = document.getElementById('myCanvas').getContext('2d');

    const timelapseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                pointRadius: 0,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 12
                    }
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    Manager.setCurrentChart(timelapseChart);

}

function displayHumidity(data) {
    const humidityPercent = Math.round(data);
    const circle = document.querySelector('.humidity-progress-ring');
    const value = document.querySelector('.humidity-value');
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (humidityPercent / 100) * circumference;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
    value.textContent = `${humidityPercent}%`;
}

function displayWind(data) {
    const circle = document.querySelector('.wind-progress-ring');
    const directionText = document.querySelector('.wind-direction');
    const degreeText = document.querySelector('.wind-degrees');
    const speedText = document.querySelector('.wind-speed');

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const percentage = data.direction / 360; // % of the circle to show
    const offset = circumference * (1 - percentage);

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;

    degreeText.innerHTML = data.direction + '\u00B0';
    directionText.textContent = Manager.getCompassDirection(data.direction);
    speedText.textContent = `${data.speed} km/h`;

}

function displayPressure(data) {
    pressureValue.innerHTML = data;
    pressureMeasurement.innerHTML = ' hPa/mb';

    pressureValue.appendChild(pressureMeasurement);
}

function displayUV(data, max = 11) {
    const percent = Math.min(data / max, 1);
    const dot = document.getElementById('uv-dot');
    const containerWidth = document.querySelector('.uv-bar-container').offsetWidth;
    const uvValue = document.querySelector('.uv-value');
    const uvDescription = document.querySelector('.uv-description');

    dot.style.left = `${percent * containerWidth}px`;
    uvValue.textContent = data;
    uvDescription.textContent = Manager.calculateUvScale(data);

}

function displaySunrise(data) {
    const timeDiv = document.querySelector('.time');

    const sunriseHeader = document.querySelector('.sunrise-header');
    const sunriseValue = document.querySelector('.sunrise-value');

    const sunsetHeader = document.querySelector('.sunset-header');
    const sunsetValue = document.querySelector('.sunset-value');

    sunriseHeader.textContent = 'Sunrise';
    sunriseValue.textContent = Manager.convertTo12Hour(data.sunrise);

    sunsetHeader.textContent = 'Sunset';
    sunsetValue.textContent = Manager.convertTo12Hour(data.sunset);

}

function updateBasicInfoTempDisplays(value) {
    const tempDiv = document.querySelector('.temperature-value');
    const tempValue = Number(tempDiv.textContent);
    const tempIcon = document.querySelector('.temperature-icon');

    if (value) {
        tempDiv.textContent = Manager.convertToCelsius(tempValue);
        tempIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />
    </svg>
        `;
    } else {
        tempDiv.textContent = Manager.convertToFahrenheit(tempValue);
        tempIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M11,20V5H20V8H14V11H19V14H14V20H11M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />
    </svg>
    `;
    }
}

function updateForecastTempDisplays(value) {
    const forecastTempSpans = document.querySelectorAll('.temp-span');

    forecastTempSpans.forEach(span => {
        const tempValue = Number(span.textContent);
        if (value) {
            span.textContent = Manager.convertToCelsius(tempValue);
        } else {
            span.textContent = Manager.convertToFahrenheit(tempValue);
        }
    })

}

function displayCelsius() {
    const temperatureIcon = document.querySelector('.temperature-icon');
    const temperatureBtnDisplay = document.querySelector('.temperature-display');

    temperatureIcon.innerHTML = '';
    temperatureBtnDisplay.innerHTML = '';

    temperatureIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />
    </svg>
    `;

    temperatureBtnDisplay.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />
    </svg>
    `;

}

function displayFahrenheit() {
    const temperatureIcon = document.querySelector('.temperature-icon');
    const temperatureBtnDisplay = document.querySelector('.temperature-display');

    temperatureIcon.innerHTML = '';
    temperatureBtnDisplay.innerHTML = '';

    temperatureIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M11,20V5H20V8H14V11H19V14H14V20H11M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />
    </svg>
    `;

    temperatureBtnDisplay.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M11,20V5H20V8H14V11H19V14H14V20H11M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" />
    </svg>
    `;

}

function updateBackdropDisplay(icon) {
    const video = document.querySelector('.background-video');
    const source = document.getElementById('video-source');

    const newSource = Manager.changeVideoSource(icon);

    console.log(newSource);



    source.src = newSource;
    video.load();
    video.play();

}

export { renderAll, updateBackdropDisplay, updateDisplay }