import axios from "axios";

const { VITE_API } = import.meta.env;

export const registerRequest = async (user) => {
  await axios.post(`${VITE_API}/register`, user);
};

export const loginRequest = (user) => axios.post(`${VITE_API}/login`, user);
