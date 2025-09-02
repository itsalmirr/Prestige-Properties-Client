"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	children,
	fallback,
}) => {
	const { isAuthenticated, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			router.push("/auth/signin");
		}
	}, [isAuthenticated, isLoading, router]);

	if (isLoading) {
		return (
			fallback || (
				<div className="min-h-screen flex items-center justify-center">
					<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
				</div>
			)
		);
	}

	if (!isAuthenticated) {
		return null;
	}

	return <>{children}</>;
};
