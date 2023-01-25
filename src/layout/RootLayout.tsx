import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-poppins">
      <header>Topbar</header>
      <Outlet />
    </div>
  );
}

export default RootLayout;
