export interface User {
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface DashboardState {
  stats: DashboardStats;
  isLoading: boolean;
  error: string | null;
}

export interface DashboardStats {
  patients: number;
  doctors: number;
  appointments: number;
  clinics: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}


