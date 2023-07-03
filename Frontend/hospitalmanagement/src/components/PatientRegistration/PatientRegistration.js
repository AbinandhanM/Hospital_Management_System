import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PatientRegistration.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientRegistrationForm() {
  var [Patient, setPatient] = useState({
    patientId: 0,
    users: {
      userId: 0,
    },
    name: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    gender: "",
    bloodGroup: "",
    emailId: "",
    address: "",
    passwordClear: "",
  });
  var register = () => {
    fetch("http://localhost:5126/api/Hospital/PatientRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Patient }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        alert("Registerd Successfully your ID is " + myData.userId);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src=" https://images.unsplash.com/photo-1606166155766-87872211cd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    className="img-fluid"
                    alt="Doctor"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      height: "100%",
                      innerWidth: "100%",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Patient registration form
                    </h3>

                    <div className="row">
                      <div className="form-check form-check-inline mb-0 me-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            placeholder="Enter Your Name"
                            className="form-control form-control-lg"
                            onChange={(event) => {
                              setPatient({
                                ...Patient,
                                name: event.target.value,
                              });
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m"
                          ></label>
                        </div>
                      </div>
                      <div className="form-check form-check-inline mb-0 me-4">
                        <div className="form-outline">
                          <input
                            type="date"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                            onChange={(event) => {
                              setPatient({
                                ...Patient,
                                dateOfBirth: event.target.value,
                              });
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n"
                          ></label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-check form-check-inline mb-0 me-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m1"
                            className="form-control form-control-lg"
                            placeholder="Enter your number"
                            onChange={(event) => {
                              setPatient({
                                ...Patient,
                                phoneNumber: event.target.value,
                              });
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          ></label>
                        </div>
                      </div>
                      <div className="form-check form-check-inline mb-0 me-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n1"
                            className="form-control form-control-lg"
                            placeholder="Gender"
                            onChange={(event) => {
                              setPatient({
                                ...Patient,
                                gender: event.target.value,
                              });
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          ></label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example9"
                        className="form-control form-control-lg"
                        placeholder="Blood Group"
                        onChange={(event) => {
                          setPatient({
                            ...Patient,
                            bloodGroup: event.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example9"
                      ></label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example90"
                        className="form-control form-control-lg"
                        placeholder="Email ID"
                        onChange={(event) => {
                          setPatient({
                            ...Patient,
                            emailId: event.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example90"
                      ></label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example99"
                        className="form-control form-control-lg"
                        placeholder="Address"
                        onChange={(event) => {
                          setPatient({
                            ...Patient,
                            address: event.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example99"
                      ></label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="Password"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        onChange={(event) => {
                          setPatient({
                            ...Patient,
                            passwordClear: event.target.value,
                          });
                        }}
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example97"
                      ></label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="btn btn-light btn-lg">
                        <Link to="/">BACK</Link>
                      </button>
                      <button
                        type="button"
                        onClick={register}
                        className="btn btn-warning btn-lg ms-2"
                      >
                        <Link to="/">Submit form</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientRegistrationForm;
