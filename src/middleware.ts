import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const sessionCookie = request.cookies.get("auth-session");

	const protectedRoutes = ["/account", "/auth/dashboard"];
	const isProtectedRoute = protectedRoutes.some((route) =>
		request.nextUrl.pathname.startsWith(route),
	);

	if (isProtectedRoute) {
		if (!sessionCookie) {
			return NextResponse.redirect(new URL("/auth/signin", request.url));
		}
	}

	if (request.nextUrl.pathname.startsWith("/auth/signin")) {
		if (sessionCookie) {
			return NextResponse.redirect(new URL("/auth/dashboard", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/account/:path*", "/auth/dashboard/:path*", "/auth/signin"],
};
