import { useEffect } from "react";
import { useNavigate } from "react-router";
import { naverLogin, getUserMe } from "@/api/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useToast } from "@/hooks";
import { transformUserInfo } from "@/lib";

export default function NaverCallbackPage() {
  const navigate = useNavigate();
  const { setAccessToken, setUserInfo } = useAuthStore();
  const { triggerToast } = useToast();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    if (code && state) {
      const handleLogin = async () => {
        try {
          const { access_token: accessToken } = await naverLogin(code, state);
          setAccessToken(accessToken);

          const rawUserInfo = await getUserMe();
          const cleanUserInfo = transformUserInfo(rawUserInfo);
          setUserInfo(cleanUserInfo);

          triggerToast({
            variant: "small",
            status: "success",
            text: "네이버 로그인 성공!",
          });
          navigate("/");
        } catch (error) {
          console.error("네이버 로그인 실패:", error);
          triggerToast({
            variant: "small",
            status: "danger",
            text: "네이버 로그인 실패!",
          });
          navigate("/login");
        }
      };

      handleLogin();
    } else if (!code || !state) {
      navigate("/login");
    }
  }, [navigate, setAccessToken, setUserInfo, triggerToast]);

  return <div>네이버 로그인 처리 중...</div>;
}
