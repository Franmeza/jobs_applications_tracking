import axios from "./axios"; //Este es el axios configurado

export const registerRequest = async (user) => {
  await axios.post(`/register`, user);
};

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");

export const logOutRequest = () => axios.post("/logout");
