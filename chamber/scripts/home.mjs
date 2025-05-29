import { fetchWeather } from './weather.mjs';
import { loadSpotlights } from './spotlights.mjs';

document.addEventListener("DOMContentLoaded", () => {
  fetchWeather();
  loadSpotlights();
});
