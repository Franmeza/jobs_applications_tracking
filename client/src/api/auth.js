import axios from "axios";

const { VITE_API } = import.meta.env;
console.log(VITE_API);
export const registerRequest = (user) => {
  const res = axios.post(`${VITE_API}/register`, user);
  console.log(res);
};
