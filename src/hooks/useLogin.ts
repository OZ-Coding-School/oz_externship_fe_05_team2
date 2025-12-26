import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
import { loginUser, getUserMe } from "@/api/auth";
import type { LoginRequest } from "@/types/api-request-type/auth-request-type";
import axios from "axios";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [expiredDate, setExpiredDate] = useState<Date | null>(null);

  const navigate = useNavigate();
  const { setAccessToken, setUserInfo } = useAuthStore();

  const login = async (
    data: LoginRequest,
    onExpired?: (date: Date) => void
  ) => {
    setIsPending(true);
    setError(null);

    try {
      const loginData = await loginUser(data);
      setAccessToken(loginData.access_token);

      const userInfo = await getUserMe();
      setUserInfo(userInfo);

      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const status = err.response.status;
        const errorData = err.response.data;

        if (status === 403 && errorData?.error_detail?.expire_at) {
          const date = new Date(errorData.error_detail.expire_at);
          setExpiredDate(date);
          if (onExpired) onExpired(date);
        } else {
          setError(
            errorData?.message || "아이디 또는 비밀번호가 일치하지 않습니다."
          );
        }
      } else {
        setError("네트워크 오류가 발생했습니다.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return { login, isPending, error, expiredDate };
};
