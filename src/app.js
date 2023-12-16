import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/jobs.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

//creacion servidor

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true, //poder tener acceso a los header y leer las cookies
  })
);
app.use(morgan("dev"));
app.use(express.json()); //necesario para que procese los objetos json enviados por request
app.use(cookieParser()); //permite convertir las cookies en un json para que el backend las pueda leer

app.use("/api", authRoutes);
app.use("/api", jobRoutes);

export default app;
