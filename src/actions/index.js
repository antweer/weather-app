import axios from 'axios';

const API_KEY = '79ddddc730b8a1eb16a72b8d61ff7c5e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Convention is to make a single variable that holds our action type so we're never referencing or copy and pasting strings between files
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // Just using USA country code for this app
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}