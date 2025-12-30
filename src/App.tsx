import { ExamLayout, RootLayout } from "@/components/layout";
import {
  LoginPage,
  SignupPage,
  EmailSignupPage,
  Exams,
  Home,
  TakeExam,
} from "@/pages";
import ProfileEdit from '@/pages/ProfileEditPage';
import { BrowserRouter, Route, Routes } from "react-router"; 
import MyPageLayout from "@/components/layout/MyPageLayout";
import ProfilePage from '@/pages/ProfilePage'; 
import { NotFound404 } from "@/components/common/not-found"; 

function ExamPage() { return <div>쪽지시험 화면</div>; }
function PasswordChangePage() { return <div>비밀번호 변경 화면</div>; }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<div>커뮤니티 페이지</div>} />
          <Route path="/qna" element={<div>질의응답 페이지</div>} />
          <Route path="/profile" element={<div>수강생 등록 페이지</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/email-signup" element={<EmailSignupPage />} />
          <Route path="/my-page" element={<MyPageLayout />}>
            <Route index element={<ProfilePage />} /> 
            <Route path="exam" element={<ExamPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profileedit" element={<ProfileEdit />} /> 
            <Route path="password" element={<PasswordChangePage />} />
            <Route path="exams" element={<Exams />} />
          </Route>
        </Route>
        <Route path="/exam" element={<ExamLayout />}>
          <Route path=":deploymentId" element={<TakeExam />} />
          <Route path=":deploymentId/result/:submissionId" element={<div>쪽지시험 결과</div>} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;