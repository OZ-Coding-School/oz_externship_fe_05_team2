import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { kakaoLoginCallback } from "@/api/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useToast } from "@/hooks";

export default function KakaoCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setAccessToken } = useAuthStore();
  const { triggerToast } = useToast();

  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      triggerToast({
        text: "로그인 정보가 올바르지 않습니다.",
        status: "danger",
        variant: "small",
      });
      navigate("/login");
      return;
    }

    const handleLogin = async () => {
      try {
        const data = await kakaoLoginCallback(code);
        setAccessToken(data.access_token);

        triggerToast({
          text: "카카오 로그인이 완료되었습니다.",
          status: "success",
          variant: "small",
        });
        navigate("/");
      } catch (error) {
        triggerToast({
          text: "로그인 처리에 실패했습니다.",
          status: "danger",
          variant: "small",
        });
        navigate("/login");
      }
    };

    handleLogin();
  }, [code, navigate, setAccessToken, triggerToast]);

  return <div>로그인 처리 중입니다...</div>;
}
