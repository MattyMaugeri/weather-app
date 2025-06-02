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
                        color: 'white',
                        autoSkip: true,
                        maxTicksLimit: 12,
                        font: {
                            size: 12,
                            weight: '100'
                        },
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 12,
                            weight: '100'
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
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
                    <svg fill="white" height="20" width="20" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 483.076 483.076" xml:space="preserve" stroke="#000000"
                        stroke-width="0.004830760000000001">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M100,54.038c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S100,81.608,100,54.038z M50,74.038 c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S61.028,74.038,50,74.038z">
                                </path>
                                <path
                                    d="M297.295,449.038c-100.907,0-183-82.094-183-183s82.093-183,183-183c66.052,0,127.218,35.816,159.629,93.472l26.151-14.701 C445.359,94.717,374.172,53.038,297.295,53.038c-117.449,0-213,95.551-213,213s95.551,213,213,213 c76.877,0,148.064-41.679,185.781-108.771l-26.151-14.701C424.513,413.221,363.347,449.038,297.295,449.038z">
                                </path>
                            </g>
                        </g>
                    </svg>
        `;
    } else {
        tempDiv.textContent = Manager.convertToFahrenheit(tempValue);
        tempIcon.innerHTML = `
                    <svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.28" width="20" height="20">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4.293 1.25c-0 0-0 0-0 0-1.628 0-2.948 1.32-2.948 2.948s1.32 2.948 2.948 2.948c1.628 0 2.947-1.319 2.948-2.947v-0c-0.002-1.627-1.32-2.946-2.947-2.948h-0zM4.293 5.646c-0 0-0 0-0 0-0.8 0-1.448-0.648-1.448-1.448s0.648-1.448 1.448-1.448c0.8 0 1.448 0.648 1.448 1.448 0 0 0 0 0 0.001v-0c-0.001 0.799-0.648 1.446-1.447 1.447h-0zM29.904 3.7h-16.786c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 26c0 0 0 0 0 0.001 0 0.166 0.134 0.3 0.3 0.3h1.077c0.166-0 0.3-0.134 0.3-0.3 0-0 0-0.001 0-0.001v0-11.027h14.036c0.166-0 0.301-0.135 0.301-0.301v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-14.036v-11.916h15.409c0 0 0 0 0.001 0 0.166 0 0.3-0.134 0.3-0.3v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h0z">
                            </path>
                        </g>
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
                    <svg fill="white" height="20" width="20" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 483.076 483.076" xml:space="preserve" stroke="#000000"
                        stroke-width="0.004830760000000001">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M100,54.038c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S100,81.608,100,54.038z M50,74.038 c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S61.028,74.038,50,74.038z">
                                </path>
                                <path
                                    d="M297.295,449.038c-100.907,0-183-82.094-183-183s82.093-183,183-183c66.052,0,127.218,35.816,159.629,93.472l26.151-14.701 C445.359,94.717,374.172,53.038,297.295,53.038c-117.449,0-213,95.551-213,213s95.551,213,213,213 c76.877,0,148.064-41.679,185.781-108.771l-26.151-14.701C424.513,413.221,363.347,449.038,297.295,449.038z">
                                </path>
                            </g>
                        </g>
                    </svg>
    `;

    temperatureBtnDisplay.innerHTML = `
                    <svg fill="white" height="24" width="24" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 483.076 483.076" xml:space="preserve" stroke="#000000"
                        stroke-width="0.004830760000000001">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M100,54.038c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S100,81.608,100,54.038z M50,74.038 c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S61.028,74.038,50,74.038z">
                                </path>
                                <path
                                    d="M297.295,449.038c-100.907,0-183-82.094-183-183s82.093-183,183-183c66.052,0,127.218,35.816,159.629,93.472l26.151-14.701 C445.359,94.717,374.172,53.038,297.295,53.038c-117.449,0-213,95.551-213,213s95.551,213,213,213 c76.877,0,148.064-41.679,185.781-108.771l-26.151-14.701C424.513,413.221,363.347,449.038,297.295,449.038z">
                                </path>
                            </g>
                        </g>
                    </svg>
    `;

}

function displayFahrenheit() {
    const temperatureIcon = document.querySelector('.temperature-icon');
    const temperatureBtnDisplay = document.querySelector('.temperature-display');

    temperatureIcon.innerHTML = '';
    temperatureBtnDisplay.innerHTML = '';

    temperatureIcon.innerHTML = `
                    <svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.28" width="20" height="20">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4.293 1.25c-0 0-0 0-0 0-1.628 0-2.948 1.32-2.948 2.948s1.32 2.948 2.948 2.948c1.628 0 2.947-1.319 2.948-2.947v-0c-0.002-1.627-1.32-2.946-2.947-2.948h-0zM4.293 5.646c-0 0-0 0-0 0-0.8 0-1.448-0.648-1.448-1.448s0.648-1.448 1.448-1.448c0.8 0 1.448 0.648 1.448 1.448 0 0 0 0 0 0.001v-0c-0.001 0.799-0.648 1.446-1.447 1.447h-0zM29.904 3.7h-16.786c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 26c0 0 0 0 0 0.001 0 0.166 0.134 0.3 0.3 0.3h1.077c0.166-0 0.3-0.134 0.3-0.3 0-0 0-0.001 0-0.001v0-11.027h14.036c0.166-0 0.301-0.135 0.301-0.301v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-14.036v-11.916h15.409c0 0 0 0 0.001 0 0.166 0 0.3-0.134 0.3-0.3v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h0z">
                            </path>
                        </g>
                    </svg>
    `;

    temperatureBtnDisplay.innerHTML = `
                    <svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.28" width="24" height="24">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4.293 1.25c-0 0-0 0-0 0-1.628 0-2.948 1.32-2.948 2.948s1.32 2.948 2.948 2.948c1.628 0 2.947-1.319 2.948-2.947v-0c-0.002-1.627-1.32-2.946-2.947-2.948h-0zM4.293 5.646c-0 0-0 0-0 0-0.8 0-1.448-0.648-1.448-1.448s0.648-1.448 1.448-1.448c0.8 0 1.448 0.648 1.448 1.448 0 0 0 0 0 0.001v-0c-0.001 0.799-0.648 1.446-1.447 1.447h-0zM29.904 3.7h-16.786c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 26c0 0 0 0 0 0.001 0 0.166 0.134 0.3 0.3 0.3h1.077c0.166-0 0.3-0.134 0.3-0.3 0-0 0-0.001 0-0.001v0-11.027h14.036c0.166-0 0.301-0.135 0.301-0.301v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-14.036v-11.916h15.409c0 0 0 0 0.001 0 0.166 0 0.3-0.134 0.3-0.3v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h0z">
                            </path>
                        </g>
                    </svg>
    `;

}

function updateBackdropDisplay(icon) {
    const video = document.querySelector('.background-video');
    const source = document.getElementById('video-source');

    const newSource = Manager.changeVideoSource(icon);

    source.src = newSource;
    video.load();
    video.play();

}

export { renderAll, updateBackdropDisplay, updateDisplay }