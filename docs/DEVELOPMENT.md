# Development Guide

## Setup

1. Clone the repository
```bash
git clone https://github.com/shimladeepali-dotcom/Shimla-travel.git
cd Shimla-travel
```

2. Install dependencies
```bash
npm install
```

3. Start PostgreSQL database
```bash
npm run db:start
```

4. Set up environment variables
```bash
cp .env.example .env.local
```

5. Start development servers
```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Database UI: http://localhost:8080

## Project Structure

- `apps/web` - Next.js frontend application
- `apps/api` - Express backend API
- `packages/shared` - Shared types and utilities
- `docs` - Documentation

## Technology Stack

- Frontend: Next.js, React, Tailwind CSS, TypeScript
- Backend: Express, Node.js, TypeScript
- Database: PostgreSQL
- Authentication: JWT
- Payment: Stripe (to be integrated)

## Common Commands

### Development
- `npm run dev` - Start all dev servers
- `npm run build` - Build for production

### Database
- `npm run db:start` - Start PostgreSQL
- `npm run db:stop` - Stop PostgreSQL

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description
