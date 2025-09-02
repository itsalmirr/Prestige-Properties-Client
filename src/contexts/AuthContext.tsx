"use client";

import type React from "react";
import type { ReactNode } from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
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

	// Check authentication status on mount
	const checkAuthStatus = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await api.get("/api/auth/me");
			setUser(response.data.user);
			setIsAuthenticated(true);
		} catch {
			setUser(null);
			setIsAuthenticated(false);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		checkAuthStatus();
	}, [checkAuthStatus]);

	const login = async (credentials: LoginCredentials) => {
		try {
			const response = await api.post("/api/auth/login", credentials);
			setUser(response.data.user);
			setIsAuthenticated(true);
		} catch (error) {
			throw error;
		}
	};

	const logout = async () => {
		try {
			await api.post("/api/auth/logout");
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
		await checkAuthStatus();
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
