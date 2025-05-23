import './style.css';
import * as UI from '../src/userInterface.js';
import * as Manager from './manager.js';
import { searchSubmitHandler } from './handlers.js';


const searchForm = document.querySelector('#search-form');

console.log('Hello');




function bindEvents() {
    searchForm.addEventListener('submit', searchSubmitHandler);
    
}

// Initial call so something loads
// Manager.retrieveWeatherData('Sydney');
const data = await Manager.retrieveWeatherData('Sydney');
UI.renderAll(data);
bindEvents();