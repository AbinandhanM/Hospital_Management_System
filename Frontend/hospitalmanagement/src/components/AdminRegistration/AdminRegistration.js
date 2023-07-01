import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AdminRegistration.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminRegistrationForm() {
  var [Admin, setAdmin] = useState({
    adminId: 0,
    user: {},
    name: "",
    phoneNumber: "",
    emailId: "",
    addedBy: 0,
  });
  var register = () => {
    fetch("http://localhost:5126/api/Hospital/AdminRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Admin }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        alert("Your Password is First 5 Letter of Your Name + Phone Number");
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
                    src=" https://images.unsplash.com/photo-1597807037496-c56a1d8bc29a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      height: "568px",
                      width: "500px",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Admin Registration</h3>

                    <div className="row">
                      <div className="form-check form-check-inline mb-0 me-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            placeholder="Enter Your Name"
                            className="form-control form-control-lg"
                            onChange={(event) => {
                              setAdmin({
                                ...Admin,
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
                            type="text"
                            id="form3Example1n"
                            placeholder="Phone Number"
                            className="form-control form-control-lg"
                            onChange={(event) => {
                              setAdmin({
                                ...Admin,
                                phoneNumber: event.target.value,
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
                            placeholder="EMAIL ID"
                            onChange={(event) => {
                              setAdmin({
                                ...Admin,
                                emailId: event.target.value,
                              });
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          ></label>
                        </div>
                      </div>
                      {/* <div className="form-check form-check-inline mb-0 me-4">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="form3Example1n1"
                            className="form-control form-control-lg"
                            placeholder="Added BY"
                            onChange={(event) => {
                              setAdmin({
                                ...Admin,
                                addedBy: event.target.value,
                              });
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n1"
                          ></label>
                        </div>
                      </div> */}
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

export default AdminRegistrationForm;
