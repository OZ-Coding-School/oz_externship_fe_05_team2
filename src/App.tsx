import { RootLayout } from "@/components/layout";
import Header from "@/components/Header";
import { Home } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<div>커뮤니티 페이지</div>} />
            <Route path="/qna" element={<div>질의응답 페이지</div>} />
            <Route path="/profile" element={<div>수강생 등록 페이지</div>} />
            <Route path="/my-page" element={<div>마이페이지</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
