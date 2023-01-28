import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobDetailsSkl from "../components/skeleton/JobDetailsSkl";
import { auth } from "../firebase";
import { deleteJob, getJob } from "../services/job.services";

function JobDetails() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { jobId } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["jobs", jobId],
    queryFn: getJob,
  });

  // delete functionality
  const { mutateAsync, isSuccess } = useMutation({
    mutationKey: ["jobs"],
    mutationFn: deleteJob,
  });

  const handleDelete = () => {
    toast.promise(mutateAsync(jobId!), {
      loading: "Delete Processing",
      success: "delete complete",
      error: "Something went wrong",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  if (isLoading) {
    return <JobDetailsSkl />;
  }

  if (!data?.exists()) {
    return <div>There is no data in this id</div>;
  }

  const job = data.data();

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-4xl text-gray-300">{job.title}</h1>
      <div className="space-x-5">
        <span className="bg-slate-600 px-2 py-1 rounded font-semibold">
          {job.type}
        </span>
        <span className="bg-slate-600 px-2 py-1 rounded font-semibold">
          {job.location}
        </span>
      </div>
      <h6>{job.salary}</h6>
      <p>{job.description}</p>

      {user?.email && job?.email && user?.email === job?.email && (
        <div className="space-x-2">
          <Link to={`/${jobId}/edit`} className="px-4 py-1 rounded bg-teal-700">
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-1 rounded bg-pink-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default JobDetails;
