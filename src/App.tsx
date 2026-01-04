import { ExamLayout, RootLayout, MyPageLayout } from "@/components/layout";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound404 } from "@/components/common/not-found";
import { NotFound } from "@/components/common/not-found";
import {
  LoginPage,
  SignupPage,
  EmailSignupPage,
  Exams,
  Home,
  TakeExam,
  ChangePasswordPage,
  ExamResult,
  MyPage,
  MyPageEdit,
} from "@/pages";
import  { useState } from "react"; 


function ExamPage() { return <div>쪽지시험 화면</div>; }
function ProfilePage() { return <div>내 정보 화면</div>; }
function PasswordChangePage() { return <div>비밀번호 변경 화면</div>; }
function WithdrawPage() { return <div>회원 탈퇴 화면</div>; }


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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<div>수강생 등록 페이지</div>} />

          <Route path="/my-page" element={<MyPageLayout />}>
            <Route index element={<MyPage />} />
            <Route path="edit" element={<MyPageEdit />} />
            <Route path="change-password" element={<ChangePasswordPage />} />
            <Route path="exams" element={<Exams />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/email-signup" element={<EmailSignupPage />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/my-page" />
          <Route path="/my-page/exams" element={<Exams />} />
          <Route path="/my-page" element={<MyPageWrapper />} />

          <Route path="*" element={<NotFound404 />} />
        </Route>

        <Route path="/exam" element={<ExamLayout />}>
          <Route path=":deploymentId" element={<TakeExam />} />
          <Route
            path=":deploymentId/result/:submissionId"
            element={<ExamResult />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;