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
                forecaster(latLon);


        })
}

function forecaster(latLon) {



    const wxKey = '0eab6e3837ad474491b152802202103';
    const wxURL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${wxKey}&q=${latLon}&format=json`;
    
    
    axios.get(wxURL)
        .then(function(response) {
    
            //let cloudCvr = parseInt(response.data.data.current_condition[0].cloudcover);
    
            //console.log(cloudCvr);
            console.log(response);
        })
    
    }

Coordinate()

