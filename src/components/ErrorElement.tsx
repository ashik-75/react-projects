import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error: any = useRouteError();
  return (
    <div>
      <h1>{error?.message}</h1>
    </div>
  );
}

export default ErrorElement;
