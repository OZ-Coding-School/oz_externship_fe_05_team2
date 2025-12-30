import { ExamLayout, RootLayout } from "@/components/layout";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound404 } from "@/components/common/not-found";
<<<<<<< HEAD
import { NotFound } from "@/components/common/not-found";
import {
  LoginPage,
  SignupPage,
  EmailSignupPage,
  Exams,
  Home,
  TakeExam,
} from "@/pages";
import MyPageLayout from "@/components/layout/MyPageLayout";  
import ProfilePage from '@/pages/ProfilePage'; 
import ProfileEdit from '@/pages/ProfileEditPage';

function ExamPage() { return <div>쪽지시험 화면</div>; }
function PasswordChangePage() { return <div>비밀번호 변경 화면</div>; }


=======
import  { useState } from "react";
import MyPageLayout from "@/components/layout/MyPageLayout";  // 공통 레이아웃 import

// 메뉴별 보여줄 페이지 컴포넌트(임시)
function ExamPage() { return <div>쪽지시험 화면</div>; }
function ProfilePage() { return <div>내 정보 화면</div>; }
function PasswordChangePage() { return <div>비밀번호 변경 화면</div>; }
function WithdrawPage() { return <div>회원 탈퇴 화면</div>; }

// MyPageLayout 감싼 컴포넌트 - 메뉴 상태 관리 및 콘텐츠 전환
function MyPageWrapper() {
  const [selectedMenu, setSelectedMenu] = useState('profile');

  const renderContent = () => {
    switch(selectedMenu) {
      case 'exam': return <ExamPage />;
      case 'profile': return <ProfilePage />;
      case 'password': return <PasswordChangePage />;
      case 'withdraw': return <WithdrawPage />;
      default: return <ProfilePage />;
    }
  };

  return (
    <MyPageLayout selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu}>
      {renderContent()}
    </MyPageLayout>
  );
}
>>>>>>> 6c0ce00 (feat: 마이페이지 공통 레이아웃 (#64))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<div>커뮤니티 페이지</div>} />
          <Route path="/qna" element={<div>질의응답 페이지</div>} />
          <Route path="/profile" element={<div>수강생 등록 페이지</div>} />
<<<<<<< HEAD
          <Route path="/my-page/exams" element={<Exams />} />
          <Route path="/my-page" element={<div>마이페이지</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/email-signup" element={<EmailSignupPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/my-page" />
          <Route path="/my-page/exams" element={<Exams />} />
          <Route path="/my-page" />
          <Route path="/my-page/exams" element={<Exams />} />             
          <Route path="/my-page" element={<MyPageLayout />}>
          <Route path="exam" element={<ExamPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profileedit" element={<ProfileEdit />} /> 
          <Route path="password" element={<PasswordChangePage />} />
      </Route>
=======

          {/* /my-page 경로에서 공통레이아웃 출력 */}
          <Route path="/my-page" element={<MyPageWrapper />} />

>>>>>>> 6c0ce00 (feat: 마이페이지 공통 레이아웃 (#64))
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="/exam" element={<ExamLayout />}>
        </Route>
          <Route path=":deploymentId" element={<TakeExam />} />
        <Route path="/exam" element={<div>쪽지시험 레이아웃</div>}>
          <Route
            path=":deploymentId/result/:submissionId"
            element={<div>쪽지시험 결과</div>}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;