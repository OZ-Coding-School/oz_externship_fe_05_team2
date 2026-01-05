import BaseSocialButton from "@/components/auth/BaseSocialButton";
import { naver } from "@/assets/icons/login-icons";
import { cn } from "@/lib";
import { API_BASE_URL, API_PATHS } from "@/constants/api-paths";

interface NaverLoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NaverLoginButton({
  className,
  children,
}: NaverLoginButtonProps) {
  const NAVER_LOGIN_URL = `${API_BASE_URL}${API_PATHS.accounts.naverLogin}`;

  const handleLogin = () => {
    window.location.href = NAVER_LOGIN_URL;
  };

  return (
    <BaseSocialButton
      onClick={handleLogin}
      icon={naver}
      className={cn("bg-[#03C75A] text-white hover:bg-[#02b351]", className)}
    >
      {children}
    </BaseSocialButton>
  );
}
