// Authentication types
export interface User {
	id: string;
	email: string;
	full_name: string;
	username: string;
	avatar?: string;
	provider: string;
	is_active: boolean;
}

export interface AuthState {
	user: User | null;
	isLoading: boolean;
	isAuthenticated: boolean;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface AuthContextType extends AuthState {
	login: (credentials: LoginCredentials) => Promise<void>;
	logout: () => Promise<void>;
	refreshAuth: () => Promise<void>;
}
