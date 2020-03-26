// purpose check astronomy API and render 
// putting axios link to index.html
// render the data to see on the UI
//var date = document.getElementById('date')
//var data = axios.get('https://api.ipgeolocation.io/astronomy?apiKey=14254d6a171646dc887404abf24bdbcc')
    //.then(function(response) {
        //date.innerHTML = astronomyData(response.data)
    //})

/*
    Onscreen:
        - city
        - state
    Variables for other functions:
        - lat/long
        - moonrise/set
        - sunrise/set
*/
//function astronomyData(data) {


    //return `
    //Your current location is set to: ${data.location.city}, ${data.location.state_prov}.  Today's sunrise is at ${data.sunrise} and sunset is at ${data.sunset}.
    //`
/*     return ` Moving output into NavBar.  Replaced with code above.
        <div>city: ${data.location.city}</div>
        <div>date: ${data.date}</div>
        <div>sunrise: ${data.sunrise}</div>
        <div>sunset: ${data.sunset}</div>
        
        ` */




// Call weather api

/*
    Onscreen:
        - logic to render what is on screen
    Variables:
        - cloud coverage
*/

// This is the function that queries the ipgeo API for the user's current location (lat/long parsed out of that data) based on their IP address
function Coordinate() {
    let latLon;
    axios.get('https://api.ipgeolocation.io/astronomy?apiKey=14254d6a171646dc887404abf24bdbcc')
        .then(function(response) {
            coordinateDatalat = response.data.location.latitude;
            cordinateDataLan = response.data.location.longitude;
            // formatted lat/long data to fit in the worldweatheronline api called in forecaster function
            latLon = coordinateDatalat + "," + cordinateDataLan;
            
           
                
                forecaster(latLon);


        })
}

function forecaster(latLon) {
    // The forecaster function will take the input (latLon) from the ipgeolocation app it's called within and with that info make a call to the 
    // worldWeatherOnline API which will give the current (and future if needed) weather for that ip's location. It will also return that locations relevant 
    // astronomy information (moon phase).


    const wxKey = '0eab6e3837ad474491b152802202103';
    const wxURL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${wxKey}&q=${latLon}&num_of_days=3&format=json`;
    
    
    axios.get(wxURL)
        .then(function(response) {
            console.log(response.data);
            // assign the cloud cover string converted to an integer to a variable cloudCvr.. do the same for moonIllum
            let cloudCvr = parseInt(response.data.data.weather[0].hourly[7].cloudcover);
            let moonIllum = parseInt(response.data.data.weather[0].astronomy[0].moon_illumination)
            let cloudStringVal = response.data.data.current_condition[0].weatherDesc[0].value;
            let currTemp = parseInt(response.data.data.current_condition[0].temp_F);
            // grab the needed elements on the dom to inject code into
            var conditions = document.getElementById('conditions');
            /* var cloudImg = document.getElementById('cloud-img'); Not currently being used*/
            var cloudString = document.getElementById('cloud-string');
            var tempHolder = document.getElementById('temp-holder');

            console.log(response);

            // run the logic that will compare the returned cloud/moon values and then render condition summary and an image(s)
            if (cloudCvr == 0 && moonIllum < 10) {
                
                conditions.innerHTML = `
                <p>EXCELLENT DARK VIEWING CONDITIONS</p>
                `
                cloudString.innerHTML = `
                ${cloudStringVal}
                `
                tempHolder.innerHTML = `
                ${currTemp}F
                `
                var resultBG = document.getElementById("mainPage"); /* <-- Cassie's results img render*/
                resultBG.style.backgroundImage="url('images/clearView.jpg')";
                
                /* cloudImg.innerHTML = ` --Michael's original results img render--
                <img style="height:200px;width:280px;" src="images/clearView.jpg">
                ` */
            } else if (cloudCvr > 0 && cloudCvr < 26 && moonIllum > 0 && moonIllum < 26) {

                conditions.innerHTML = `
                <p> GOOD VIEWING CONDITIONS</p>
                `
                cloudString.innerHTML = `
                ${cloudStringVal}
                `
                tempHolder.innerHTML = `
                ${currTemp}F
                `
                var resultBG = document.getElementById("mainPage"); /* <-- Cassie's results img render*/
                resultBG.style.backgroundImage="url('images/midView.jpg')";

                /* cloudImg.innerHTML = ` <--Michael's original results img render--
                <img style="height:200px;width:280px;" src="images/midView.jpg">
                ` */
            } else {

                conditions.innerHTML = `
                <p> BAD VIEWING CONDITIONS</p>
                `
                cloudString.innerHTML = `
                ${cloudStringVal}
                `
                tempHolder.innerHTML = `
                ${currTemp}F
                `
                var resultBG = document.getElementById("mainPage"); /* <-- Cassie's results img render*/
                resultBG.style.backgroundImage="url('images/badView.jpg')";

                /* cloudImg.innerHTML = ` <--Michael's original results img render--
                <img style="height:200px;width:280px;" src="images/badView.jpg">
                ` */
            };

            
        });
    
    };




// Compare cloud coverage to moonrise