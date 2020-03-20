/*
------------------------------------------------------------------

    Purpose
    - Reach out to a Geocoding API to get the longitude and latitude of a given city

------------------------------------------------------------------

    OpenCage Geocoding API Docs
    - https://opencagedata.com/api

    Request Format
    - https://api.opencagedata.com/geocode/version/format?parameters
    - The format component will be replaced with one of the following
        - json
        - geojson
        - xml
        - map
        - google-v3-json

    Request Parameters (view docs for additional parameters)
        - key - API key
        - q - query parameters
        - pretty - more readable formats
    
    Example Request for Carapicuiba, Brasil
    - https://api.opencagedata.com/geocode/v1/json?q=Rua+Cafel%C3%A2ndia%2C+Carapicu%C3%ADba%2C+Brasil&key=YOUR-API-KEY&pretty=1

------------------------------------------------------------------

    Current Issues:
    - Figure out how we want to handle multiple returned results
    - Rendering results to the screen
        - Need a promise for this
    - Return lat/long of current IP

------------------------------------------------------------------
*/

// import Axios from "axios";


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('mainPage').innerHTML = getCityData('Atlanta', 'Georgia', 'US');
})

// Pulling in axios for console runs
// const axios = require('axios');

// Variable definitions from the html
// let city = document.getElementById().value;
// let state = document.getElementById().value;

// For now just defining city and state as static variables
/* const city = 'Atlanta';
const state = 'Georgia';
const country = 'US'; */

// Function to call api given city and state
getCityData = (city, state, country) => {
    // Declare API key and url for query
    // * key will eventually need to be stored in safer place since this is a public repo *
    const apiKey = '69355e5ac9ff4d22abfe958f18f4dbaa';
    const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&pretty=1&q=`;

    console.log(`${url}${city}%2C+${state}%2C+${country}`);
    axios.get(`${url}${city}%2C+${state}%2C+${country}`)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))

/*     try {
        let response = await axios.get(`${url}${city}%2C+${state}%2C+${country}`);
        console.log(response);
        return JSON.stringify(response);
    } catch (error) {
        console.error(error);
    } */
    
}


renderLocationData = (res) => {
    return `
        <div>${res.data}</div>
    `
}