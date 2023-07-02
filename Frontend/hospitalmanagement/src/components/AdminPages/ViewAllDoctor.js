import React, { useState, useEffect } from "react";
import "./ViewAllDoctor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "../Dashboard/AdminDashboard";

function ViewAllDoctor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetEmployeeInfo();
  }, []);

  const GetEmployeeInfo = () => {
    fetch("http://localhost:5126/api/DoctorAndAdmin/GetAllDoctors", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const myData = await response.json();
        setData(myData);
        console.log(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div>
      <AdminDashboard />
      <div className="home">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              {data.map((doctor) => (
                <div className="col-xl-6 col-md-12" key={doctor.doctorId}>
                  <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                          <div className="m-b-25">
                            <img
                              src="https://img.icons8.com/bubbles/100/000000/user.png"
                              className="img-radius"
                              alt="User-Profile-Image"
                            />
                          </div>
                          <h6 className="f-w-600">Hello Doctor</h6>
                          <p>{doctor.name}</p>
                          <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                            Information
                          </h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Email</p>
                              <h6 className="text-muted f-w-400">
                                {doctor.emailId}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Phone</p>
                              <h6 className="text-muted f-w-400">
                                {doctor.phoneNumber}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Date Of Birth</p>
                              <h6 className="text-muted f-w-400">
                                {doctor.dateOfBirth}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Experience</p>
                              <h6 className="text-muted f-w-400">
                                {doctor.experience}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Status</p>
                              <h6 className="text-muted f-w-400">
                                {doctor.status}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Location</p>
                              <h6 className="text-muted f-w-400">Chennai</h6>
                            </div>
                          </div>
                          <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                            Surgeries
                          </h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Recent</p>
                              <h6 className="text-muted f-w-400">70+</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Specialized In</p>
                              <h6 className="text-muted f-w-400">
                                {doctor.specialization}
                              </h6>
                            </div>
                          </div>
                          <ul className="social-link list-unstyled m-t-40 m-b-10">
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="facebook"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-facebook feather icon-facebook facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="twitter"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-twitter feather icon-twitter twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="instagram"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-instagram feather icon-instagram instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllDoctor;
