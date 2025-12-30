import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { API_PATHS, API_BASE_URL } from "@/constants/api-paths";

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
};

const api = axios.create({
  baseURL: API_BASE_URL || "",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getCookie("refresh_token");

        const { data } = await axios.post(
          `${API_BASE_URL}${API_PATHS.accounts.refresh}`,
          { refresh_token: refreshToken },
          { withCredentials: true }
        );

        const newAccessToken = data.access_token;
        useAuthStore.getState().setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().deleteAccessToken();
        const refreshToken = getCookie("refresh_token");
        console.log("읽어온 쿠키 전체:", document.cookie);
        console.log("추출한 리프레시 토큰:", refreshToken);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
