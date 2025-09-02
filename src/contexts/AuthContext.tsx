"use client";

import type React from "react";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/api";
import type { AuthContextType, LoginCredentials, User } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Check authentication status on mount - simplified version
	useEffect(() => {
		let isCancelled = false;

		const checkAuth = async () => {
			try {
				const response = await api.get("/api/v1/users/me");
				if (!isCancelled) {
					// Extract user data from response.data.data
					setUser(response.data.data);
					setIsAuthenticated(true);
				}
			} catch {
				if (!isCancelled) {
					setUser(null);
					setIsAuthenticated(false);
				}
			} finally {
				if (!isCancelled) {
					setIsLoading(false);
				}
			}
		};

		checkAuth();

		return () => {
			isCancelled = true;
		};
	}, []); // Empty dependency array - only run once on mount

	const login = async (credentials: LoginCredentials) => {
		const response = await api.post("/api/v1/users/signin", credentials);
		// Extract user data from response.data.data
		const userData = response.data.data;
		setUser(userData);
		setIsAuthenticated(true);
	};
	const logout = async () => {
		try {
			await api.post("/auth/signout");
		} catch (error) {
			// Continue with logout even if request fails
			console.error("Logout error:", error);
		} finally {
			setUser(null);
			setIsAuthenticated(false);
			// Redirect to home page after logout
			window.location.href = "/";
		}
	};

	const refreshAuth = async () => {
		setIsLoading(true);
		try {
			const response = await api.get("/api/v1/users/me");
			// Extract user data from response.data.data
			setUser(response.data.data);
			setIsAuthenticated(true);
		} catch {
			setUser(null);
			setIsAuthenticated(false);
		} finally {
			setIsLoading(false);
		}
	};

	const value: AuthContextType = {
		user,
		isLoading,
		isAuthenticated,
		login,
		logout,
		refreshAuth,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
