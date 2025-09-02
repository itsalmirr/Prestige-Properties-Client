# Development Setup Guide

## 🚀 Quick Start

### 1. Start Your Go Backend
```bash
# Navigate to your Go backend directory
cd /path/to/your/go-backend

# Start the server (make sure it runs on port 8080)
go run main.go
```

### 2. Start Your Next.js Frontend
```bash
# In this directory
cd /Users/x3n0/Developer/Prestige-Properties-Client

# Start the development server
bun dev
```

### 3. Check Connection
```bash
# Run the backend check script
./check-backend.sh
```

## 🔧 Troubleshooting Network Errors

### Common Issues:

1. **Backend Not Running**
   - Error: `Network Error` or `Connection refused`
   - Solution: Start your Go backend server on port 8080

2. **CORS Issues**
   - Error: CORS policy blocks the request
   - Solution: Ensure your Go backend CORS config includes:
     ```go
     corsConfig.AllowOrigins = []string{"http://localhost:3000"}
     corsConfig.AllowCredentials = true
     ```

3. **Wrong API Endpoints**
   - Error: 404 Not Found
   - Solution: Check that your Go backend has these routes:
     - `GET /api/v1/properties/buy`
     - `POST /api/v1/users/signin`
     - `GET /api/v1/users/me`

4. **Session Issues**
   - Error: Authentication fails
   - Solution: Ensure session configuration:
     ```go
     r.Use(sessions.Sessions("auth-session", config.SessionStorage(keys)))
     ```

## 🧪 Testing API Endpoints

### Test Properties Endpoint
```bash
curl http://localhost:8080/api/v1/properties/buy?page_size=5
```

### Test User Endpoints (after authentication)
```bash
# Sign in first, then:
curl -X GET http://localhost:8080/api/v1/users/me \
  -H "Cookie: auth-session=your-session-cookie"
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and adjust if needed:
```bash
cp .env.example .env.local
```

## 🔍 Debug Mode

The frontend now includes detailed error logging. Check the browser console for:
- Network connection status
- API response details
- Authentication state
- Error messages with suggestions

## 📊 Expected Backend Response Format

Your backend should return data in this format:

```json
{
  "data": [
    {
      "id": "property-id",
      "title": "Property Title",
      "price": 500000,
      // ... other property fields
    }
  ]
}
```

For user data:
```json
{
  "data": {
    "id": "user-id",
    "email": "user@example.com",
    "full_name": "User Name",
    // ... other user fields
  }
}
```
