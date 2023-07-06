import { Navigate } from "react-router-dom";

function DoctorProtected({ children, role, token }) {
  token = localStorage.getItem("token");
  role = localStorage.getItem("role");
  if (token !== null && role === "Doctor") {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to="/error" />;
  }
}

export default DoctorProtected;
