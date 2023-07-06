import { Navigate } from "react-router-dom";

function ViewPatientProtected({ token, children, role }) {
  token = localStorage.getItem("token");
  role = localStorage.getItem("role");

  if (token !== null && role === "Patient") {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to="/error" />;
  }
}

export default ViewPatientProtected;
