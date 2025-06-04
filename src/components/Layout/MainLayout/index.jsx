import { Outlet } from "react-router-dom";
import { Header } from "@components";
import "./styles.mainLayout.scss";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
