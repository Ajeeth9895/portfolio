import React from "react";
import Pokemon from "../Asset/img/pokemon.jpg";
import { Button } from "react-bootstrap";

function Projects() {
  return (
    <div class="projects-d" id="Projects">
      <div class="container">
        <div class="text-center">
          <div class="project-details">Projects</div>
        </div>
        <div class="row post-grid">
          <div class="col-md-6 col-lg-4 card-box my-5 ">
            <div class="proj-hd">Pokemon Api</div>
            <div class="d-flex justify-content-center my-5">
              <img src={Pokemon} className="proj-img" alt="" />
            </div>
            <div class="proj-button">
              <a
                href="https://github.com/Ajeeth9895/pokemon-pagination"
                target={"_blank"}
              >
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href="https://github.com/Ajeeth9895/pokemon-pagination"
                target={"_blank"}
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 ">
            {/* <div class="card">
            <div class="img-place">
              <img src="../assets/img/work/Weather.jpg" style={{height:"16em"}} alt=""/>
            </div>
            <div class="caption">
              <div  class="post-category">Weather Api</div>
            
            </div>
          </div> */}
          </div>
          <div class="col-md-6 col-lg-4 ">
            {/* <div class="card">
            <div class="img-place">
              <img src="../assets/img/work/pincode.jpg"style={{height:"16em"}} alt=""/>
            </div>
            <div class="caption">
              <div  class="post-category">Pincode Api</div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
