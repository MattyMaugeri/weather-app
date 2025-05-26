import * as Manager from './manager.js';
import Chart from 'chart.js/auto';

// Basic Info Elements
const locationDiv = document.querySelector('.location');
const temperatureDiv = document.querySelector('.temperature');
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
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 0; i < 7; i++) {
        // Convert to Date object 
        const currentDate = new Date(data.at(i).datetime);
        // Convert to day
        const currentDay = days[currentDate.getDay()];
        const currentTemp = data.at(i).temp;

        // Create 7 divs inside forecast for each day
        const div = document.createElement('div');
        div.classList.add('forecast-days');
        div.dataset.day = currentDay;

        const daySpan = document.createElement('span');
        daySpan.innerHTML = currentDay;

        const tempSpan = document.createElement('span');
        tempSpan.innerHTML = currentTemp;

        div.append(daySpan);
        div.append(tempSpan);

        forecastDiv.appendChild(div);
    }
}

function displayTimelapse(data) {
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
    canvas.id = 'timelapseChart';
    canvas.style.width = '600';
    canvas.style.height = '200';

    timelapseDiv.appendChild(canvas);

    const labels = timelapseData.map(data => data.time);
    const values = timelapseData.map(data => data.value);

    const ctx = document.getElementById('timelapseChart').getContext('2d');

    const timelapseChart = new Chart(ctx, {
        type: 'line', // or 'bar' or 'area' if you customize
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true, // area under the line
                pointRadius: 0, // smoother look
                tension: 0.3    // smooth curves
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 12 // reduces clutter
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

}

function displayHumidity(data) {
    const humidityPercent = Math.round(data);
    const circle = document.querySelector('.progress-ring');
    const value = document.querySelector('.humidity-value');
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (humidityPercent / 100) * circumference;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
    value.textContent = `${humidityPercent}%`;
}

function displayWind(data) {
    const circle = document.querySelector('.wind-ring-progress');
    const directionText = document.getElementById('direction');
    const degreeText = document.getElementById('degrees');
    const speedText = document.querySelector('.wind-speed');

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const percentage = data.direction / 360; // % of the circle to show
    const offset = circumference * (1 - percentage);

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;

    degreeText.innerHTML = data.direction + ' \u00B0';
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


export { displayBasicInfo, renderAll }