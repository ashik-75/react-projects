import { Outlet } from "react-router-dom";

function JobLayoyt() {
  return (
    <div className="font-monte space-y-5">
      <div className="w-full flex justify-between">
        <h2 className="text-xl font-bold">Job Board </h2>
      </div>

      <Outlet />
    </div>
  );
}

export default JobLayoyt;
