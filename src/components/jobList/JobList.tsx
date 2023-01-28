import { useInfiniteQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { getJobs } from "../../services/job.services";
import JobSkeleton from "../skeleton/JobSkeleton";
import Job from "./Job";

function JobList() {
  const [user, loading] = useAuthState(auth);
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
    getNextPageParam: (lastPage, allPages) => {
      const lastItem = lastPage.docs[lastPage.docs.length - 1];
      const lastDocDate = lastItem?.data()?.createdAt;

      return lastDocDate;
    },
  });

  if (isLoading) {
    return <JobSkeleton />;
  }

  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  const items = data.pages
    .flatMap((item) => item)
    .map((dt) => {
      return dt.docs.map((job) => {
        return { ...job.data(), id: job.id };
      });
    })
    .flatMap((x) => x);

  console.log({ items });

  return (
    <div className="space-y-5">
      {items.map((job) => {
        return <Job authEmail={user?.email!} job={job} />;
      })}

      {items.length > 0 && (
        <div className="text-center my-10">
          <button
            onClick={() => fetchNextPage()}
            className="px-4 py-2 rounded border"
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </div>
      )}
    </div>
  );
}

export default JobList;
