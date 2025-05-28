import './style.css';
import * as UI from '../src/userInterface.js';
import * as Manager from './manager.js';
import { searchSubmitHandler } from './handlers.js';

const data = await Manager.retrieveWeatherData('Sydney');
UI.renderAll(data);

const searchForm = document.querySelector('#search-form');

function bindEvents() {
    searchForm.addEventListener('submit', searchSubmitHandler);
}


bindEvents();