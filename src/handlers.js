import { retrieveWeatherData, delay } from "./manager.js";
import { renderAll, updateDisplay } from "./userInterface.js";

const searchForm = document.querySelector('#search-form');
const overlay = document.getElementById('loading-overlay');
const celsius = true;
const fahrenheit = false;

export async function searchSubmitHandler(e) {
    e.preventDefault();

    overlay.style.display = 'flex';

    const searchValue = document.querySelector('#search-input').value;
    const tempBtnToggle = document.getElementById('switch-degrees-btn');

    try {
        const data = await retrieveWeatherData(searchValue);

        // Delay function to allow loading screen
        await delay(700);

        if (tempBtnToggle.checked) {
            tempBtnToggle.checked = false;
            updateDisplay(fahrenheit);
        }

        renderAll(data);
    } catch (error) {
        console.error('Error: ', error);
    }

    overlay.style.display = 'none';
    searchForm.reset();

}

export function toggleTemperatureHandler(e) {

    if (e.target.checked) {
        updateDisplay(celsius);
    } else {
        updateDisplay(fahrenheit);
    }

}