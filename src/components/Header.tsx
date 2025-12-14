import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import UserMenu from "./header/UserMenu";
import { HeaderLogo } from "@/assets/images/landing-images";

const HeaderLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="font-medium text-gray-700 transition-colors hover:text-violet-600"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-8 items-center justify-center bg-black text-xs">
        <span className="text-white">
          🚨 선착순 모집! 국비지원 받고 4주 완성
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        <div className="flex h-12 items-center justify-between">
          <div className="flex space-x-8">
            <nav className="hidden items-center space-x-16 md:flex">
              <Link to="/" className="flex items-center space-x-2">
                <img src={HeaderLogo} alt="오즈코딩스쿨 로고" />
              </Link>
              <HeaderLink to="/community">커뮤니티</HeaderLink>
              <HeaderLink to="/qna">질의응답</HeaderLink>
            </nav>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            {isLoggedIn ? (
              <UserMenu onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="px-4 py-2 font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  로그인
                </button>
                <span className="text-gray-300">|</span>
                <button className="px-4 py-2 font-medium text-gray-700 transition-colors hover:text-blue-600">
                  회원가입
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
