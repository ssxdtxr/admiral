import Header from "./Header/Header";
import { AppPicture } from "./AppPicture/AppPicture";
import { Outlet } from "react-router-dom";
import { SubNav } from "./SubNav/SubNav";

export const Layout = () => {
  return (
    <>
      <Header />
      <AppPicture />
      <SubNav />

      <Outlet />
    </>
  );
};
