import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../Dashboard/AdminDashboard";

function Status() {
  const [doctor, setDoctor] = useState({
    doctorId: 0,
    name: "",
    dateOfBirth: "0",
    phoneNumber: "",
    emailId: "",
    specialization: "",
    experience: 0,
    status: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5126/api/Approve/IApprove", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/admindashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AdminDashboard />
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5" id="form1">
              <form onSubmit={handleSubmit}>
                <div className="forms-inputs mb-4">
                  <label htmlFor="doctorId">Doctor ID</label>
                  <input
                    id="doctorId"
                    name="doctorId"
                    type="text"
                    value={doctor.doctorId}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <label htmlFor="status">Status</label>
                  <input
                    id="status"
                    name="status"
                    type="text"
                    value={doctor.status}
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback"></div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-dark w-100" type="submit">
                    Change Status
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
