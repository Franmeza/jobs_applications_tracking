import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getJob,
  getJobs,
  createJobs,
  udpdateJob,
  deleteJob,
} from "../controllers/jobs.controllers.js";

const jobRoutes = Router();

jobRoutes.get("/jobs", authRequired, getJobs);
jobRoutes.get("/jobs/:id", authRequired, getJob);
jobRoutes.post("/jobs", authRequired, createJobs);
jobRoutes.put("/jobs/:id", authRequired, udpdateJob);
jobRoutes.delete("/jobs/:id", authRequired, deleteJob);

export default jobRoutes;
