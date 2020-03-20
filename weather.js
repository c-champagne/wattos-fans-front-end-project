
const wxKey = 'c5a98bfa515d48ffa7aa8ce2da231083'
const wxUrl = `https://api.weatherbit.io/v2.0/current?city=Atlanta,GA&key=${wxKey}`
const weatherDiv = document.getElementById('weather');
const localWeather = axios.get(wxUrl)
    .then(function(response) {
        console.log(response.data)
        //weatherDiv.innerHTML = renderWX(data);
    });

