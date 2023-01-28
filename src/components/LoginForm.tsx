import { useMutation } from "@tanstack/react-query";
import { UserCredential } from "firebase/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth.services";

type LoginType = {
  email: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const { mutateAsync, isLoading, isError, isSuccess, error, status } =
    useMutation<UserCredential, Error, any, unknown>({
      mutationFn: loginUser,
    });

  const onSubmit = (info: any) => {
    console.log({ log: info });
    toast.promise(mutateAsync(info), {
      loading: "Processing",
      success: "Successfully Registered",
      error: "something went wrong",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-300">Login Page</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("email")}
            placeholder="email"
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
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
