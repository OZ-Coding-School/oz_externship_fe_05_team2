import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  selectedMenu: string;
  onSelectMenu: (id: string) => void;
}

const menuItems = [
  { id: 'exam', label: '쪽지시험' },
  { id: 'profile', label: '내 정보' },
  { id: 'password', label: '비밀번호 변경' },
  { id: 'withdraw', label: '회원 탈퇴' },
];

export default function MyPageLayout({ children, selectedMenu, onSelectMenu }: LayoutProps) {
  return (
    <div className="flex h-screen">
      {/* 사이드바 */}
      <aside className="w-1/4 bg-white py-6 flex flex-col space-y-3">
        {menuItems.map(({ id, label }) => {
          const isSelected = selectedMenu === id;
          return (
            <button
              key={id}
              onClick={() => onSelectMenu(id)}
              className={`w-full flex justify-end items-center text-sm font-medium px-3 py-2 rounded-md transition select-none
                ${
                  isSelected
                    ? 'text-purple-700 font-semibold bg-white'
                    : 'text-purple-400 hover:bg-purple-50'
                }`}
            >
              {isSelected && (
                <span className="w-0.5 h-6 bg-purple-600 mr-1"></span>
              )}
              <span>{label}</span>
            </button>
          );
        })}
      </aside>

      {/* 콘텐츠 영역 */}
      <main className="w-3/4 p-10 overflow-auto bg-white">
        {children}
      </main>
    </div>
  );
}