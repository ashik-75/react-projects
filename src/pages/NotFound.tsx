import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>

      <Link className="underline underline-offset-2" to={`/`}>
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
