import React from "react";

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
          <h5 className="color-blue mb-3">Full stack developer</h5>
          <p className="" style={{ color: "white" }}>
            Passionate software engineer with 1.6 year's of professional experience
            building web application.
          </p>
          <ul className="theme-list">
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
          </ul>
        </div>
      </div>
      {/* <--Education details-->  */}
      <div className="container pt-5">
        <div className="row ">
          <div className="col-md-6 color-white">
            <h2 className="fw-normal">Education</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2013-2016</div>
                <div className="details">
                  <h5 className="color-blue">BE-Mechanical Engineering</h5>
                  <small className="">
                    Nehru Institute of Technology, Coimbatore, Tamilnadu.
                  </small>
                </div>
              </li>
              &nbsp;
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
              </li>
            </ul>
          </div>

          {/* <--Experience details-->  */}
          <div
            className="col-md-6 wow fadeInRight color-white"
            data-wow-delay="200ms"
          >
            <h2 className="fw-normal">Experience</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">2021 - Current</div>
                <div className="details">
                  <h5 className="color-blue">
                    Associate Professional
                  </h5>
                  <small className=" ">
                    DXC Technology Private Limited, Bangalore.
                  </small>
                </div>
              </li>
              &nbsp;
              <li>
                <div className="title">2017-2018</div>
                <div className="details">
                  <h5 className="color-blue">Graduate Engineering Trainee</h5>
                  <small className="">SFL(TVS), Hosur.</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
