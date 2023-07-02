import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UpdateDoctor.css";
import DoctorDashboard from "../Dashboard/DoctorDashboard";

function UpdateDoctor() {
  // var [Doctor, setDoctor] = useState({
  //   doctorId: 0,
  //   users: {
  //     userId: 0,
  //   },
  //   name: "",
  //   dateOfBirth: new Date(),
  //   phoneNumber: "",
  //   emailId: "",
  //   specialization: "",
  //   experience: 0,
  // });

  return (
    <div>
      <DoctorDashboard />
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col">
            <div class="card my-4 shadow-3">
              <div class="row g-0">
                <div class="col-xl-6 d-xl-block bg-image">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div class=" justify-content-center align-items-center h-100">
                      <div class=" text-center" style={{ "margin-top": 220 }}>
                        <i class="fas fa-truck text-white fa-3x"></i>
                        <p class="text-white title-style">Good Morning Doc !</p>
                        <p class="text-white mb-0"></p>

                        <figure class="text-center mb-0">
                          <blockquote class="blockquote text-white">
                            <p class="pb-3">
                              <i
                                class="fas fa-quote-left fa-xs text-primary"
                                style={{
                                  backgroundColor: "hsl(210, 100%, 50%)",
                                }}
                              ></i>
                              <span class="lead font-italic">
                                Hope You Doing Great XD
                              </span>
                              <i
                                class="fas fa-quote-right fa-xs text-primary"
                                style={{
                                  backgroundColor: "hsl(210, 100%, 50%)",
                                }}
                              ></i>
                            </p>
                          </blockquote>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-4 text-uppercase">Update Doctor</h3>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form3Example1m">
                            Name
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="date"
                            id="form3Example1n"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form3Example1n">
                            DateofBirth
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example8">
                        Email
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example3">
                        Phone Number
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example2"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example2">
                        Specialization
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example2"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example2">
                        Experience
                      </label>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        class="btn btn-success btn-lg ms-2"
                        style={{ backgroundColor: "hsl(210, 100%, 50%)" }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateDoctor;
