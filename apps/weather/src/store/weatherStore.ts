import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Favorite } from '../types'

interface WeatherStore {
  favorites: Favorite[]
  addFavorite: (favorite: Favorite) => void
  removeFavorite: (id: string) => void
  isFavorite: (name: string, country: string) => boolean
}

export const useWeatherStore = create<WeatherStore>(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (favorite) =>
        set((state) => ({
          favorites: [...state.favorites, favorite],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== id),
        })),
      isFavorite: (name, country) => {
        const state = get()
        return state.favorites.some((fav) => fav.name === name && fav.country === country)
      },
    }),
    {
      name: 'weather-store',
    }
  )
)
