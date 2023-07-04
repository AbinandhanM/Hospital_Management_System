import "bootstrap/dist/css/bootstrap.min.css";
import "../AdminPages/Status.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AdminDashboard from "../Dashboard/AdminDashboard";

function Status() {
  var [doctor, setDoctor] = useState({
    userId: 0,
    status: "",
  });

  const navigate = useNavigate();

  const update = () => {
    let JwtToken = localStorage.getItem("token");
    console.log(doctor);
    fetch("http://localhost:5126/api/Approve/IApprove", {
      method: "POST",
      headers: {
        accept: "text/plain",
        Authorization: "Bearer " + JwtToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...doctor }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        navigate("/admindashboard");
        toast.success("Status Updated Successfully");
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div>
      <AdminDashboard />
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div class="card px-5 py-5" id="form1">
              <div class="form-data" v-if="!submitted">
                <div class="forms-inputs mb-4">
                  {" "}
                  <span>Doctor ID</span>{" "}
                  <input
                    autocomplete="off"
                    type="text"
                    onChange={(event) => {
                      setDoctor({
                        ...doctor,
                        userId: event.target.value,
                      });
                    }}
                  />
                </div>
                <div class="forms-inputs mb-4">
                  <span>Status</span>{" "}
                  <select
                    onChange={(event) => {
                      setDoctor({
                        ...doctor,
                        status: event.target.value,
                      });
                    }}
                    value={doctor.status}
                  >
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <div class="invalid-feedback"></div>
                </div>
                <div class="mb-3">
                  {" "}
                  <button class="btn btn-dark w-100" onClick={update}>
                    Change Status
                  </button>
                </div>
              </div>
              <div class="success-data" v-else>
                <div class="text-center d-flex flex-column">
                  {" "}
                  <i class="bx bxs-badge-check"></i>{" "}
                  <span class="text-center fs-1"></span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
