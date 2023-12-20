import { createContext, useContext, useState } from "react";
import { createJobRequest, getJobsRequest } from "../api/jobs";

const JobContext = createContext();

export const useJobs = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const res = await getJobsRequest();
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createJob = async (job) => {
    const res = await createJobRequest(job);
    console.log("creatJob", res);
  };
  return (
    <JobContext.Provider value={{ jobs, createJob, getJobs }}>
      {children}
    </JobContext.Provider>
  );
}
