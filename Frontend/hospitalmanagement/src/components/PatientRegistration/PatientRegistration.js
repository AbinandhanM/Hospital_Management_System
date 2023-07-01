import React, { useState } from "react";
import "./Registration.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationForm() {
  var [doctor, setDoctor] = useState({
    doctorId: 0,
    users: {
      userId: 0,
    },
    name: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    emailId: "",
    specialization: "",
    experience: 0,
    status: "",
    passwordClear: "",
  });
  var register = () => {
    fetch("http://localhost:5126/api/Hospital/DoctorRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...doctor }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
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
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    className="img-fluid"
                    alt="Doctor"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Doctor registration form
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
                              setDoctor({
                                ...doctor,
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
                              setDoctor({
                                ...doctor,
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
                              setDoctor({
                                ...doctor,
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
                            placeholder="Enter your email"
                            onChange={(event) => {
                              setDoctor({
                                ...doctor,
                                emailId: event.target.value,
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
                        placeholder="Specialization"
                        onChange={(event) => {
                          setDoctor({
                            ...doctor,
                            specialization: event.target.value,
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
                        type="number"
                        id="form3Example90"
                        className="form-control form-control-lg"
                        placeholder="Experience"
                        onChange={(event) => {
                          setDoctor({
                            ...doctor,
                            experience: event.target.value,
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
                        placeholder="Status"
                        onChange={(event) => {
                          setDoctor({
                            ...doctor,
                            status: event.target.value,
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
                          setDoctor({
                            ...doctor,
                            status: event.target.value,
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
                        Reset all
                      </button>
                      <button
                        type="button"
                        onClick={register}
                        className="btn btn-warning btn-lg ms-2"
                      >
                        Submit form
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

export default RegistrationForm;
