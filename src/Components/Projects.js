import React from "react";
import Pokemon from "../Asset/img/pokemon.png";
import weather from "../Asset/img/weather.png";
import Postalcode from "../Asset/img/Postalcode.png";
import { Button } from "react-bootstrap";
import { CodeUrl } from "./CodeUrl";

function Projects() {
  return (
    <div class="projects-d" id="Projects">
      <div class="container-fluid">
        <div class="text-center">
          <div class="project-details">Projects</div>
        </div>
        <div class="row post-grid d-flex justify-content-center ">
          <div class="col-md-6 col-lg-3 card-box my-5 mx-4">
            <div class="proj-hd">Pokemon</div>
            <div class="d-flex justify-content-center my-5">
              <img src={Pokemon} className="proj-img" alt="" />
            </div>
            <div class="proj-button">
              <a href={CodeUrl.pokemonGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href={CodeUrl.pokemonDeploy}
                target={CodeUrl.blank}
                class="m-2"
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 card-box my-5 mx-4">
            <div class="proj-hd">Weather</div>
            <div class="d-flex justify-content-center my-5">
              <img src={weather} className="proj-img" alt="" />
            </div>
            <div class="proj-button">
              <a href={CodeUrl.weatherGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a
                href={CodeUrl.weatherDeploy}
                target={CodeUrl.blank}
                class="m-2"
              >
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 card-box my-5 mx-4">
            <div class="proj-hd">Postal code</div>
            <div class="d-flex justify-content-center my-5">
              <img src={Postalcode} className="proj-img" alt="" />
            </div>
            <div class="proj-button">
              <a href={CodeUrl.pincodeGit} target={CodeUrl.blank}>
                <Button type="button" variant="outline-success">
                  Source
                </Button>
              </a>
              <a href={CodeUrl.pincodeDeploy} target={CodeUrl.blank} class="m-2">
                <Button type="button" variant="outline-success">
                  Deploy
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
