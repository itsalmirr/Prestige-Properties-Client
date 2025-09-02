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
		// Handle 401 errors globally
		if (error.response?.status === 401) {
			// Redirect to signin if unauthorized
			window.location.href = "/auth/signin";
		}
		return Promise.reject(error);
	},
);

export default api;
