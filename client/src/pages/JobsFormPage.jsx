import { useForm } from "react-hook-form";
import { useJobs } from "../context/JobsContext";
import { useNavigate } from "react-router-dom";

function JobsFormPage() {
  const { register, handleSubmit } = useForm();
  const { jobs, createJob } = useJobs();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createJob(data);
    navigate("/jobs");
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <label htmlFor="">Company</label>
        <input
          className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
          type="text"
          {...register("company")}
          autoFocus
        />
        <label htmlFor="">Role</label>
        <input
          className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
          type="text"
          {...register("role")}
        />
        <label htmlFor="">Date</label>
        <input
          className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
          type="date"
          {...register("application-date")}
        />
        <label htmlFor="">Source</label>
        <input
          className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
          type="text"
          {...register("source")}
        />
        <label htmlFor="">Link</label>
        <input
          className="bg-zinc-700 w-full my-2 rounded-md py-2 px-2"
          type="text"
          {...register("link")}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default JobsFormPage;
