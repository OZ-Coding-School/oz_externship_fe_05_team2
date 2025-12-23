import { useState } from 'react';
import MyPageLayout from '../components/layout/MyPageLayout'; // 네 경로에 맞게 조절

function ProfileContent() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">내 정보</h1>

      <section className="border p-6 rounded-md mb-6">
        <h2 className="text-purple-600 font-semibold mb-3">프로필</h2>
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 text-4xl">
            {/* 프로필 아이콘 자리 */}
            <span>👤</span>
          </div>
          <div className="ml-6">
            <p><strong>닉네임:</strong> 오즈오즈</p>
            <p><strong>이메일:</strong> ozschool1234@gmail.com</p>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="mt-4 space-y-2 text-sm">
          <p><strong>이름:</strong> 김오즈</p>
          <p><strong>휴대전화:</strong> 010 - 1234 - 1234</p>
          <p><strong>성별:</strong> 남자</p>
          <p><strong>생년월일:</strong> 2000.12.25</p>
        </div>
      </section>

      <section className="border p-6 rounded-md mb-6">
        <h2 className="text-purple-600 font-semibold mb-3">수강 중인 과정</h2>
        <div>
          <p>IT스타트업 실무형 풀스택 웹 개발 부트캠프 (React + Node.js) &lt;17기&gt;</p>
        </div>
      </section>

      <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm">
        회원 탈퇴하기
      </button>
    </div>
  );
}

export default function MyPage() {
  const [selectedMenu, setSelectedMenu] = useState('profile');

  const handleSelectMenu = (id: string) => {
    setSelectedMenu(id);
  };

  return (
    <MyPageLayout selectedMenu={selectedMenu} onSelectMenu={handleSelectMenu}>
      {selectedMenu === 'profile' && <ProfileContent />}
      {selectedMenu === 'exam' && <div>쪽지시험 화면 (준비 중)</div>}
      {selectedMenu === 'password' && <div>비밀번호 변경 화면 (준비 중)</div>}
      {selectedMenu === 'withdraw' && <div>회원 탈퇴 화면 (준비 중)</div>}
    </MyPageLayout>
  );
}