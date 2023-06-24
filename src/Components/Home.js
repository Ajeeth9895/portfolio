import React from "react";
import Resume from "../Asset/cv/Ajeeth-resume.pdf";

function Home() {
  return (
    // <--Home page details-->  
    <div className="d-flex justify-content-center " id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome!</div>
        <h2>
          I'm <span className="name-hd">Ajeeth</span> Kumar G
        </h2>
        <h4 className="stack-hd">full stack developer</h4>
        <a href={Resume} download="Resume">
          {/* <button type="button" className="btn btn-danger btn-lg btn-block">
             Download Cv
           </button> */}
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Download CV</span>
            </span>
          </button>

        </a>
      </div>
    </div>
  );
}

export default Home;
