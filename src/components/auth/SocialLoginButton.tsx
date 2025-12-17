import type { ReactNode } from "react";

interface SocialLoginButtonProps {
  provider: "kakao" | "naver";
  children: ReactNode;
  onClick?: () => void;
  icon?: string;
}

export default function SocialLoginButton({
  provider,
  children,
  onClick,
  icon,
}: SocialLoginButtonProps) {
  const style =
    provider === "kakao"
      ? "bg-[#FEE500] text-[#000000]"
      : "bg-[#03C75A] text-white";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-2 rounded-md py-3 text-sm font-medium transition-colors ${style}`}
    >
      {icon && <img src={icon} alt={`${provider} logo`} className="h-5 w-5" />}
      {children}
    </button>
  );
}
