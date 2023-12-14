import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  // FORMA UNO CREAR USUARIO EN LA BDD
  //   User.create({
  //     email,
  //     password,
  //     username,
  //   });
  try {
    const passwordHashed = await bcrypt.hash(password, 10);
    // FORMA DOS CREAR USUARIO (aca no esta aun guardado en la BDD)
    const newUser = new User({
      email,
      password: passwordHashed,
      username,
    });

    const userSaved = await newUser.save(); //Guardar usuario en la BDD

    const token = await createAccessToken({ id: userSaved._id }); //llama a la funcion para crear el token

    res.cookie("token", token); //Almacena el token en las cookies

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password); // compara la contraseña y devuelve true o false

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  });
};
