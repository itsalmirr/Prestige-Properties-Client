#!/bin/bash

echo "🔍 Checking backend connection..."

# Check if port 8080 is open
if nc -z localhost 8080 2>/dev/null; then
    echo "✅ Backend server is running on port 8080"
    
    # Test API endpoint
    echo "🧪 Testing API endpoint..."
    if curl -s http://localhost:8080/api/v1/properties/buy?page_size=5 > /dev/null; then
        echo "✅ API endpoint is responding"
    else
        echo "❌ API endpoint is not responding"
        echo "💡 Check if your Go backend routes are properly configured"
    fi
else
    echo "❌ Backend server is NOT running on port 8080"
    echo "💡 Please start your Go backend server first"
    echo ""
    echo "To start your backend:"
    echo "1. Navigate to your Go backend directory"
    echo "2. Run: go run main.go (or your start command)"
    echo "3. Make sure it's listening on port 8080"
fi

echo ""
echo "🌐 If backend is running, check CORS settings:"
echo "   - AllowOrigins should include 'http://localhost:3000'"
echo "   - AllowCredentials should be true"
