import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const navigate = useNavigate();
  var [Login, setLogin] = useState({
    userId: 0,
    password: "",
  });
  var login = () => {
    fetch("http://localhost:5126/api/Hospital/Login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Login }),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("userId", myData.userId); // Modify the property name here
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        console.log(myData);
        if (myData.role === "Patient") {
          localStorage.setItem("userId", myData.userId);
          navigate("/patientdashboard");
        } else if (myData.role === "Doctor") {
          navigate("/doctordashboard");
        } else if (myData.role === "Admin") {
          navigate("/admindashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">
                    Welcome back! Oops You Alright ?
                  </h3>

                  {/* Sign In Form */}
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="ID"
                        onChange={(event) => {
                          setLogin({
                            ...Login,
                            userId: event.target.value,
                          });
                        }}
                      />
                      <label htmlFor="floatingInput">Login ID</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(event) => {
                          setLogin({
                            ...Login,
                            password: event.target.value,
                          });
                        }}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="button"
                        onClick={login}
                      >
                        <Link to="/admindashboard">Sign In</Link>
                      </button>

                      <div className="text-center">
                        <a className="small" href="#">
                          <Link to="/">Not an Member ! Sign up </Link>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
