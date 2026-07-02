import React from 'react'
import { Cloud, Droplets, Wind } from 'lucide-react'
import { ForecastData } from '../types'
import dayjs from 'dayjs'

interface ForecastProps {
  data: ForecastData
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  // Get forecasts for next 5 days at noon
  const dailyForecasts = data.list.filter((item) => item.dt_txt.includes('12:00:00')).slice(0, 5)

  return (
    <div className="glass-effect rounded-lg p-8 text-white fade-in">
      <h2 className="text-2xl font-bold mb-6">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {dailyForecasts.map((forecast, index) => {
          const date = dayjs.unix(forecast.dt)
          const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`

          return (
            <div key={index} className="glass-effect rounded-lg p-4 text-center hover:bg-opacity-20 transition-all">
              <p className="font-semibold mb-2">{date.format('ddd')}</p>
              <p className="text-sm text-gray-300 mb-3">{date.format('MMM D')}</p>
              <img src={icon} alt={forecast.weather[0].main} className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm capitalize text-gray-300 mb-3">{forecast.weather[0].main}</p>
              <div className="space-y-1">
                <p className="text-lg font-bold">{Math.round(forecast.main.temp)}°C</p>
                <p className="text-xs text-gray-400">
                  H: {Math.round(forecast.main.temp_max)}° L: {Math.round(forecast.main.temp_min)}°
                </p>
                <div className="flex items-center justify-center gap-1 mt-2 text-xs">
                  <Droplets className="w-4 h-4" />
                  <span>{forecast.main.humidity}%</span>
                  <Wind className="w-4 h-4 ml-2" />
                  <span>{Math.round(forecast.wind.speed)} m/s</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast
