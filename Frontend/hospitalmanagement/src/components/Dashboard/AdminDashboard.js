import React from "react";
import "./AdminDashboard.css";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  var logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://img.freepik.com/premium-vector/emergency-medical-symbol-vector-isolated-medical-sign-icon-with-snake-medical-star-symbol-star-life-sign-eps-10_158224-152.jpg?w=740"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to="/viewadmin">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/viewalldoctor">
                  View All Doctor
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/status">
                  Approve Status
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/deletedoctor">
                  Delete Doctor
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="d-flex ">
            {/* <!-- Icon --> */}
            <div
              className="dropdown"
              style={{
                // position: "absolute",
                right: 150,
                maxHeight: "none",
                overflow: "visible",
              }}
            >
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://img.freepik.com/premium-vector/male-doctor-nurse-avatar-face-icon-flat-style_768258-2657.jpg?w=740"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-start"
                aria-labelledby="navbarDropdownMenuAvatar"
                // style="max-height: none; overflow: visible;"
              >
                <li>
                  <Link className="nav-link" to="/viewadmin">
                    My Profile
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" onClick={logout}>
                    <Link to="/">Logout</Link>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Avatar --> */}
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </div>
  );
}

export default AdminDashboard;
