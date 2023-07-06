import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewDoctor.css";
import AdminDashboard from "../Dashboard/AdminDashboard";

function ViewAdmin() {
  var [data, setData] = useState([]);
  useEffect(() => {
    GetEmployeeInfo();
  }, []);
  const GetEmployeeInfo = () => {
    let JwtToken = localStorage.getItem("token");
    fetch(
      "http://localhost:5126/api/DoctorAndAdmin/GetAdminById/GetAdminById?adminId=" +
        localStorage.getItem("userId"),
      {
        method: "GET",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
          Authorization: "Bearer " + JwtToken,
        },
      }
    )
      .then(async (data) => {
        var myData = await data.json();
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div>
      <AdminDashboard />
      <div className="home">
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            class="img-radius"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h6 class="f-w-600">Hello Admin</h6>
                        <p>{data.name}</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Email</p>
                            <h6 class="text-muted f-w-400">{data.emailId}</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Phone</p>
                            <h6 class="text-muted f-w-400">
                              {data.phoneNumber}
                            </h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Date Of Birth</p>
                            <h6 class="text-muted f-w-400">17/11/2001</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Experience</p>
                            <h6 class="text-muted f-w-400">2</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Added By</p>
                            <h6 class="text-muted f-w-400">1</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Location</p>
                            <h6 class="text-muted f-w-400">Chennai</h6>
                          </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          History
                        </h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Recently Added Admin</p>
                            <h6 class="text-muted f-w-400">Thanya</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Member Since</p>
                            <h6 class="text-muted f-w-400">2001</h6>
                          </div>
                        </div>
                        <ul class="social-link list-unstyled m-t-40 m-b-10">
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
                                class="mdi mdi-facebook feather icon-facebook facebook"
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
                                class="mdi mdi-twitter feather icon-twitter twitter"
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
                                class="mdi mdi-instagram feather icon-instagram instagram"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAdmin;
