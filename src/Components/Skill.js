import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function Skill() {
  return (
      // <--Skill page details--> 
    <div className=" container-fluid py-1"id="Skills">
    <div className=" col-lg-12">
        <h1 className="d-flex justify-content-center skill-details">My Skill's</h1>
        <div className="row py-3">
          <div className="col-md-6">
            <div className="px-lg-3">
              <h4 className="color-white">Coding skills</h4>
              <div className="progress-wrapper">
                <span className="color-blue">JavaScript</span>
                <div>
                <ProgressBar variant="success" animated  now={50} label={'50%'}/>
                </div>
              </div>
              <div className="progress-wrapper">
                <span className="color-blue">Bootstrap</span>
                <div>
                <ProgressBar variant="success" animated  now={70} label={'70%'}/>
                </div>
              </div>
              <div className="progress-wrapper">
                <span className="color-blue">HTML</span>
                <div>
                <ProgressBar variant="success" animated  now={70} label={'70%'}/>
                </div>
              </div>
              <div className="progress-wrapper">
                <span className="color-blue">CSS</span>
                <div>
                <ProgressBar variant="success" animated  now={75} label={'75%'}/>
                </div>
              </div>
              <div className="progress-wrapper">
                <span className="color-blue">React</span>
                <div>
                <ProgressBar variant="success" animated  now={40} label={'40%'}/>
                </div>
              </div>
              <div className="progress-wrapper">
                <span className="color-blue">Java</span>
                <div>
                <ProgressBar variant="success" animated  now={40} label={'40%'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Skill
