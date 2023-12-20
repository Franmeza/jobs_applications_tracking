import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold"> Jobs Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link
                to="/add-job"
                className="bg-indigo-500 px-4 py-1 rounded-md"
              >
                Add Job
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-md">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-md"
              >
                Register
              </Link>
            </li>
          </>
        )}

        <li>
          <Link></Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
