import ToastBox from "@/components/common/toast/ToastBox";
import { Outlet } from "react-router";
import Header from "@/components/header/Header";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <ToastBox />
    </div>
  );
}
