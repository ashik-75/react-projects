import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { updateJobInfo } from "../services/job.services";

import { useForm } from "react-hook-form";
import { JobType } from "../types/job.types";

function EditJobForm({ payload, jobId }: { payload: object; jobId: any }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { handleSubmit, register } = useForm<JobType>();
  const { data, mutateAsync, isLoading, isError, isSuccess, error } =
    useMutation<void, Error, any, unknown>({
      mutationFn: updateJobInfo,
    });

  const onSubmit = (info: JobType) => {
    const payload = { jobId, ...info, email: user?.email };
    toast.promise(mutateAsync(payload), {
      loading: "Processing",
      success: "Successfully saved",
      error: "something went wrong",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            {...register("title")}
            name="title"
            placeholder="title"
            required
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
        </div>
        <div>
          <input
            type="text"
            {...register("location")}
            name="location"
            placeholder="location"
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
        </div>
        <div className="w-[50%] border rounded border-slate-400">
          <select
            {...register("type")}
            className="w-full px-4 py-2 bg-transparent  border-r-[20px] border-transparent outline-none bg-slate-800"
          >
            <option className="bg-slate-800">Select Job Type ---</option>
            <option className="bg-slate-800" value="onsite">
              Onsite
            </option>
            <option className="bg-slate-800" value="remote">
              Remote
            </option>
            <option className="bg-slate-800" value="hybrid">
              Hybrid
            </option>
          </select>
        </div>

        <div>
          <input
            type="text"
            {...register("salary")}
            name="salary"
            placeholder="500 usd/month"
            className="w-full px-4 py-2 outline-none bg-transparent border border-slate-400 placeholder:text-slate-500 placeholder:capitalize placeholder:tracking-wide placeholder:text-base rounded"
          />
        </div>

        <div>
          <textarea
            {...register("description")}
            rows={4}
            className="w-full bg-transparent border rounded border-slate-400  outline-none p-3"
            placeholder="job description here ..."
          ></textarea>
        </div>

        <button type="submit" className="px-4 py-2 border rounded">
          {isLoading ? "Processing" : "Edit Job"}
        </button>
      </form>

      {isError && <div className="text-pink-700">{error.message}</div>}
    </div>
  );
}

export default EditJobForm;
