import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// Check if the request is for a protected route
	const protectedPaths = ["/account", "/dashboard", "/admin"];
	const { pathname } = request.nextUrl;

	const isProtectedRoute = protectedPaths.some((path) =>
		pathname.startsWith(path),
	);

	if (isProtectedRoute) {
		// Check for authentication cookie (matching your Go backend session name)
		const authCookie = request.cookies.get("auth-session");

		if (!authCookie) {
			// Redirect to signin if no auth cookie
			const signInUrl = new URL("/auth/signin", request.url);
			return NextResponse.redirect(signInUrl);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|public).*)",
	],
};
