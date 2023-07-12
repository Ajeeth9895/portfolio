import React from "react";
import Pizza from "../Asset/img/pizza-banner.jpg";
import InstagramBanner from "../Asset/img/instagram-banner.png";
import whatsappBanner from "../Asset/img/whatsapp-banner.jpg";
import netflixBanner from "../Asset/img/netflix-banner.jpg";
import rentifyBanner from "../Asset/img/rental-banner.png";
import { Button } from "react-bootstrap";
import { CodeUrl } from "./CodeUrl";

function Projects() {
  return (
    //  <--Project details--> 
    <div className="projects-d py-1" id="Projects">
      <div className="container-fluid">
        <div className="text-center">
          <div className="project-details">Projects</div>
        </div>
        <div className="row post-grid d-flex justify-content-center">

          {/* pizza delivery app */}
          <div class="wrapper mt-5">
            <div class="card"><img src={Pizza} alt="" />
              <div class="info">
                <h1>Pizza-Hot</h1>
                <p>In this project i have used react,nodejs,express,mongodb and nodemailer</p>
                <hr />
                <a href={CodeUrl.pizzaDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.pizzaFrontend} target={CodeUrl.blank} >
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.pizzaBackend} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>


          {/* Instagram clone app */}
          <div class="wrapper mt-5">
            <div class="card"><img src={InstagramBanner} alt="" />
              <div class="info">
                <h1>Instagram-Clone</h1>
                <p>In this project i have used react-js,node-js,express-js,mongodb,firebase and cloudinary-api</p>
                <hr />
                <a href={CodeUrl.instagramDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.instagramFrontend} target={CodeUrl.blank} >
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.instagramBackend} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>


          {/* Whatsapp clone*/}
          <div class="wrapper mt-5">
            <div class="card"><img src={whatsappBanner} alt="" />
              <div class="info">
                <h1>Whatsapp-Clone</h1>
                <p>In this project i have used react-js,node-js,express-j, mongodb, firebase,pusher sand materialUi</p>
                <hr />
                <a href={CodeUrl.whatsappDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.whatsappFrontend} target={CodeUrl.blank} >
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.whatsappBackend} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>


          {/* Netflix clone*/}
          <div class="wrapper mt-5">
            <div class="card"><img src={netflixBanner} alt="" />
              <div class="info">
                <h1>Netflix-Clone</h1>
                <p>In this project i have used react-js,Tmdb-api,firebase,reactYoutube and movieTrailer</p>
                <hr />
                <a href={CodeUrl.netflixDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.netflixFrontend} target={CodeUrl.blank} >
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
              </div>
            </div>
          </div>


          {/* Rentify app*/}
          <div class="wrapper mt-5">
            <div class="card"><img src={rentifyBanner} alt="" />
              <div class="info">
                <h1>Rentify App</h1>
                <p>In this project i have used react-js,node-js,express-js,mongodb, datepicker and nodemailer</p>
                <hr />
                <a href={CodeUrl.rentifyDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.rentifyFrontend} target={CodeUrl.blank} >
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.rentifyBackend} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
