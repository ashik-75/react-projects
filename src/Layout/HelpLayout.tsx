import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="">
      <h1 className="font-monte font-bold text-2xl">Need Some Help</h1>
      <p className="font-poppins">
        if you have problem then you can message about your problem, also if you
        have any query then ask a question but before check out FAQ
      </p>

      <div className="my-10 space-x-4">
        <NavLink
          to={"faq"}
          className={({ isActive }) =>
            `${
              isActive ? "font-bold bg-pink-500 text-white" : "bg-gray-50"
            } border px-4 py-2 rounded`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to={"message"}
          className={({ isActive }) =>
            `${
              isActive ? "font-bold bg-pink-500 text-white" : "bg-gray-50"
            } border px-4 py-2 rounded`
          }
        >
          Message
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
