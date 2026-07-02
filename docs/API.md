# Shimla Travel API Documentation

## Base URL
`http://localhost:3001/api`

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth
- `POST /auth/register` - Create new user account
- `POST /auth/login` - Login and get token

### Tours
- `GET /tours` - List all tours
- `GET /tours?search=name&minPrice=0&maxPrice=10000` - Search tours
- `GET /tours/:id` - Get tour details

### Bookings
- `GET /bookings` - Get user's bookings (protected)
- `POST /bookings` - Create new booking (protected)

## Response Format
All responses are in JSON format.

## Error Handling
Errors are returned with appropriate HTTP status codes and error messages.
