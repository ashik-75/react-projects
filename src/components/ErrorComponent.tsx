import { useRouteError } from "react-router-dom";
import Header from "./Header";

function ErrorComponent(props: any) {
  const error = useRouteError();
  return (
    <div>
      <Header />

      <main className="max-w-4xl mx-auto mt-10">
        <div className="bg-red-200 text-pink-800 p-5">{error?.message}</div>
      </main>
    </div>
  );
}

export default ErrorComponent;
