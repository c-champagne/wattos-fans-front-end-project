# Clear Dark Sky

## Description
The user can find astronomical events such as the sunrise, the sunset, or info about the moon and see whether or not they will have good viewing conditions based on their location, weather, and the state of the moon.

## Goal 
### Using the following APIs:
| Name of API           |Data From API:                              |
|-----------------------|:------------------------------------------:|
| IPGeolocation         | User's Location by Latitude and Longitude  |
| WorldWeatherOnline    | Moon Data and Weather                      |

We will cross-reference the user's location with the state of the moon and cloud coverage for the user's location and determine whether or not the conditions are right for stargazing.

## Problems
### Getting Appropriate Moon Data:
* We realized the IPGeolocation API did not give us enough info to easily determine the moon's state/phase.  We need this info in order to determine if the moon is too bright for good stargazing conditions.

### Solution:
* We found a new API (WorldWeatherOnline) that gives us both weather and moon data, including the current moon phase and moon illumination percent.  We had previously been using Weatherbit.io's API to provide our weather data.

### Forecasting Weather :

* Was built in an entirely remote environment 
## Info that we needed and why:
* Moon Phase - needed due to the moon's reflected light drowning out stars
* Cloud cover - needed to determine how much of the night sky was visible


