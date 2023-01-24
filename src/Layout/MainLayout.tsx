import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto p-5 md:pt-5">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
