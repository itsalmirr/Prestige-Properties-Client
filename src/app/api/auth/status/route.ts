import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		// Forward the request to your Go backend
		const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";
		const response = await fetch(`${backendUrl}/api/v1/users/me`, {
			method: "GET",
			headers: {
				// Forward cookies from the request
				Cookie: request.headers.get("cookie") || "",
			},
		});

		if (!response.ok) {
			return NextResponse.json(
				{ error: "Authentication failed" },
				{ status: 401 },
			);
		}

		const userData = await response.json();

		// Return the user data directly (extract from data.data)
		return NextResponse.json({ user: userData.data });
	} catch (error) {
		console.error("Auth status check failed:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
