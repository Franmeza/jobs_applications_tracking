import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });

    jwt.verify(token, "secret", (error, user) => {
      if (error) {
        return res.status(401).json({ message: "Token is not valid" });
      }
      req.user = user; //guardamos el usuario de la request para poder usarlo en las otras rutas
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
