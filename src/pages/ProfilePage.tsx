import Button from '@/components/common/Button';
import ProfileImage from '@/assets/images/mypage-images/mypage-profile.png';
import { useNavigate } from 'react-router';

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center bg-white px-4 py-8">
      <div className="w-full max-w-xl space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900">내 정보</h2>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          onClick={() => navigate('../profileedit')}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
            수정하기
          </Button>
        </div>
        <section className="border border-gray-300 rounded-lg bg-white p-6 space-y-8">
          <div>
            <h3 className="text-purple-700 font-semibold mb-4 border-b border-gray-300 pb-2">프로필</h3>
            <div className="flex flex-col items-start gap-5">
              <div className="w-full flex justify-center">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-purple-200 flex items-center justify-center">
                  <img
                    src={ProfileImage}
                    alt="프로필 사진"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-sm text-gray-800 space-y-1 w-full max-w-xs">
                <div className="flex">
                  <p className="font-semibold w-20">닉네임</p>
                  <p>오즈코즈</p>
                </div>
                <div className="flex">
                  <p className="font-semibold w-20">이메일</p>
                  <p>ozschool1234@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-purple-700 font-semibold mb-4 border-b border-gray-300 pb-2">개인 정보</h3>
            <dl className="grid grid-cols-2 gap-y-3 text-gray-800 text-sm">
              <dt className="font-semibold">이름</dt>
              <dd>김오즈</dd>
              <dt className="font-semibold">휴대전화</dt>
              <dd>010 - 1234 - 1234</dd>
              <dt className="font-semibold">성별</dt>
              <dd>남자</dd>
              <dt className="font-semibold">생년월일</dt>
              <dd>2000.12.25</dd>
            </dl>
          </div>
        </section>
        <section className="border border-gray-300 rounded-lg bg-white p-6">
          <h3 className="text-purple-700 font-semibold mb-4 border-b border-gray-300 pb-2">수강 중인 과정</h3>
          <p className="text-sm text-gray-600">익스턴십 개발 캠프 · 오즈코딩</p>
          <p className="text-sm font-medium text-gray-900 mt-1">
            IT스타트업 실무형 풀스택 웹 개발 부트캠프 (React + Node.js) &lt;1기&gt;
          </p>
        </section>
        <div className="mt-8 flex justify-between items-center space-x-4">
          <div className="text-xs text-gray-500 space-y-1">
            <p>회원 탈퇴 안내</p>
            <p>탈퇴 처리 시, 수강 기간 / 포인트 / 쿠폰은 소멸되며 환불되지 않습니다.</p>
            <p>필요한 경우, 반드시 탈퇴 전에 문의 바랍니다.</p>
          </div>
          <button
            type="button"
            className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-200 transition whitespace-nowrap"
          >
            회원 탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
}   