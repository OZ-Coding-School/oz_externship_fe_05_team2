import BaseSocialButton from "@/components/auth/BaseSocialButton";
import { kakao } from "@/assets/icons/login-icons";

interface KakaoLoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function KakaoLoginButton({
  className,
  children,
}: KakaoLoginButtonProps) {
  const handleLogin = () => {
    console.log("카카오 로그인 시도");
  };

  return (
    <BaseSocialButton
      onClick={handleLogin}
      icon={kakao}
      className={`bg-[#FEE500] text-[#000000] hover:bg-[#FDD835] ${className}`}
    >
      {children || "카카오 로그인"}
    </BaseSocialButton>
  );
}
