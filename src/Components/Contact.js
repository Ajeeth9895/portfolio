import React from "react";
import Email from "../Asset/img/email.png"
import Github from "../Asset/img/github.png"
import linkedin from "../Asset/img/linkedin.png";
import { CodeUrl } from "./CodeUrl";

function Contact() {
  return (
    <div className="container-fluid" id="contact">
      <div className="text-center contact-hd">Contact</div>
      <div className=" contact-info">
        <div className="contact-details col-lg-4 wrapper">
          <h4 className="color-blue p-2">Contact Detail's</h4>
          <div className="mobile-details">
            <span className="color-green">Mobile:</span>
            <br />
            +91 6382862595, 8098333881
          </div>
          <div className="mail-details">
            <span className="color-green">Mail:</span>
            <br />
            ajeethkumar.gopal@gmail.com
          </div>
        </div>
        <div className="social-media col-md-6 col-lg-3 ">
          <h4 className="color-blue">Get in touch</h4>
          <div className="media-link" >
          <a href={CodeUrl.gmail} target={CodeUrl.blank}><img src={Email}  className="img-details" alt="" /></a>
          <img src={Github} className="img-details" alt="" />
          <img src={linkedin}  className="img-details" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
