import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

function Header() {
  const [isOpen, setisOpen] = useState(false);

  function handleClose() {
    setisOpen(false);
  }

  return (
    <div className="bg-white/40 border-b-[1px] backdrop-blur font-poppins sticky z-20 top-0 left-0">
      <div className=" max-w-7xl mx-auto h-full p-5 md:py-5 md:px-0 flex justify-between items-center">
        <Link to={"/"}>
          <div className="font-bold text-3xl tracking-wide text-slate-600">
            CineMatic
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex flex-col md:flex-row gap-5 text-slate-600 text-xl">
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                `${isActive ? "font-bold text-slate-800" : ""}`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to={`/help`}
              className={({ isActive }) =>
                `${isActive ? "font-bold text-slate-800" : ""}`
              }
            >
              Help
            </NavLink>
          </div>

          <button onClick={() => setisOpen(true)}>
            <MagnifyingGlassIcon className="h-7 w-7" />
          </button>
        </div>
      </div>

      {isOpen && <Search handleClose={handleClose} />}
    </div>
  );
}

export default Header;
