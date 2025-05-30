import { retrieveWeatherData, delay } from "./manager.js";
import { renderAll, toggleTempBtn } from "./userInterface.js";

const searchForm = document.querySelector('#search-form');
const overlay = document.getElementById('loading-overlay');

export async function searchSubmitHandler(e) {
    e.preventDefault();

    overlay.style.display = 'flex';

    const searchValue = document.querySelector('#search-input').value;

    try {
        const data = await retrieveWeatherData(searchValue);

        // Delay function to allow loading screen
        await delay(700);

        renderAll(data);
    } catch (error) {
        console.error('Error: ', error);
    }

    overlay.style.display = 'none';
    searchForm.reset();

}

export function toggleTemperatureHandler (e) {
    if (e.target.checked) {
        toggleTempBtn(true);

    } else {
        toggleTempBtn(false);
    }
    
}