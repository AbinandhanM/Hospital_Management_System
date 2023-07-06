import { Navigate } from "react-router-dom";

function ViewSpecialitiesProtected({ token, children, role }) {
  token = localStorage.getItem("token");
  role = localStorage.getItem("role");

  if (token !== null && (role === "Doctor" || role === "Patient")) {
    return children;
  } else {
    localStorage.clear();
    return <Navigate to="/error" />;
  }
}

export default ViewSpecialitiesProtected;
