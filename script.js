/*
    Purpose 
        Use latitude and longitude from the ipgeolocation app it's called within and with that info make a call to the 
            worldWeatherOnline API which will give the current (and future if needed) weather for that ip's location. It will also return that locations relevant 
            astronomy information (moon phase).
*/

// Query the ipgeo API for the user's current location (lat/long parsed out of that data) based on their IP address
function Coordinate() {
    let latLon;
    axios.get('https://api.ipgeolocation.io/astronomy?apiKey=14254d6a171646dc887404abf24bdbcc')
        .then(function(response) {
            coordinateDatalat = response.data.location.latitude;
            cordinateDataLan = response.data.location.longitude;
            latLon = coordinateDatalat + "," + cordinateDataLan;
                     
            forecaster(latLon);
        })
}

// Call weather API and render returned data to the screen
function forecaster(latLon) {

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
            var cloudString = document.getElementById('cloud-string');
            var tempHolder = document.getElementById('temp-holder');
            var twentyFourHrs = document.getElementById('twentyFourHrs');

            // Setting cloudStringVal to 'Clear' if returned is 'Sunny'
            if (cloudStringVal == 'Sunny') {
                cloudStringVal = 'Clear';
            }

            console.log(cloudStringVal);
            console.log(response);

            // Setting proper moon image based on moonIllum
            let moonImage;
            if (moonIllum < 11) {
                moonImage = 'images/new-moon.png';
            } else if (moonIllum < 26) {
                moonImage = 'images/waning-crescent.png';
            } else if (moonIllum < 76) {
                moonImage = 'images/three-quarter.jpg';
            } else if (moonIllum < 101) {
                moonImage = 'images/full-moon.png';
            }

            console.log(moonImage);
            let moonPhase;
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
                var resultBG = document.getElementById("mainPage"); 
                resultBG.style.backgroundImage="url('images/clearView.jpg')";
                
                moonPhase = document.getElementById('moon-phase').innerHTML = `<img src="${moonImage}">`;
                console.log(moonPhase);

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
                var resultBG = document.getElementById("mainPage"); 
                resultBG.style.backgroundImage="url('images/midView.jpg')";

                moonPhase = document.getElementById('moon-phase').innerHTML = `<img src="${moonImage}">`;
                console.log(moonPhase);

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
                var resultBG = document.getElementById("mainPage"); 
                resultBG.style.backgroundImage="url('images/badView.jpg')";

                moonPhase = document.getElementById('moon-phase').innerHTML = `<img src="${moonImage}">`;
                console.log(moonPhase);

            };

            // Iterate through next two days from weather API, and render results to screen
            for (let i = 1; i <= 2; i++) {
                if (parseInt(response.data.data.weather[i].hourly[7].cloudcover) == 0 && parseInt(response.data.data.weather[i].astronomy[0].moon_illumination) < 10) {
                    document.getElementById("day" + i).innerHTML = `
                    <p>EXCELLENT DARK VIEWING CONDITIONS</p>
                    <img src="images/clearViewMini.png" style="width:100px;height:auto">
                    `;

                    document.getElementById("day" + i + "string").innerHTML = 
                    response.data.data.weather[i].hourly[7].weatherDesc[0].value;
                    
                } else if (parseInt(response.data.data.weather[i].hourly[7].cloudcover) > 0 && parseInt(response.data.data.weather[i].hourly[7].cloudcover) < 26 && parseInt(response.data.data.weather[i].astronomy[0].moon_illumination) > 0 && parseInt(response.data.data.weather[i].astronomy[0].moon_illumination) < 26) {

                    document.getElementById("day" + i).innerHTML = `
                    <p> GOOD VIEWING CONDITIONS</p>
                    <img src="images/midViewMini.png" style="width:100px;height:auto">
                    `;

                    document.getElementById("day" + i + "string").innerHTML = 
                    response.data.data.weather[i].hourly[7].weatherDesc[0].value;

                } else {

                    document.getElementById("day" + i).innerHTML = `
                    <p> BAD VIEWING CONDITIONS</p>
                    <img src="images/badViewMini.png" style="width:100px;height:auto">
                    `;

                    document.getElementById("day" + i + "string").innerHTML = 
                    response.data.data.weather[i].hourly[7].weatherDesc[0].value;

                };
            }
        });
    
    };
