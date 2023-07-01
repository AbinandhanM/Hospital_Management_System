import React from "react";
import "./HomeLanding.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeLanding() {
  return (
    <div>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">
          <div class="logo me-auto">
            <h1>
              <a href="index.html">Care and Cure</a>
            </h1>
          </div>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Login</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link className="nav-link" to="/login">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/login">
                      <a href="#">Doctor</a>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/login">
                      <a href="#">Patient</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a href="#">
                  <span>Sign Up</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link className="nav-link" to="/adminregister">
                      <a href="#">Admin</a>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/doctorregister">
                      <a href="#">Doctor</a>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/patientregister">
                      <a href="#">Patient</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="header-social-links d-flex align-items-center">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </header>
      {/* hero section */}
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container text-center text-md-left" data-aos="fade-up">
          <h1>
            Welcome to <span>Care&Cure</span>
          </h1>
          <h2>
            Providing exceptional medical care with compassion and expertise for
            a healthier tomorrow
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>

      {/*  */}
      <section id="what-we-do" class="what-we-do">
        <div class="container">
          <div class="section-title">
            <h2>What We Do</h2>
            <p>
              we handle various administrative tasks including patient
              registration, scheduling appointments, managing medical records,
              coordinating staff, ensuring smooth operations, and delivering
              high-quality healthcare services. Our goal is to provide efficient
              and effective management to support optimal patient care and
              satisfaction.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href="">Scheduling With Payments</a>
                </h4>
                <p>
                  Specify your schedule, collect payments. Integrate the widget
                  with your website and your mobile app. It’s that simple!
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>
                  <a href="">HD Video/Audio</a>
                </h4>
                <p>
                  You can have a HD Video/Audio call with your patients - both
                  on web and app.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href="">E-Prescription</a>
                </h4>
                <p>
                  A powerful but simple e-prescription (EMR) will allow you to
                  prescribe and share medications and advise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Count  */}
      <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Happy Clients</p>
                <p>15,000</p>
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Projects</p>
                <p>2,165</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Hours Of Support</p>
                <p>35,782</p>
              </div>
            </div>

            <div class="col-lg-3 col-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Hard Workers</p>
                <p>859</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Lumia</h3>
                <p>
                  2/108 Alagappa Colony <br />
                  Shollinganallur, Chennai 600021
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> +91 9865432120
                  <br />
                  <strong>Email:</strong> Care@gmail.com
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Pharmacy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">VirtualCare</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">EMR?EHR</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Advance HIMS</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#"></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Join our newsletter to stay updated on the latest news,
                  trends, and insights in hospital management.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; {new Date().getFullYear()}{" "}
              <strong>
                <span>Care&Cure</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits"></div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeLanding;
