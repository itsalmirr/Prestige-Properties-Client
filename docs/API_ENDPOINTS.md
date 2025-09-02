# API Endpoints Reference

This file documents the backend API endpoints based on your Go router configuration.

## Authentication Endpoints

### OAuth Routes (Public)
- `GET /auth/:provider` - Initialize OAuth flow (GitHub, Google)
- `GET /auth/:provider/callback` - OAuth callback handler
- `POST /auth/signout` - Sign out user

### Email Authentication
- `POST /api/v1/users/signin` - Sign in with email/password

## User Endpoints

### Public Routes
- `POST /api/v1/users/` - Create new user

### Private Routes (Requires Authentication)
- `GET /api/v1/users/me` - Get current user info (dashboard)

## Realtor Endpoints (Public)
- `GET /api/v1/realtors/:email` - Get realtor by email
- `GET /api/v1/realtors/all` - Get all realtors
- `POST /api/v1/realtors/` - Create realtor

## Property/Listing Endpoints (Public)
- `POST /api/v1/properties/add` - Create new listing
- `DELETE /api/v1/properties/` - Delete listing
- `GET /api/v1/properties/buy` - Get listings for sale
- `PATCH /api/v1/properties/update` - Update listing

## Session Configuration
- **Session Cookie Name**: `auth-session`
- **Session Storage**: Redis
- **CORS Origins**: `http://localhost:3000`
- **CORS Methods**: GET, POST, PATCH, DELETE
- **Credentials**: Allowed

## Frontend Integration Notes
- All authenticated requests automatically include the `auth-session` cookie
- The middleware checks for this cookie on protected routes
- Error handling is configured to redirect to `/auth/signin` on 401 responses
