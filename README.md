# Shimla Travel - Tour Package Booking Website

A modern, full-stack web application for browsing and booking travel packages to Shimla and surrounding destinations.

## Features

- 🗺️ Browse tour packages with detailed information
- 🛒 Shopping cart with booking management
- 💳 Secure payment processing with Stripe integration
- 👤 User authentication and profile management
- ⭐ Reviews and ratings for tour packages
- 📱 Responsive design for all devices
- 🔐 Admin dashboard for package management

## Tech Stack

### Frontend
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **State Management:** React Query + Zustand
- **Maps:** Leaflet with React-Leaflet

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT + bcrypt
- **Payment:** Stripe API

## Project Structure

```
Shimla-travel/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── public/
│   │   └── package.json
│   └── api/                    # Express backend
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── models/
│       │   ├── middleware/
│       │   └── utils/
│       └── package.json
├── packages/
│   └── shared/                 # Shared types & utilities
├── database/
│   └── migrations/             # SQL migrations
├── docs/                       # Documentation
└── docker-compose.yml
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/shimladeepali-dotcom/Shimla-travel.git
cd Shimla-travel
```

2. Install dependencies
```bash
npm install
cd apps/web && npm install
cd ../api && npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Set up database
```bash
npm run db:migrate
npm run db:seed
```

5. Start development servers
```bash
npm run dev
```

Frontend: http://localhost:3000
API: http://localhost:3001

## Available Scripts

- `npm run dev` - Start development servers
- `npm run build` - Build for production
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm test` - Run tests

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT

## Contact

For questions or support, please contact the development team.
