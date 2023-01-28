import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { UserCredential } from "firebase/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { registerUser } from "../services/auth.services";

type ReType = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ReType>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { data, mutateAsync, isLoading, isError, isSuccess, error } =
    useMutation<UserCredential, Error, any, unknown>({
      mutationKey: ["job"],
      mutationFn: registerUser,
    });

  const onSubmit = (data: ReType) => {
    toast.promise(mutateAsync(data), {
      loading: "Processing",
      success: "Successfully Registered",
      error: "something wrong happen",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="space-y-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("email")}
            placeholder="email"
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
          <br />
          <p className="text-pink-700">{errors.email?.message}</p>
        </div>
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="password"
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
          <br />
          <p className="text-pink-700">{errors.password?.message}</p>
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
