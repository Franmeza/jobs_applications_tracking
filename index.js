import app from "./src/app.js";
import { connectDB } from "./src/db.js";

connectDB(); //iniciar conexion con base de datos
app.listen(4000, () => {
  console.log("server listening on port 4000");
});
