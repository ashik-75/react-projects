import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth.services";

function LoginForm() {
  const navigate = useNavigate();
  const { data, mutateAsync, isLoading, isError, isSuccess, error, status } =
    useMutation({
      mutationKey: ["job"],
      mutationFn: loginUser,
    });

  console.log({ status });

  const [userInfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  //   destructure form property
  const { email, password } = userInfo || {};

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // mutate(userInfo);
    toast.promise(mutateAsync(userInfo), {
      loading: "Processing",
      success: "Successfully Registered",
      error: "something went wrong",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("Is Succeed");
      setUserinfo({
        email: "",
        password: "",
      });

      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-300">Login Page</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={handleForm}
            name="email"
            placeholder="email"
            required
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={handleForm}
            name="password"
            placeholder="password"
            required
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
        </div>

        <button type="submit" className="px-4 py-2 border rounded">
          {isLoading ? "Processing" : "Login"}
        </button>

        {isError && <div>{error?.message}</div>}
      </form>

      <div>
        Need an account?{" "}
        <Link
          className="underline underline-offset-2 text-pink-600"
          to={"/register"}
        >
          Register
        </Link>{" "}
      </div>
    </div>
  );
}

export default LoginForm;
