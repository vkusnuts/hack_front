interface LoginData {
  login: string;
	password: string;
}

interface Token {
	access: string;
	refresh: string;
}

export interface AuthState {
  loginData: LoginData;
	token: Token;
  loading: boolean;
  error: unknown;
}
