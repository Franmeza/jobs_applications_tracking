import moment from "moment";
function JobCard({ job }) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1 className="text-2xl font-bold">{job.role}</h1>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
      <h3>{job.company}</h3>
      <p>{moment(job.application_date).format("DD/MM/YYYY")}</p>
      <p>{job.source}</p>
      <p>{job.link}</p>
    </div>
  );
}

export default JobCard;
