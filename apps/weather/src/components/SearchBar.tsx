import React, { useState } from 'react'
import { Search, MapPin, Loader } from 'lucide-react'
import { weatherApi } from '../lib/api'

interface SearchBarProps {
  onSearch: (city: string) => void
  isLoading: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleInputChange = async (value: string) => {
    setQuery(value)
    if (value.length > 2) {
      try {
        const results = await weatherApi.searchCities(value)
        setSuggestions(results)
        setShowSuggestions(true)
      } catch (error) {
        console.error('Search error:', error)
        setSuggestions([])
      }
    } else {
      setSuggestions([])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
      setQuery('')
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSelectSuggestion = (city: any) => {
    onSearch(city.name)
    setQuery('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        // Trigger search with coordinates
        onSearch(`${latitude},${longitude}`)
      })
    }
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <div className="glass-effect rounded-lg flex items-center px-4 py-3">
              <Search className="w-5 h-5 text-gray-300 mr-3" />
              <input
                type="text"
                placeholder="Search for a city..."
                value={query}
                onChange={(e) => handleInputChange(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
              />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 glass-effect rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                {suggestions.map((city, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectSuggestion(city)}
                    className="w-full text-left px-4 py-3 hover:bg-white hover:bg-opacity-10 transition-colors text-white border-b border-white border-opacity-10 last:border-b-0 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <div>
                      <p className="font-medium">{city.name}</p>
                      <p className="text-xs text-gray-300">{city.country}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="glass-effect rounded-lg px-6 py-3 text-white font-semibold hover:bg-opacity-20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Searching...
              </>
            ) : (
              <>Search</>
            )}
          </button>

          <button
            type="button"
            onClick={getCurrentLocation}
            disabled={isLoading}
            className="glass-effect rounded-lg px-6 py-3 text-white font-semibold hover:bg-opacity-20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            title="Use current location"
          >
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
