import type { ReactNode } from "react";
import { Link } from "react-router";
import logoImg from "@/assets/images/logo-images/header-logo.png";
import { kakao, naver } from "@/assets/images/login-images";

interface AuthLayoutProps {
  title: string;
  linktext: string;
  children: ReactNode;
}

const AuthLayout = ({ title, linktext, children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/" className="flex justify-center">
          <img src={logoImg} alt="OZ Coding School" />
        </Link>
        <p className="text-mx mt-6 text-center text-gray-600">
          {title}
          <Link
            to="/join"
            className="ml-3 font-medium text-purple-700 hover:text-purple-600"
          >
            {linktext}
          </Link>
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="px-4 py-8 sm:px-4">
          <div className="mb-4 flex flex-col gap-2">
            <button className="cursor-pointer">
              <img
                src={kakao}
                alt="카카오 소셜 로그인"
                className="h-auto w-full"
              />
            </button>
            <button className="cursor-pointer">
              <img
                src={naver}
                alt="네이버 소셜 로그인"
                className="h-auto w-full"
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
