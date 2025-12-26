export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    email: string;
    name: string;
    nickname: string;
    profileImage: string;
    role: string;
  };
}

export interface UserInfoResponse {
  id: number;
  email: string;
  nickname: string;
  name: string;
  phone_number: string;
  birthday: string;
  gender: "M" | "F";
  profile_img_url: string;
  created_at: string;
}

export interface ErrorResponse {
  message: string;
}

export interface ExpiredAccountErrorResponse {
  error_detail: {
    detail: string;
    expire_at: string;
  };
}
