import React from 'react';
import HTML from "../Asset/img/html.jpeg"
import CSS from "../Asset/img/css.jpeg"
import JavaScript from "../Asset/img/javascript.jpeg"
import Bootstrap from "../Asset/img/bootstrap.jpeg"
import mongodb from "../Asset/img/mongodb.jpeg"
import expressLogo from "../Asset/img/express.jpeg"
import nodejs from "../Asset/img/nodejs.jpeg"
import ReactImg from "../Asset/img/react.jpeg"
import javaImg from "../Asset/img/java.png"
import aws from "../Asset/img/aws.jpeg"
import github from "../Asset/img/github.jpeg"
import firebase from "../Asset/img/firebase.jpeg"
import pusher from "../Asset/img/pusher.jpeg"
import reactBootstrapLogo from "../Asset/img/reactbootstrap.jpeg"





function Skill() {
  return (
    // <--Skill page details--> 
    <div className=" container-fluid py-1" id="Skills">
      <div className=" col-lg-12">
        <h1 className="d-flex justify-content-center skill-details">My Skills</h1>
        <div className="row py-3">
          {/* <div className="col-md-6">
            <div className="px-lg-12 skill-content">

              <div>
                <div className="progress-wrapper">
                  <span className="color-blue">JavaScript</span>
                  <div>
                    <ProgressBar variant="success" animated now={60} />
                  </div>
                </div>

                <div className="progress-wrapper">
                  <span className="color-blue">HTML</span>
                  <div>
                    <ProgressBar variant="success" animated now={70} />
                  </div>
                </div>

                <div className="progress-wrapper">
                  <span className="color-blue">CSS</span>
                  <div>
                    <ProgressBar variant="success" animated now={70} />
                  </div>
                </div>

                <div className="progress-wrapper">
                  <span className="color-blue">React-Bootstrap</span>
                  <div>
                    <ProgressBar variant="success" animated now={70} />
                  </div>
                </div>

                <div className="progress-wrapper">
                  <span className="color-blue">React js</span>
                  <div>
                    <ProgressBar variant="success" animated now={70} />
                  </div>
                </div>

                <div className="progress-wrapper">
                  <span className="color-blue">Firebase</span>
                  <div>
                    <ProgressBar variant="success" animated now={50} />
                  </div>
                </div>

              </div>


              <div>

                <div className="progress-wrapper">
                  <span className="color-blue">Express js</span>
                  <div>
                    <ProgressBar variant="success" animated now={70} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <span className="color-blue">Node js</span>
                  <div>
                    <ProgressBar variant="success" animated now={70} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <span className="color-blue">Mongodb</span>
                  <div>
                    <ProgressBar variant="success" animated now={60} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <span className="color-blue">Java</span>
                  <div>
                    <ProgressBar variant="success" animated now={60} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <span className="color-blue">AWS</span>
                  <div>
                    <ProgressBar variant="success" animated now={40} />
                  </div>
                </div>

                <div className="progress-wrapper">
                  <span className="color-blue">Git-hub</span>
                  <div>
                    <ProgressBar variant="success" animated now={50} />
                  </div>
                </div>

              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={HTML} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={CSS} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={JavaScript} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={Bootstrap} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4 ">
              <img src={ReactImg} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4 ">
            <div className="d-flex justify-content-center my-4">
              <img src={expressLogo} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={mongodb} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={nodejs} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={javaImg} className="skill-img" alt="" />
            </div>
          </div>


          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={aws} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={github} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={firebase} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={pusher} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4 ">
            <div className="d-flex justify-content-center my-4">
              <img src={reactBootstrapLogo} className="skill-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
