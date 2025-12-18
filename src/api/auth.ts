import { api } from "@/lib";
import type { LoginSchemaType } from "@/schemas/authSchemas";

export const loginUser = async (userData: LoginSchemaType) => {
  const { data } = await api.post("/api/v1/auth/login", userData);
  return data;
};
