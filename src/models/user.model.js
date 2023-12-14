import mongoose from "mongoose";

//modelo de usuario para la base de datos
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, //quita los espacios en blancos al final y al principio del dato
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema); //Para poder interacturar con la base de datos con los metodos
