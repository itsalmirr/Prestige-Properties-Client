# 🏠 Prestige Properties Client

A modern, secure real estate platform built with **Next.js 15** and **TypeScript**. This frontend application provides a sophisticated interface for property listings, user authentication, and account management, designed to work seamlessly with a Go backend.

## ✨ Features

### 🔐 **Advanced Authentication System**
- **Secure HTTP-only cookie authentication** with session management
- **Multi-provider OAuth support** (GitHub, Google)
- **Email/password authentication** with secure login forms
- **Protected routes** with automatic redirects
- **Session validation** and automatic token refresh
- **Global authentication state management**

### 🏡 **Property Management**
- **Dynamic property listings** with real-time data fetching
- **Responsive property cards** with detailed information
- **Advanced filtering and pagination**
- **Property search functionality**
- **Image optimization** with Next.js Image component

### 👤 **User Experience**
- **Personalized user dashboard** with account information
- **Responsive design** that works on all devices
- **Dark/light theme support** with next-themes
- **Smooth animations** with Framer Motion and GSAP
- **Loading states and error handling**
- **Accessibility-first design**

### 🛠️ **Developer Experience**
- **Type-safe development** with TypeScript
- **Code formatting** with Biome 2.2.2
- **ESLint integration** for code quality
- **Hot reload** with Turbopack
- **Component testing** with React Scan
- **Git hooks** and pre-commit checks

## 🚀 Tech Stack

### **Frontend Framework**
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9.2** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Headless UI** - Unstyled, accessible UI components
- **Framer Motion 12.23.12** - Smooth animations
- **GSAP 3.13.0** - Advanced animations
- **Lucide React** - Beautiful SVG icons

### **Authentication & API**
- **Axios 1.11.0** - HTTP client with interceptors
- **Custom authentication context** - Global state management
- **Session-based authentication** - Secure cookie handling
- **Protected route wrapper** - Route-level security

### **Development Tools**
- **Biome 2.2.2** - Fast linter and formatter
- **ESLint 9.34.0** - Code quality checks
- **Bun** - Fast JavaScript runtime and package manager
- **React Scan** - Performance monitoring

## 📋 Prerequisites

- **Node.js** 18+ or **Bun** 1.0+
- **Go backend server** running on port 8080
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsalmirr/Prestige-Properties-Client.git
   cd Prestige-Properties-Client
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080
   BACKEND_URL=http://localhost:8080
   ```

4. **Start the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Backend Setup

This frontend requires a Go backend server. Make sure your backend:

- **Runs on port 8080**
- **Implements the required API endpoints** (see [API Documentation](docs/API_ENDPOINTS.md))
- **Has CORS configured** for `http://localhost:3000`
- **Uses session-based authentication** with Redis storage

### Quick Backend Check
```bash
# Check if backend is running
./check-backend.sh
```

## 📚 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── account/           # User account pages
│   ├── auth/              # Authentication pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── properties/        # Property pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── ui/                # UI primitives
│   ├── Navbar.tsx         # Navigation component
│   ├── ProtectedRoute.tsx # Route protection
│   └── ...                # Other components
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication state
├── lib/                   # Utility libraries
│   ├── api.ts             # API configuration
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript definitions
    ├── auth.ts            # Authentication types
    └── listing.ts         # Property types
```

## 🔐 Authentication Flow

1. **User visits protected route**
2. **Middleware checks for session cookie**
3. **Redirects to `/auth/signin` if unauthenticated**
4. **User chooses authentication method:**
   - Email/password login
   - OAuth (GitHub, Google)
5. **Backend validates credentials**
6. **Session cookie is set (HTTP-only)**
7. **User is redirected to intended page**

## 🛡️ Security Features

- **HTTP-only cookies** prevent XSS attacks
- **CSRF protection** with SameSite cookies
- **Route-level protection** with middleware
- **Automatic session validation**
- **Secure API communication** with Axios interceptors
- **Type-safe development** reduces runtime errors

## 🎨 Available Scripts

```bash
# Development
bun dev              # Start development server with Turbopack
bun scan             # Start development with React Scan

# Production
bun build            # Build for production
bun start            # Start production server

# Code Quality
bun lint             # Run ESLint
bunx biome format .  # Format code with Biome
bunx biome check .   # Check code quality

# Utilities
./check-backend.sh   # Check backend connection
```

## 🧪 API Endpoints

The frontend communicates with these backend endpoints:

### Authentication
- `POST /api/v1/users/signin` - Email/password login
- `GET /api/v1/users/me` - Get current user
- `POST /auth/signout` - Logout user
- `GET /auth/:provider` - OAuth login
- `GET /auth/:provider/callback` - OAuth callback

### Properties
- `GET /api/v1/properties/buy` - Get property listings

For complete API documentation, see [API_ENDPOINTS.md](docs/API_ENDPOINTS.md).

## 🎯 Key Components

### **AuthContext**
Global authentication state management with automatic session validation.

### **ProtectedRoute**
Wrapper component that protects pages requiring authentication.

### **Navbar**
Responsive navigation with authentication-aware UI.

### **PropertiesForSale**
Dynamic property listing component with error handling.

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Responsive navigation** with mobile menu
- **Optimized images** with Next.js Image component
- **Touch-friendly interfaces** for mobile devices

## 🔄 State Management

- **React Context** for global authentication state
- **useState/useEffect** for component-level state
- **Automatic session synchronization** across tabs
- **Error boundary handling** for graceful failures

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
# Build Docker image
docker build -t prestige-properties-client .

# Run container
docker run -p 3000:3000 prestige-properties-client
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is private and proprietary to PP Group.

## 🔗 Related Projects

- **Backend Repository**: [Go Backend Server](https://github.com/itsalmirr/prestige-properties-backend)
- **API Documentation**: [docs/API_ENDPOINTS.md](docs/API_ENDPOINTS.md)
- **Development Guide**: [DEVELOPMENT.md](DEVELOPMENT.md)

## 📞 Support

For support and questions:
- **Email**: support@ppgroup.io
- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/itsalmirr/Prestige-Properties-Client/issues)

---

Built with passion by Almir Redzematovic
