import React from "react";
import { CodeUrl } from "./CodeUrl";


function About() {
  return (
    //  <--About page details--> 
    <div className="container-fluid py-5" id="about">
      <h2 className="d-flex justify-content-center about-title my-5">About</h2>
      &nbsp;
      &nbsp;
      <div className="row mx-2 details-me">
        <div className="col-lg-6 offset-lg-0 ">
          <h1 className="fw-white" style={{ color: "white" }}>
            Ajeeth Kumar G
          </h1>
          <h5 className="color-blue mb-3">Full Stack Developer</h5>
          <p className="" style={{ color: "white" }}>
            {/* Passionate software engineer with 1.7 year's of professional experience
            building web application. */}
            Enthusiastic and reliable developer with a strong knowledge of web development with 1.6+ years of
            industry experience as part of a computer program development team.
          </p>
          {/* <ul className="theme-list">
            <li>
              <b className="color-green">From:</b> Ambur, Tamilnadu.
            </li>
            <li>
              <b className="color-green">Lives In:</b> Ambur, Tamilnadu.
            </li>
            <li className="color-green">
              <b>Age:</b> <span style={{ color: "white" }}>27</span>
            </li>
            <li>
              <b className="color-green">Gender:</b> Male
            </li>
          </ul> */}
          <a href={CodeUrl.resume} target={CodeUrl.blank}>
            <button class="button">
              <span class="button_lg">
                <span class="button_sl"></span>
                <span class="button_text">Download CV</span>
              </span>
            </button>
          </a>

        </div>
      </div>
      {/* <--Education details-->  */}
      <div className="container pt-5">
        <div className="row ">
          <div className="col-md-6 color-white">
            <h3 className="fw-normal">front-end-developer</h3>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">
                  Frontend Developer with proven ability to adapt<br />
                  to new technologies and collaborate effectively<br />
                  with other developers</div>
                {/* <div className="details">
                  <h5 className="color-blue">BE-Mechanical Engineering</h5>
                  <small className="">
                    Nehru Institute of Technology, Coimbatore, Tamilnadu.
                  </small>
                </div> */}
              </li>
              {/* &nbsp;
              <li>
                <div className="title">2010-2013</div>
                <div className="details">
                  <h5 className="color-blue">
                    DME(Diploma In Mechanical Engineering)
                  </h5>
                  <small className="">
                    Rajagopal Polytechnical College, Gudiyatham, Tamilnadu.
                  </small>
                </div>
              </li> */}
            </ul>
          </div>

          {/* <--Experience details-->  */}
          <div
            className="col-md-6 wow fadeInRight color-white"
            data-wow-delay="200ms"
          >
            <h3 className="fw-normal">full-stack-developer</h3>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">
                  Fullstack Developer who is passionate about going <br />
                  the extra mile to ensure the customer is unquestionably <br />
                  satisfied with the product or service provided.</div>
                {/* <div className="details">
                  <h5 className="color-blue">
                    Associate Professional
                  </h5>
                  <small className=" ">
                    DXC Technology Private Limited, Bangalore.
                  </small>
                </div> */}
              </li>
              {/* &nbsp;
              <li>
                <div className="title">2017-2018</div>
                <div className="details">
                  <h5 className="color-blue">Graduate Engineering Trainee</h5>
                  <small className="">SFL(TVS), Hosur.</small>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
