import { Navigate } from "react-router-dom";

function AdminProtected({ children }) {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (token !== null && role === "Admin") {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to="/error" />;
  }
}

export default AdminProtected;
