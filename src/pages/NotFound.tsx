import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-10 bg-gray-50 space-y-3 font-monte">
      <h1 className="font-bold">Page Not Found</h1>
      <p>Sorry, the page you were looking for could not be found</p>

      <div>
        <Link to={"/"} className="underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
