  import { useLocation, Outlet } from 'react-router';
  import SideBarTapButton from '@/components/common/SideBarTapButton'; 

  const menuItems = [
    { id: 'exam', label: '쪽지시험' },
    { id: 'profile', label: '내 정보' },
    { id: 'password', label: '비밀번호 변경' },
  ];
  export default function MyPageLayout() { 
    const location = useLocation(); 
    const currentPathSegment = location.pathname.split('/').pop();
    return (
      <div className="flex h-screen">
        <aside className="w-1/4 bg-white py-6 flex flex-col space-y-3">
          {menuItems.map(({ id, label }) => {
    const isActive = currentPathSegment === id;
    return (
      <div key={id} className="ml-70"> 
<<<<<<< HEAD
        <SideBarTapButton to ={id} isActive={isActive}>
=======
        <SideBarTapButton to={id} isActive={isActive}>
>>>>>>> 45088ac (refactor: 공통레이아웃 수정 및 프로필페이지(진행중)추가 (#64))
          {label}
        </SideBarTapButton>
      </div>
    );
  })}
        </aside>
        <main className="w-3/4 p-10 overflow-auto bg-white">
          <Outlet /> 
        </main>
      </div>
    );
  }
<<<<<<< HEAD

=======
>>>>>>> 45088ac (refactor: 공통레이아웃 수정 및 프로필페이지(진행중)추가 (#64))
