import { Link } from "react-router-dom";
import { JobType } from "../../types/job.types";

type JobPropsType = {
  job: JobType;
  authEmail?: string;
};

function Job({ job, authEmail }: JobPropsType) {
  const { title, location, salary, type, description, email, createdAt } = job;

  return (
    <div>
      <Link to={`/${job.id}`}>
        <div className="p-5 bg-slate-900 space-y-3 hover:bg-slate-700 transition">
          <h1 className="font-bold text-3xl capitalize text-gray-300">
            {title}
          </h1>
          <div className="space-x-2">
            <span className="px-2 py-1 rounded bg-slate-800 font-semibold">
              {type}
            </span>
            <span className="px-2 py-1 rounded bg-slate-800 font-semibold">
              {location}
            </span>
          </div>
          <div>{salary}</div>
          {/* <p>{job?.createdAt}</p> */}
          <p className="line-clamp-1">{description}</p>

          {authEmail && email && authEmail === email && (
            <button className="px-2 py-1 bg-pink-600 rounded">Modify</button>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Job;
