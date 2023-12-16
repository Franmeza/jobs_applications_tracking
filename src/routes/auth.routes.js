import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.Middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const authRoutes = Router();

authRoutes.post("/register", validateSchema(registerSchema), register);
authRoutes.post("/login", validateSchema(loginSchema), login);
authRoutes.post("/logout", logout);
authRoutes.get("/verify", verifyToken);
authRoutes.get("/profile", authRequired, profile);

export default authRoutes;
