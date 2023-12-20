import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext"; //Importamos auth provider para que pueda ser usado en todos los componentes
import JobsFormPage from "./pages/JobsFormPage";
import JobsListPage from "./pages/JobsListPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import { JobProvider } from "./context/JobsContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Envolvemos en un Route las rutas que queremos esten protejidas y ejecutamos esta proteccion desde ProtectedRoutes */}
          <Route element={<ProtectedRoutes />}>
            {" "}
            //
            <Route path="/jobs" element={<JobsListPage />} />
            <Route path="/add-job" element={<JobsFormPage />} />
            <Route path="/jobs/:id" element={<JobsFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
