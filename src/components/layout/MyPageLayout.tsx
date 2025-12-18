import { Outlet } from "react-router";
import Header from "@/components/header/Header";

function MyPageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MyPageLayout;
