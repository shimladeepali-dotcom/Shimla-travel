import React from 'react'
import { Cloud, Droplets, Wind, Eye, Gauge, Sun } from 'lucide-react'
import { WeatherData } from '../types'
import dayjs from 'dayjs'

interface CurrentWeatherProps {
  data: WeatherData
  onAddFavorite: () => void
  isFavorite: boolean
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, onAddFavorite, isFavorite }) => {
  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  const sunrise = dayjs.unix(data.sys.sunrise).format('HH:mm')
  const sunset = dayjs.unix(data.sys.sunset).format('HH:mm')

  return (
    <div className="glass-effect rounded-lg p-8 text-white mb-8 fade-in">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">{data.name}, {data.sys.country}</h1>
          <p className="text-lg text-gray-200 capitalize">{data.weather[0].description}</p>
        </div>
        <button
          onClick={onAddFavorite}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            isFavorite
              ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300'
              : 'bg-blue-400 text-white hover:bg-blue-300'
          }`}
        >
          {isFavorite ? '⭐ Favorite' : '☆ Add to Favorites'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Temperature Display */}
        <div className="flex items-center">
          <img src={weatherIcon} alt={data.weather[0].main} className="w-32 h-32 weather-icon" />
          <div>
            <div className="text-6xl font-bold">{Math.round(data.main.temp)}°C</div>
            <p className="text-gray-300 mt-2">Feels like {Math.round(data.main.feels_like)}°C</p>
            <p className="text-sm text-gray-400 mt-1">
              H: {Math.round(data.main.temp_max)}° L: {Math.round(data.main.temp_min)}°
            </p>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-5 h-5" />
              <span className="text-sm text-gray-300">Humidity</span>
            </div>
            <p className="text-2xl font-bold">{data.main.humidity}%</p>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Wind className="w-5 h-5" />
              <span className="text-sm text-gray-300">Wind Speed</span>
            </div>
            <p className="text-2xl font-bold">{Math.round(data.wind.speed)} m/s</p>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5" />
              <span className="text-sm text-gray-300">Visibility</span>
            </div>
            <p className="text-2xl font-bold">{(data.visibility / 1000).toFixed(1)} km</p>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Gauge className="w-5 h-5" />
              <span className="text-sm text-gray-300">Pressure</span>
            </div>
            <p className="text-2xl font-bold">{data.main.pressure} mb</p>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="w-5 h-5" />
              <span className="text-sm text-gray-300">Sunrise</span>
            </div>
            <p className="text-2xl font-bold">{sunrise}</p>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5" />
              <span className="text-sm text-gray-300">Cloudiness</span>
            </div>
            <p className="text-2xl font-bold">{data.clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
