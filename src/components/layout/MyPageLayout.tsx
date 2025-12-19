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
      <aside className="w-48 bg-white border-r border-gray-200 p-6 flex flex-col space-y-3">
        {menuItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onSelectMenu(id)}
            className={`text-left text-sm font-medium px-3 py-2 rounded-md transition select-none
              ${
                selectedMenu === id
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-700 hover:bg-purple-200'
              }`}
          >
            {label}
          </button>
        ))}
      </aside>
      <main className="flex-1 p-10 overflow-auto bg-white">
        {children}
      </main>
    </div>
  );
}