//configuracion de axios para que establezca las cookies en el navegador cuando hace las peticiones

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API, //dominio base al que siempre va a consultar
  withCredentials: true, //establece las cookies
});

export default instance;
