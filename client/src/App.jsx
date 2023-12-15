import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext"; //Importamos auth provider para que pueda ser usado en todos los componentes

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<h1>Jobs</h1>} />
        <Route path="/add-job" element={<h1>Add Job</h1>} />
        <Route path="/jobs/:id" element={<h1>Job</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
