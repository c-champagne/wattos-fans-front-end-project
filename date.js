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
    Your current location is set to: ${data.location.city}, ${data.location.state_prov}.  Today's sunrise is at ${data.sunrise} and sunset is at ${data.sunset}.
    `
        /*     return ` Moving output into NavBar.  Replaced with code above.
                <div>city: ${data.location.city}</div>
                <div>date: ${data.date}</div>
                <div>sunrise: ${data.sunrise}</div>
                <div>sunset: ${data.sunset}</div>
                
                ` */
}

function Coordinate() {
    let latLon;
    var data = axios.get('https://api.ipgeolocation.io/astronomy?apiKey=14254d6a171646dc887404abf24bdbcc')
        .then(function(response) {
            coordinateDatalat = response.data.location.latitude;
            cordinateDataLan = response.data.location.longitude;
            latLon = coordinateDatalat + "," + cordinateDataLan;
            console.log(latLon)
        })
}
Coordinate()