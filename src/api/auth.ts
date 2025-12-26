import { api } from "@/lib";
import { API_PATHS, MSW_BASE_URL } from "@/constants";
import type { LoginRequest } from "@/types/api-request-type/auth-request-type";
import type {
  LoginResponse,
  UserInfoResponse,
} from "@/types/api-response-type/auth-response-type";

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post(
    `${MSW_BASE_URL}${API_PATHS.accounts.login}`,
    data
  );
  return response.data;
};

export const getUserMe = async (): Promise<UserInfoResponse> => {
  const response = await api.get(`${MSW_BASE_URL}${API_PATHS.accounts.me}`);
  return response.data;
};
