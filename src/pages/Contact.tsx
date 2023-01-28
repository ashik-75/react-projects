import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { addContactInfo } from "../services/contact.services";
import { ContactTypes } from "../types/contact.types";

const schema = yup
  .object({
    name: yup.string().required().min(10).max(20),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

function Contact() {
  const { mutateAsync, isLoading, isError, data, error, isSuccess } =
    useMutation({
      mutationFn: addContactInfo,
      onSuccess: (data, variables, context) => {
        console.log({ data, variables, context });
      },
    });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ContactTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactTypes) => {
    toast.promise(mutateAsync(data), {
      loading: "processing",
      success: "Sent to server",
      error: "Something went wrong",
    });
  };

  if (isSuccess) {
    return (
      <div className="p-10 bg-slate-900">
        <h1 className="font-bold text-2xl">Thanks, </h1>
        <p>Got your message, hope you will get answer as soon as possible :)</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="title"
            required
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
          <br />

          <p className="text-pink-600">{errors.name?.message}</p>
        </div>
        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="testxx@gmail.com"
            required
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
          <br />

          <p className="text-pink-600">{errors.email?.message}</p>
        </div>

        <div>
          <textarea
            rows={4}
            {...register("message")}
            placeholder="write something ..."
            required
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
          <br />

          <p className="text-pink-600">{errors.email?.message}</p>
        </div>

        <button type="submit" className="px-4 py-2 border rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
