import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
//conexion con la base de datos

const { DB_USER, DB_PASSWORD } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.co83wo9.mongodb.net/`
    );
    console.log(">>>DB is connected");
  } catch (error) {
    console.log(error);
  }
};
