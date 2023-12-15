import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest } from "../api/auth";
import { loginRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext(); //Crea contexto de autenticacion

//este hook simplifica el proceso de acceder al contexto de autenticación y se asegura de que se utilice dentro de un componente que esté envuelto por el proveedor de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext); //obtener el valor actual del contexto
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //usuario que va a poder ser leido en toda la aplicacion
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
      // console.log("error", error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log("res-signin", res);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      //se usa para evitar consumir recursos de mas cuando este componente no esta siendo usado
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const cookies = Cookies.get(); //leer las cookies
    if (cookies.token) console.log(cookies.token);
  }, []);

  //provider que envuelve a otros componentes
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//El fin de este contexto es para compartir datos de autenticacion (como el usuario actual y funciones relacionadas con la autenticacion)entre componentes de la aplicacion.
