import React from 'react'
import { Trash2, MapPin } from 'lucide-react'
import { Favorite } from '../types'

interface FavoritesProps {
  favorites: Favorite[]
  onSelectFavorite: (name: string, country: string) => void
  onRemoveFavorite: (id: string) => void
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onSelectFavorite, onRemoveFavorite }) => {
  if (favorites.length === 0) {
    return (
      <div className="glass-effect rounded-lg p-8 text-white text-center fade-in">
        <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-lg">No favorite cities yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-lg p-8 text-white fade-in">
      <h2 className="text-2xl font-bold mb-6">Favorite Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="glass-effect rounded-lg p-4 hover:bg-opacity-20 transition-all cursor-pointer weather-card"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 cursor-pointer" onClick={() => onSelectFavorite(favorite.name, favorite.country)}>
                <p className="font-bold text-lg">{favorite.name}</p>
                <p className="text-sm text-gray-300">{favorite.country}</p>
              </div>
              <button
                onClick={() => onRemoveFavorite(favorite.id)}
                className="text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500 hover:bg-opacity-20 rounded"
                title="Remove from favorites"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
