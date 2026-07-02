import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AlertCircle, Cloud } from 'lucide-react'
import { weatherApi } from './lib/api'
import { useWeatherStore } from './store/weatherStore'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Favorites from './components/Favorites'
import { WeatherData, Favorite } from './types'

function App() {
  const [searchCity, setSearchCity] = useState<string>('London')
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lon: number } | null>(null)
  const { favorites, addFavorite, removeFavorite, isFavorite } = useWeatherStore()

  // Get current weather
  const { data: weatherData, isLoading: weatherLoading, error: weatherError } = useQuery({
    queryKey: ['weather', searchCity],
    queryFn: () => weatherApi.getCurrentWeather(searchCity),
  })

  // Get forecast
  const { data: forecastData, isLoading: forecastLoading } = useQuery({
    queryKey: ['forecast', searchCity],
    queryFn: () => weatherApi.getForecast(searchCity),
    enabled: !!weatherData,
  })

  const handleSearch = (city: string) => {
    setSearchCity(city)
  }

  const handleAddFavorite = () => {
    if (weatherData) {
      const favorite: Favorite = {
        id: `${weatherData.name}-${weatherData.sys.country}`,
        name: weatherData.name,
        country: weatherData.sys.country,
        lat: weatherData.coord.lat,
        lon: weatherData.coord.lon,
        addedAt: Date.now(),
      }

      if (!isFavorite(weatherData.name, weatherData.sys.country)) {
        addFavorite(favorite)
      }
    }
  }

  const handleSelectFavorite = (name: string, country: string) => {
    setSearchCity(`${name},${country}`)
  }

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cloud className="w-10 h-10 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Weather Dashboard</h1>
          </div>
          <p className="text-white text-opacity-90 text-lg">Check weather conditions worldwide</p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={weatherLoading} />

        {/* Error Message */}
        {weatherError && (
          <div className="glass-effect rounded-lg p-6 text-white mb-8 flex items-center gap-3 fade-in border-l-4 border-red-400">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <div>
              <p className="font-semibold">Error fetching weather data</p>
              <p className="text-sm text-gray-300">Please check the city name and try again.</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {(weatherLoading || forecastLoading) && (
          <div className="glass-effect rounded-lg p-12 text-white text-center fade-in">
            <div className="inline-block animate-spin mb-4">
              <Cloud className="w-12 h-12" />
            </div>
            <p className="text-lg">Loading weather data...</p>
          </div>
        )}

        {/* Current Weather */}
        {weatherData && !weatherLoading && (
          <>
            <CurrentWeather
              data={weatherData}
              onAddFavorite={handleAddFavorite}
              isFavorite={isFavorite(weatherData.name, weatherData.sys.country)}
            />

            {/* Forecast */}
            {forecastData && <Forecast data={forecastData} />}
          </>
        )}

        {/* Favorites Section */}
        {!weatherLoading && <Favorites favorites={favorites} onSelectFavorite={handleSelectFavorite} onRemoveFavorite={handleRemoveFavorite} />}
      </div>
    </div>
  )
}

export default App
