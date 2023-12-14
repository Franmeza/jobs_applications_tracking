import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/jobs" element={<h1>Jobs</h1>} />
        <Route path="/add-job" element={<h1>Add Job</h1>} />
        <Route path="/jobs/:id" element={<h1>Job</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </>
  );
}

export default App;
