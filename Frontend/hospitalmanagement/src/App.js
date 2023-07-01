import "./App.css";
import LoginForm from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/Registration/Registration";
import PatientRegistrationForm from "./components/PatientRegistration/PatientRegistration";
import AdminRegistrationForm from "./components/AdminRegistration/AdminRegistration";

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      {/* <PatientRegistrationForm /> */}
      <AdminRegistrationForm />
    </div>
  );
}

export default App;
