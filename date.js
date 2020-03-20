// purpose check astronomy API and render 
// putting axios link to index.html
// render the data to see on the UI
// const axios = require('axios');
var date = document.getElementById('date')
var data = axios.get('https://api.ipgeolocation.io/astronomy?apiKey=14254d6a171646dc887404abf24bdbcc')
    .then(function(response) {
        date.innerHTML = astronomyData(response.data)
    })

function astronomyData(data) {

    return `
        <div>city: ${data.location.city}</div>
        <div>date: ${data.date}</div>
        <div>sunrise: ${data.sunrise}</div>
        <div>sunset: ${data.sunset}</div>
        
        `
}