import { Outlet } from "react-router-dom";
import { Header } from "@components";
import "./styles.mainLayout.scss";
import { Footer } from "../../Footer";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
