import { api } from "@/lib";
import type { LoginRequest } from "@/types/api-request-type/auth-request-type";

export const loginUser = async (userData: LoginRequest) => {
  const { data } = await api.post("/api/v1/auth/login", userData);
  return data;
};
