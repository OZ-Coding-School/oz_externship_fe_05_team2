import { useState, useRef } from 'react';
import ProfileImage from '@/assets/images/mypage-images/mypage-profile.png';
import Button from '@/components/common/Button';

export default function ProfileEdit() {
  const [nickname, setNickname] = useState('오즈코즈');
  const [phone, setPhone] = useState('010-1234-1234');
  const [gender, setGender] = useState<'남' | '여'>('남');
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadProfileImage = async (file: File) => {
    const formData = new FormData();
    formData.append('profileImage', file); 

    try {
      const response = await fetch('api/v1/accounts/me/profile-image', {
        method: 'PATCH', 
        body: formData,
      });

      if (!response.ok) {
        throw new Error('이미지 업로드에 실패했습니다.');
      }

      const data = await response.json();
      setProfilePreview(data.imageUrl); 
      alert('프로필 사진이 등록되었습니다.');
    } catch (e) {
      console.error(e);
      alert('잘못된 파일 형식입니다.');
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드할 수 있어요.');
      return;
    }
    uploadProfileImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const checkDuplicateNickname = async () => {
    if (!nickname.trim()) {
      setError("닉네임을 입력해 주세요.");
      return;
    }

    setLoading(true);
    setError(null);
    setIsDuplicate(null);
    try {
      const response = await fetch('api/v1/accounts/check-nickname', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname }),
      });

      if (!response.ok) throw new Error('서버 응답 오류');

      const data = await response.json();
      setIsDuplicate(data.duplicate);
    } catch (e) {
      setError('중복 확인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-gray-900">내 정보</h2>
        <Button
          type="button"
          className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition text-white"
        >
          저장하기
        </Button>
      </div>
      <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow space-y-6 border border-gray-300">
        <h3 className="text-purple-700 font-semibold border-b border-gray-300 pb-2 mb-4">
          프로필 수정
        </h3>
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28">
            <div className="w-full h-full rounded-full overflow-hidden bg-purple-200 border border-gray-200">
              <img
                src={profilePreview || ProfileImage}
                alt="프로필 사진"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImageChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center shadow hover:bg-gray-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h3l2-3h8l2 3h3v13H3V7z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">닉네임</label>
          <div className="flex items-center gap-2">
            <input
              id="nickname"
              type="text"
              maxLength={16}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임 입력"
              className="grow rounded-md border border-gray-300 px-3 py-2 focus:border-purple-600 focus:ring focus:ring-purple-200"
            />
            <button
              onClick={checkDuplicateNickname}
              disabled={loading || nickname.trim() === ''}
              className="whitespace-nowrap rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? '확인중...' : '중복확인'}
            </button>
          </div>
          {isDuplicate === true && <p className="text-sm text-red-600">중복된 닉네임이 존재합니다.</p>}
          {isDuplicate === false && <p className="text-sm text-green-600">사용 가능한 닉네임입니다.</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <p className="text-xs text-gray-400">*한글 8자, 영문 및 숫자 16자까지 혼용할 수 있어요.</p>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 (아이디)</label>
          <input id="email" type="email" value="ozschool1234@gmail.com" readOnly className="block w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 cursor-not-allowed text-gray-500" />
        </div>

        <h3 className="text-purple-700 font-semibold border-b border-gray-300 pb-2 mt-8 mb-4">개인 정보 수정</h3>
        
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
          <input id="name" type="text" value="김오즈" readOnly className="block w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 cursor-not-allowed text-gray-500" />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">휴대전화</label>
          <div className="flex gap-2">
            <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-1234-1234" className="grow rounded-md border border-gray-300 px-3 py-2 focus:border-purple-600 focus:ring focus:ring-purple-200" />
            <Button className="px-3 py-1 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-50 transition whitespace-nowrap" variant="outline">변경</Button>
          </div>
        </div>

        <div className="space-y-1">
          <p className="block text-sm font-medium text-gray-700">성별</p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className={`rounded-full px-8 py-3 text-base font-semibold transition ${gender === '남' ? 'bg-purple-100 text-purple-600 border-2 border-purple-600' : 'bg-gray-100 text-gray-500 border-2 border-gray-300'}`}
              onClick={() => setGender('남')}
            >남</Button>
            <Button
              variant="outline"
              className={`rounded-full px-8 py-3 text-base font-semibold transition ${gender === '여' ? 'bg-purple-100 text-purple-600 border-2 border-purple-600' : 'bg-gray-100 text-gray-500 border-2 border-gray-300'}`}
              onClick={() => setGender('여')}
            >여</Button>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="birth" className="block text-sm font-medium text-gray-700">생년월일</label>
          <input id="birth" type="text" value="2000.12.25" readOnly className="block w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 cursor-not-allowed text-gray-500" />
        </div>
      </div>
    </>
  );
}