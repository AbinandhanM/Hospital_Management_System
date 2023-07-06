import { Navigate } from "react-router-dom";

function PatientProtected({ children, role, token }) {
  token = localStorage.getItem("token");
  role = localStorage.getItem("role");

  if (token !== null) {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to="/error" />;
  }
}

export default PatientProtected;
