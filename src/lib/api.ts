import axios from "axios";

// Create axios instance with default config
const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
	withCredentials: true, // This is crucial for sending cookies
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor
api.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Response interceptor for handling auth errors
api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Handle 401 errors globally, but avoid redirecting during auth checks
		if (error.response?.status === 401) {
			// Only redirect if we're not already on an auth page and it's not an auth check
			const currentPath = window.location.pathname;
			const isAuthPage = currentPath.startsWith("/auth");
			const isAuthCheck = error.config?.url?.includes("/users/me");

			if (!isAuthPage && !isAuthCheck) {
				window.location.href = "/auth/signin";
			}
		}
		return Promise.reject(error);
	},
);

export default api;
