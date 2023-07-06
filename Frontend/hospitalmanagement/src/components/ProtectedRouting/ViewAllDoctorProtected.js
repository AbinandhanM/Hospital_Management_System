import { Navigate } from "react-router-dom";

function ViewAllDoctorProtected({ children, role, token }) {
  token = localStorage.getItem("token");
  role = localStorage.getItem("role");
  if (token !== null && role === "Admin") {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to="/error" />;
  }
}

export default ViewAllDoctorProtected;
