import "./App.css";
import LoginForm from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/Registration/Registration";
// import RegistrationForm from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
