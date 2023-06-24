import React from "react";
import Pizza from "../Asset/img/pizza-banner.jpg";
import weather from "../Asset/img/weather.png";
import Postalcode from "../Asset/img/Postalcode.png";
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
            <div class="card"><img src="https://cmgventures.com/wp-content/uploads/2018/04/instagram-banner-01.png" alt="" />
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
            <div class="card"><img src="https://images.fonearena.com/blog/wp-content/uploads/2022/03/Whatsapp-1024x576.jpg" alt="" />
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
            <div class="card"><img src="https://www.unews.com.lb/wp-content/uploads/2022/03/Banner2.jpg" alt="" />
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
            <div class="card"><img src="https://www.pngitem.com/pimgs/m/506-5068178_home-appliances-banner-png-transparent-png.png" alt="" />
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
