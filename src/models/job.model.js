import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    application_date: {
      type: Date,
      default: Date.now,
    },
    source: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    user: {
      //con este objeto creamos la relacion entre trabajos y usuarios
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Jobs", jobSchema);
