import "./App.css";
import LoginForm from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/Registration/Registration";
import PatientRegistrationForm from "./components/PatientRegistration/PatientRegistration";
import AdminRegistrationForm from "./components/AdminRegistration/AdminRegistration";
import HomeLanding from "./components/HomeLanding/HomeLanding";
import { BrowserRouter, Route, Routes, Router, swit } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import PatientDashboard from "./components/Dashboard/PatientDashBoard";
import DoctorDashboard from "./components/Dashboard/DoctorDashboard";
import ViewDoctor from "./components/AdminPages/ViewDoctor";
import ViewPatient from "./components/AdminPages/ViewPatient";
import ViewAdmin from "./components/AdminPages/ViewAdmin";
import ViewSpecialties from "./components/PatientPages/ViewSpecialities";

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
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/viewdoctor" element={<ViewDoctor />} />
          <Route path="/viewpatient" element={<ViewPatient />} />
          <Route path="/viewadmin" element={<ViewAdmin />} />
          <Route path="/viewspecialties" element={<ViewSpecialties />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
