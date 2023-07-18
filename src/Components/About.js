import React from "react";
import { CodeUrl } from "./CodeUrl";
import aboutBanner from "../Asset/img/about-banner.jpg"


function About() {
  return (
    //  <--About page details--> 
    <div className="about_header container-fluid py-5" id="about">
      <h2 className="d-flex justify-content-center about-title my-5">About</h2>
      &nbsp;
      &nbsp;
      <div className="about_banner">
        <img className="about_image" src="https://thumbs.dreamstime.com/b/programmer-coding-young-man-freelancer-working-program-code-laptop-geek-coding-software-vector-concept-programmer-coding-131376782.jpg" alt="" />
      </div>
      <div className="row mx-2 details-me">
        <div className="col-lg-6 offset-lg-0 ">
          <h1 className="fw-white" style={{ color: "white" }}>
            Ajeeth Kumar G
          </h1>
          <h5 className="color-blue mb-3">Full Stack Developer</h5>
          <p className="" style={{ color: "white" }}>
            Enthusiastic and reliable developer with a strong knowledge of web development with 1.6+ years of
            industry experience as part of a computer program development team.
          </p>
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
        <div className="">
          <div className="col-md-6 color-white">
            <h3 className="fw-normal">front-end-developer</h3>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">
                  Frontend Developer with proven ability to adapt<br />
                  to new technologies and collaborate effectively<br />
                  with other developers</div>
              </li>
            </ul>
          </div>

          {/* <--Experience details-->  */}
          <div
            className="col-md-6 wow fadeInRight color-white mt-5"
            data-wow-delay="200ms"
          >
            <h3 className="fw-normal">full-stack-developer</h3>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">
                  Fullstack Developer who is passionate about going <br />
                  the extra mile to ensure the customer is unquestionably <br />
                  satisfied with the product or service provided.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
