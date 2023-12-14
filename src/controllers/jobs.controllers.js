import Jobs from "../models/job.model.js";

export const createJobs = async (req, res) => {
  const { company, role, application_date, source, link } = req.body;

  const newJob = new Jobs({
    company,
    role,
    application_date,
    source,
    link,
    user: req.user.id, //usuario a quien se le va a asignar la aplicacion nueva
  });

  const savedJob = await newJob.save();

  res.status(200).json(savedJob);
};

export const getJobs = async (req, res) => {
  const jobs = await Jobs.find({
    user: req.user.id, //para que traiga unicamente las jobs aplications del usuario que esta logueado
  }).populate("user"); //esto me trae toda la informacion del usuario, no solo el id

  res.json(jobs);
};

export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Jobs.findById(id).populate("user");
  if (!job) return res.status(404).json({ message: "Job not Found" });

  res.status(200).json(job);
};

export const udpdateJob = async (req, res) => {
  const { id } = req.params;

  const job = await Jobs.findByIdAndUpdate(id, req.body, {
    new: true,
  }); //como mongoose devuelve el dato viejo, se le agrega new
  if (!job) return res.status(404).json({ message: "Job not Found" });

  res.status(200).json(job);
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await Jobs.findByIdAndDelete(id);
  if (!job) return res.status(404).json({ message: "Job not Found" });

  res.sendStatus(204);
};
