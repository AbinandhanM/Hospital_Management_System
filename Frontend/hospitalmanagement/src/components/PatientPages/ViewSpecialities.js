import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewSpecialities.css";

const ViewSpecialties = () => {
  return (
    <section className="light">
      <div className="container py-2">
        <div className="h1 text-center text-dark" id="pageHeaderTitle">
          Specialities
        </div>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src="https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              <a href="#">Cardiology</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2023
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Our Cardiology Department specializes in the diagnosis, treatment,
              and prevention of heart-related conditions. Our team of
              experienced cardiologists and state-of-the-art facilities ensure
              comprehensive cardiac care, including advanced diagnostic tests,
              interventional procedures, and personalized treatment plans.
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>More info
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>Contact.
              </li>
              <li className="tag__item play blue">
                <a href="#">
                  <i className="fas fa-play mr-2"></i>About
                </a>
              </li>
            </ul>
          </div>
        </article>

        {/* Repeat the same structure for the other articles */}

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src="https://images.unsplash.com/photo-1597765654534-e42ea47ab66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              <a href="#">Orthopedics</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 30th 2023
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Our Orthopedic Department specializes in the diagnosis and
              treatment of musculoskeletal disorders, including bone fractures,
              joint replacements, sports injuries, and spine conditions. With a
              team of skilled orthopedic surgeons, physical therapists, and
              rehabilitation specialists, we aim to restore mobility, reduce
              pain, and enhance the quality of life for our patients.
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>More Info
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>Contact
              </li>
              <li className="tag__item play blue">
                <a href="#">
                  <i className="fas fa-play mr-2"></i>About
                </a>
              </li>
            </ul>
          </div>
        </article>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src="https://images.unsplash.com/photo-1606572733585-1c54ba3cf917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              <a href="#">Obstetrics and Gynecology</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 27th 2023
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Our Obstetrics and Gynecology Department provides comprehensive
              women's healthcare services, ranging from routine gynecological
              exams and prenatal care to complex gynecological surgeries and
              high-risk obstetrics. Our compassionate team of obstetricians,
              gynecologists, and midwives is committed to delivering
              personalized care and promoting women's health at every stage of
              life.
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>More Info
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>Contact
              </li>
              <li className="tag__item play blue">
                <a href="#">
                  <i className="fas fa-play mr-2"></i>About
                </a>
              </li>
            </ul>
          </div>
        </article>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src="https://plus.unsplash.com/premium_photo-1677094310913-0e393f34cb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              <a href="#">Neurology</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              The Neurology Department at our hospital focuses on the diagnosis
              and management of disorders affecting the brain, spinal cord, and
              peripheral nervous system. Our team of neurologists and
              neurosurgeons utilizes advanced diagnostic techniques and
              treatment modalities to address conditions such as stroke,
              epilepsy, Parkinson's disease, multiple sclerosis, and
              neurodegenerative disorders, aiming to improve patients'
              neurological function and quality of life
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>More info
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>Contact
              </li>
              <li className="tag__item play blue">
                <a href="#">
                  <i className="fas fa-play mr-2"></i>About
                </a>
              </li>
            </ul>
          </div>
        </article>

        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src="https://images.unsplash.com/photo-1631049123177-37356471f3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80"
              alt="Image Title"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              <a href="#">Oncology</a>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              The Oncology Department at our hospital is dedicated to providing
              exceptional cancer care. Our multidisciplinary team of
              oncologists, surgeons, and support staff works collaboratively to
              offer the latest in cancer treatment options, including
              chemotherapy, radiation therapy, immunotherapy, and targeted
              therapies, with a focus on personalized care and improved patient
              outcomes.
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>More Info
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>Contact
              </li>
              <li className="tag__item play blue">
                <a href="#">
                  <i className="fas fa-play mr-2"></i>About
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ViewSpecialties;
