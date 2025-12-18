export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    name: string;
    nickname: string;
    profileImage: string;
    role: string;
  };
}

export interface ErrorResponse {
  message: string;
}
