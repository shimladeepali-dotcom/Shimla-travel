import axios from 'axios'
import { WeatherData, ForecastData } from '../types'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'demo'
const BASE_URL = 'https://api.openweathermap.org'

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
})

export const weatherApi = {
  getCurrentWeather: (city: string): Promise<WeatherData> =>
    api.get('/data/2.5/weather', { params: { q: city } }).then(res => res.data),

  getWeatherByCoords: (lat: number, lon: number): Promise<WeatherData> =>
    api.get('/data/2.5/weather', { params: { lat, lon } }).then(res => res.data),

  getForecast: (city: string): Promise<ForecastData> =>
    api.get('/data/2.5/forecast', { params: { q: city } }).then(res => res.data),

  getForecastByCoords: (lat: number, lon: number): Promise<ForecastData> =>
    api.get('/data/2.5/forecast', { params: { lat, lon } }).then(res => res.data),

  searchCities: (query: string): Promise<Array<{ name: string; country: string; lat: number; lon: number }>> => {
    if (!query || query.length < 2) return Promise.resolve([])
    return api.get('/geo/1.0/direct', { params: { q: query, limit: 5 } }).then(res => res.data)
  },
}
