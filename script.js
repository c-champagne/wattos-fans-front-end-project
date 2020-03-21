// purpose check astronomy API and render 
// putting axios link to index.html
// render the data to see on the UI
var date = document.getElementById('date')
var data = axios.get('https://api.ipgeolocation.io/astronomy?apiKey=14254d6a171646dc887404abf24bdbcc')
    .then(function(response) {
        date.innerHTML = astronomyData(response.data)
    })

/*
    Onscreen:
        - city
        - state
    Variables for other functions:
        - lat/long
        - moonrise/set
        - sunrise/set
*/
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



// Call weather api

/*
    Onscreen:
        - logic to render what is on screen
    Variables:
        - cloud coverage
*/
const wxKey = 'c5a98bfa515d48ffa7aa8ce2da231083'
const wxUrl = `https://api.weatherbit.io/v2.0/current?city=Atlanta,GA&key=${wxKey}`
const weatherDiv = document.getElementById('weather');
const localWeather = axios.get(wxUrl)
    .then(function(response) {
        console.log(response.data)
        //weatherDiv.innerHTML = renderWX(data);
    });


// Compare cloud coverage to moonrise