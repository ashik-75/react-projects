import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="font-poppins">
      <Header />
      <main className=" text-white bg-slate-800 min-h-screen py-10">
        <div className="max-w-7xl mx-auto ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
