# Prestige Properties Client

Next.js front end for the [Prestige Properties API](https://github.com/itsalmirr/PP-Backend), a Go service for real-estate listings.

> **Status: in progress.** Listings, email and OAuth sign-in, and the account page work against the API. Account settings and the contact form are UI only.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Axios · Motion · Bun

## How it works

- **The session lives on the server.** The API sets an HTTP-only `auth-session` cookie backed by Redis. The client stores no tokens; requests go out with `withCredentials`.
- **Auth state.** `AuthContext` loads the current user from `GET /api/v1/users/me` on mount and exposes `login`, `logout` and `refreshAuth`.
- **Route protection in two layers.** Next.js middleware redirects `/account/*` to sign-in when the session cookie is missing, and `ProtectedRoute` redirects on the client once the API has rejected the session.
- **One place for 401s.** An Axios response interceptor sends the user to `/auth/signin` on a 401, except on auth pages and during the initial session check.
- **Sign-in.** Email and password, or GitHub and Google OAuth through the API's `/auth/:provider` flow.
- **Listings.** `/properties/buy` renders listings from `GET /api/v1/properties/buy`, with Cloudinary images served through `next/image`.

## Pages

| Route | What it does |
|---|---|
| `/` | Landing page |
| `/properties/buy` | Listings from the API |
| `/auth/signin`, `/auth/email` | OAuth and email sign-in |
| `/account/me` | Profile of the signed-in user (protected) |
| `/account/settings` | Placeholder |
| `/about`, `/contact` | Static pages |

`GET /api/auth/status` is a route handler that forwards the session cookie to the API and returns the current user.

## Run locally

Start the [API](https://github.com/itsalmirr/PP-Backend) on port 8080 with its frontend origin set to `http://localhost:3000`, then:

```sh
bun install
cat > .env.local <<'EOF'
NEXT_PUBLIC_API_URL=http://localhost:8080
BACKEND_URL=http://localhost:8080
EOF
bun run dev   # http://localhost:3000
```

Lint with `bun run lint`.

## Layout

```
middleware.ts     redirects protected routes when the session cookie is missing
src/app/          App Router pages and the /api/auth/status route handler
src/components/   UI components, including ProtectedRoute
src/contexts/     AuthContext: session state, login and logout
src/lib/api.ts    Axios instance: credentials, timeout, 401 handling
src/types/        API types for users, listings and realtors
```
