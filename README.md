# Clear Dark Sky

## Description
The user can find astronomical events such as the sunrise, the sunset, or info about the moon and see whether or not they will have good viewing conditions based on their location, weather, and the state of the moon.

This project was completed by an entirely remote team due to the COVID-19 situation.  Team members met virtually using Zoom Meetings to discuss the project and work on code together.

## Goal 
### Using the following APIs:
| Name of API           |Data From API:                              |
|-----------------------|:------------------------------------------:|
| IPGeolocation         | User's Location by Latitude and Longitude  |
| WorldWeatherOnline    | Moon Data and Weather                      |

We will cross-reference the user's location with the state of the moon and cloud coverage for the user's location and determine whether or not the conditions are right for stargazing.

## How it Works
In order to determine viewing conditions, we needed to decide on what factors we would take into account.  To keep things simple, we determined the following two factors should be considered:
* Moon Illumination - needed because light reflecting off the moon will drown out stars
* Cloud cover - needed to determine how much of the night sky was visible

Using if/else statements, we determine if the current moon illumination and cloud coverage fall into either "excellent", "good", or "bad" viewing conditions.  This result is returned to the user on the website along with an image of the sky that matches their result.

## Problems
### Getting Appropriate Moon Data:
* We realized the IPGeolocation API did not give us enough info to easily determine the moon's state/phase.  We need this info in order to determine if the moon is too bright for good stargazing conditions.

### Solution:
* We found a new API (WorldWeatherOnline) that gives us both weather and moon data, including the current moon phase and moon illumination percent.  We had previously been using Weatherbit.io's API to provide our weather data.

### Forecasting Weather :




