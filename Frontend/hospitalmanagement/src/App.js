import "./App.css";
import LoginForm from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/Registration/Registration";
import PatientRegistrationForm from "./components/PatientRegistration/PatientRegistration";
import AdminRegistrationForm from "./components/AdminRegistration/AdminRegistration";
import HomeLanding from "./components/HomeLanding/HomeLanding";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/doctorregister" element={<RegistrationForm />} />
          <Route
            path="/patientregister"
            element={<PatientRegistrationForm />}
          />
          <Route path="/adminregister" element={<AdminRegistrationForm />} />
        </Routes>
      </BrowserRouter>

      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      {/* <PatientRegistrationForm /> */}
      {/* <AdminRegistrationForm /> */}
    </div>
  );
}

export default App;
