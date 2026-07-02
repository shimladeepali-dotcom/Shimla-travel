# Weather Dashboard

A beautiful, responsive weather dashboard that fetches real-time weather data from the OpenWeatherMap API.

## Features

- 🌍 Real-time weather data for any city worldwide
- 📍 Search cities with autocomplete suggestions
- 📱 Geolocation support - get weather for your current location
- ⭐ Save favorite cities for quick access
- 📊 5-day weather forecast
- 📈 Detailed weather metrics (humidity, wind speed, visibility, pressure, etc.)
- 💾 Persistent favorites using localStorage
- 🎨 Beautiful gradient UI with glassmorphism design
- ⚡ Fast data fetching with React Query
- 📱 Fully responsive on mobile, tablet, and desktop
- 🌙 Dynamic background that changes based on time

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Query** - Server state management
- **Zustand** - Client state management
- **Day.js** - Date and time handling
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client
- **OpenWeatherMap API** - Weather data provider

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation

1. **Navigate to the app directory:**
```bash
cd apps/weather
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Create .env.local file
echo "VITE_OPENWEATHER_API_KEY=your_api_key_here" > .env.local
```

4. **Get your free API key:**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key
   - Add it to `.env.local`

5. **Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Searching for Weather
1. Type a city name in the search bar
2. Select from the autocomplete suggestions
3. Press Enter or click Search button
4. Weather information will be displayed

### Using Geolocation
- Click the location icon button
- Allow location access when prompted
- Your local weather will be displayed

### Adding Favorites
- Click "Add to Favorites" button on any weather display
- Favorites are saved automatically
- Access favorites in the "Favorite Cities" section
- Click a favorite to quickly view its weather

### Viewing Forecast
- The 5-day forecast is displayed below current weather
- Shows temperature, conditions, and weather metrics

## Data Persistence

### Local Storage
- Favorite cities are saved to browser localStorage
- Data persists across browser sessions
- Uses Zustand persist middleware

## API Information

### OpenWeatherMap API Endpoints
- Current Weather: `/data/2.5/weather`
- 5-Day Forecast: `/data/2.5/forecast`
- Geocoding: `/geo/1.0/direct`

### Rate Limits (Free Tier)
- 60 calls per minute
- Hourly forecast data
- 5-day forecast available

## Project Structure

```
src/
├── components/
│   ├── CurrentWeather.tsx    # Main weather display
│   ├── Forecast.tsx          # 5-day forecast component
│   ├── Favorites.tsx         # Favorite cities list
│   └── SearchBar.tsx         # Search with autocomplete
├── lib/
│   └── api.ts                # Weather API calls
├── store/
│   └── weatherStore.ts       # Zustand state management
├── types.ts                  # TypeScript types
├── App.tsx                   # Main application
├── main.tsx                  # React entry point
├── index.css                 # Global styles
└── vite.config.ts            # Vite configuration
```

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

## Environment Variables

Required for production:
```
VITE_OPENWEATHER_API_KEY=your_api_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### "Invalid API Key" Error
- Check that your API key is correctly set in `.env.local`
- Verify the key is active on OpenWeatherMap dashboard
- Wait a few minutes for the API key to activate

### "City not found" Error
- Try spelling the city name differently
- Use the autocomplete suggestions
- Verify the city exists

### Geolocation not working
- Ensure HTTPS is enabled (required for geolocation)
- Check browser permissions for location access
- Some countries have geolocation restrictions

## License

MIT
