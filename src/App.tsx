import { RootLayout } from "@/components/layout";
import { Home } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";

import { NotFound404 } from "@/components/common/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/community" element={<div>커뮤니티 페이지</div>} />
          <Route path="/qna" element={<div>질의응답 페이지</div>} />
          <Route path="/profile" element={<div>수강생 등록 페이지</div>} />
          <Route path="/my-page" element={<div>마이페이지</div>} />

          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
