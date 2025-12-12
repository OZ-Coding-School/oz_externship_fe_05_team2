import { useState } from "react";
import { Link } from "react-router";
import { UserIcon } from "lucide-react";

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="font-medium text-gray-700 transition-colors hover:text-violet-600"
  >
    {children}
  </Link>
);

const DropdownItem = ({ onClick, to, children, className = "" }: any) => {
  const baseClass =
    "block w-full px-2 py-2.5 text-left text-sm text-gray-700 hover:bg-purple-100 hover:text-violet-600 transition-colors";

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
};

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

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
                <div className="text-2xl font-bold">
                  <span className="text-gray-900">
                    OZ<span className="text-purple-600">.</span> 오즈코딩스쿨
                  </span>
                </div>
              </Link>

              <NavLink to="/community">커뮤니티</NavLink>
              <NavLink to="/qna">질의응답</NavLink>
            </nav>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors hover:bg-gray-100"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400">
                    <UserIcon className="h-5 w-5 text-white" />
                  </div>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 flex w-48 flex-col rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-lg">
                    <div className="mb-2">
                      <span className="block text-sm font-medium text-gray-900">
                        오즈오즈
                      </span>
                      <span className="block text-xs text-gray-500">
                        ozschool234@gmail.com
                      </span>
                    </div>
                    <hr className="my-2 border-gray-200" />

                    {!isStudent && (
                      <DropdownItem onClick={() => setIsStudent(true)}>
                        수강생 등록(임시)
                      </DropdownItem>
                    )}
                    <DropdownItem to="/my-page">마이페이지</DropdownItem>
                    <DropdownItem onClick={() => setIsLoggedIn(false)}>
                      로그아웃(임시)
                    </DropdownItem>
                  </div>
                )}
              </div>
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
