import BaseSocialButton from "@/components/auth/BaseSocialButton";
import { kakao } from "@/assets/icons/login-icons";
import { cn } from "@/lib";
import { API_BASE_URL, API_PATHS } from "@/constants/api-paths";

interface KakaoLoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function KakaoLoginButton({
  className,
  children,
}: KakaoLoginButtonProps) {
  const KAKAO_LOGIN_URL = `${API_BASE_URL}${API_PATHS.accounts.kakaoLogin}`;

  const handleLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <BaseSocialButton
      onClick={handleLogin}
      icon={kakao}
      className={cn("bg-yellow-300 text-black hover:bg-yellow-200", className)}
    >
      {children}
    </BaseSocialButton>
  );
}
