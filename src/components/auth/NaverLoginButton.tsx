import BaseSocialButton from "@/components/auth/BaseSocialButton";
import { naver } from "@/assets/icons/login-icons";

interface NaverLoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NaverLoginButton({
  className,
  children,
}: NaverLoginButtonProps) {
  const handleLogin = () => {
    console.log("네이버 로그인 시도");
  };

  return (
    <BaseSocialButton
      onClick={handleLogin}
      icon={naver}
      className={`bg-[#03C75A] text-white hover:bg-[#02B351] ${className}`}
    >
      {children || "네이버 로그인"}
    </BaseSocialButton>
  );
}
