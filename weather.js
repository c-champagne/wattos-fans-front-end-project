
const wxKey = 'c5a98bfa515d48ffa7aa8ce2da231083'
const wxUrl = `https://api.weatherbit.io/v2.0/current?city=Atlanta,GA&key=${wxKey}`
const weatherDiv = document.getElementById('weather');
var cloudCover;
const localWeather = axios.get(wxUrl)
    .then(function(response) {
        cloudCover = response.data.data[0].clouds;
        //console.log(response);
        //console.log(response.data.data[0].clouds);
        //console.log(response.data.data[0].weather.description);
        //weatherDiv.innerHTML = renderWX(data);
        
    });

    console.log(localWeather);


    

