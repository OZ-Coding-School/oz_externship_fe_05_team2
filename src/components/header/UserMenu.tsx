import { useState } from "react";
import { Link } from "react-router";
import { UserIcon } from "@/assets/icons/interface-icons/";
import type { DropdownItemProps, UserMenuProps } from "@/types/header-types";

const DropdownItem = ({
  onClick,
  to,
  children,
  className = "",
}: DropdownItemProps) => {
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

export default function UserMenu({ onLogout }: UserMenuProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors hover:bg-gray-100"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-400">
          <img src={UserIcon} alt="유저아이콘" />
        </div>
      </button>

      {showUserMenu && (
        <div className="absolute left-0 mt-2 flex w-48 -translate-x-3/4 flex-col rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-lg">
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
          <DropdownItem onClick={onLogout}>로그아웃(임시)</DropdownItem>
        </div>
      )}
    </div>
  );
}
