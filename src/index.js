import './style.css';
import * as UI from '../src/userInterface.js';
import * as Manager from './manager.js';
import { searchSubmitHandler, toggleTemperatureHandler } from './handlers.js';

const data = await Manager.retrieveWeatherData('Sydney');
UI.renderAll(data);

const searchForm = document.querySelector('#search-form');
const temperatureToggleBtn = document.getElementById('switch-degrees-btn');

function bindEvents() {
    searchForm.addEventListener('submit', searchSubmitHandler);
    temperatureToggleBtn.addEventListener('click', toggleTemperatureHandler);
    
}


bindEvents();