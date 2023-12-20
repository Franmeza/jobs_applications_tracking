import axios from "./axios";

export const getJobsRequest = () => axios.get("/jobs");
export const getJobRequest = (id) => axios.get(`/jobs/${id}`);
export const createJobRequest = (job) => axios.post("/jobs", job);
export const updateJobRequest = (job) => axios.put(`/jobs/${job._id}`, job);
export const deleteJobRequest = (id) => axios.delete(`/jobs/${id}`);
