import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase";

function AuthLayout() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (user) {
    return (
      <div className="space-y-3">
        <h1>Account</h1>
        <h2>{user?.email}</h2>
        <button
          onClick={() => signOut(auth)}
          className="px-2 py-1 rounded font-bold text-white bg-pink-700"
        >
          Logout
        </button>
      </div>
    );
  }
  return <Outlet />;
}

export default AuthLayout;
