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
    - move all of this to script.js

------------------------------------------------------------------
*/

// Pulling in axios for node runs
const axios = require('axios');

// Declare API key and url for query
const apiKey = '69355e5ac9ff4d22abfe958f18f4dbaa';
const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&pretty=1&no_annotations=1&q=`;

// Function to call api given city and state
// Right now just outputs data to the console, but will soon call the astronomy API functions
getCityData = (city, state, country) => {
    // * key will eventually need to be stored in safer place since this is a public repo *
    let latLon;
    console.log(`${url}${city}%2C+${state}%2C+${country}`);
    axios.get(`${url}${city}%2C+${state}%2C+${country}`)
        .then(res => {
            // console.log(res.data.results[0].geometry);
            res.data.results.map(function(city) {
                if (city.components._type == 'city' && city.components._category == 'place') {
                    latLon = `${city.geometry.lat},${city.geometry.lng}`
                }
            })
            // Call weather API
            console.log(latLon);
            // forecaster(latLon);
        })
        .catch(err => console.error(err))
}

// Run with these arguments in node for testing
getCityData('Atlanta', 'Georgia', 'US');