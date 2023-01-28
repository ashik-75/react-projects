import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth.services";

function RegisterForm() {
  const navigate = useNavigate();
  const { data, mutateAsync, isLoading, isError, isSuccess, error } =
    useMutation({
      mutationKey: ["job"],
      mutationFn: registerUser,
    });

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
    toast.promise(mutateAsync(userInfo), {
      loading: "Processing",
      success: "Successfully Registered",
      error: "something wrong happen",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setUserinfo({
        email: "",
        password: "",
      });

      console.log({ data });
      navigate("/");
    }
  }, [isSuccess]);

  console.log({ err: error });

  return (
    <div className="space-y-10">
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
          {isLoading ? "Processing" : "Register"}
        </button>

        {isError && <div className="text-pink-700">{error?.message}</div>}
      </form>

      <div>
        Already have an account?{" "}
        <Link
          className="text-pink-600 underline underline-offset-2"
          to={"/login"}
        >
          Login
        </Link>{" "}
      </div>
    </div>
  );
}

export default RegisterForm;
