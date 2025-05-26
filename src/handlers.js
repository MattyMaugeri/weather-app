import { retrieveWeatherData } from "./manager.js";
import { displayBasicInfo } from "./userInterface.js";

const searchForm = document.querySelector('#search-form');

export async function searchSubmitHandler(e) {
    e.preventDefault();

    const searchValue = document.querySelector('#search-input').value;
    
    const data = await retrieveWeatherData(searchValue);
    console.log(data);

    displayBasicInfo(data);


    

    searchForm.reset();
    
}

