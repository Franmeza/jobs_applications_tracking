import { useEffect } from "react";
import { useJobs } from "../context/JobsContext";
import JobCard from "../components/JobCard";

function JobsListPage() {
  const { getJobs, jobs } = useJobs();

  useEffect(() => {
    getJobs();
  }, []);

  if (jobs.length === 0) return <h1>No Aplications job registered</h1>;
  return (
    <div>
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
}

export default JobsListPage;
