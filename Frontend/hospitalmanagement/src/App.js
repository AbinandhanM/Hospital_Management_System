import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import UpdateDoctor from "./components/DoctorPages/UpdateDoctor";
import ViewAllDoctor from "./components/AdminPages/ViewAllDoctor";
import Status from "./components/AdminPages/Status";
import DoctorsDelete from "./components/AdminPages/DeleteDoctor";
import AdminProtected from "./components/ProtectedRouting/AdminProtected";
import DoctorProtected from "./components/ProtectedRouting/DoctorProtected";
import PatientProtected from "./components/ProtectedRouting/PatientProtected";
import ViewDoctorProtected from "./components/ProtectedRouting/ViewDoctorProtected";
import ViewPatientProtected from "./components/ProtectedRouting/ViewPatientProtected";
import ViewAdminProtected from "./components/ProtectedRouting/ViewAdminProtected";
import ViewSpecialtiesProtected from "./components/ProtectedRouting/ViewSpecialitiesProtected";
import UpdateDoctorProtected from "./components/ProtectedRouting/UpdateDoctorProtected";
import ViewAllDoctorProtected from "./components/ProtectedRouting/ViewAllDoctorProtected";
import StatusProtected from "./components/ProtectedRouting/StatusProtected";
import DeleteDoctorProtected from "./components/ProtectedRouting/DeleteDoctorProtected";
import emailjs from "@emailjs/browser";
import Error from "./components/ErrorPage/Error";

function App() {
  var token;
  var role;
  return (
    <div className="App">
      <ToastContainer />
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

          <Route
            path="/viewdoctor"
            element={
              <ViewDoctorProtected token={token} role={role}>
                <ViewDoctor />
              </ViewDoctorProtected>
            }
          />
          <Route
            path="/viewpatient"
            element={
              <ViewPatientProtected token={token} role={role}>
                <ViewPatient />
              </ViewPatientProtected>
            }
          />
          <Route
            path="/viewadmin"
            element={
              <ViewAdminProtected token={token} role={role}>
                <ViewAdmin />
              </ViewAdminProtected>
            }
          />
          <Route
            path="/viewspecialties"
            element={
              <ViewSpecialtiesProtected token={token} role={role}>
                <ViewSpecialties />
              </ViewSpecialtiesProtected>
            }
          />
          <Route
            path="/updatedoctor"
            element={
              <UpdateDoctorProtected token={token} role={role}>
                <UpdateDoctor />
              </UpdateDoctorProtected>
            }
          />
          <Route
            path="/viewalldoctor"
            element={
              <ViewAllDoctorProtected token={token} role={role}>
                <ViewAllDoctor />
              </ViewAllDoctorProtected>
            }
          />
          <Route
            path="/status"
            element={
              <StatusProtected token={token} role={role}>
                <Status />
              </StatusProtected>
            }
          />
          <Route
            path="/deletedoctor"
            element={
              <DeleteDoctorProtected token={token} role={role}>
                <DoctorsDelete />
              </DeleteDoctorProtected>
            }
          />

          <Route
            path="/admindashboard"
            element={
              <AdminProtected token={token} role={role}>
                <AdminDashboard />
              </AdminProtected>
            }
          />

          <Route
            path="/patientdashboard"
            element={
              <PatientProtected token={token}>
                <PatientDashboard />
              </PatientProtected>
            }
          />

          <Route
            path="/doctordashboard"
            element={
              <DoctorProtected token={token} role={role}>
                <DoctorDashboard />
              </DoctorProtected>
            }
          />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
