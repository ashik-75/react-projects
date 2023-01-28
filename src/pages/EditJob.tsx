import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import EditJobForm from "../components/EditJobFrom";
import { getJob } from "../services/job.services";

function EditJob() {
  const { jobId } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["job", jobId],
    queryFn: getJob,
  });

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return (
    <div>
      <EditJobForm payload={data?.data()!} jobId={jobId} />
    </div>
  );
}

export default EditJob;
