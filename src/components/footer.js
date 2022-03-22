import React from "react";
// import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-4">
            <h5>
              <u>Links</u>
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
              <li>
                <a href="#form">Form</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <h5>
              <u>Social</u>
            </h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <a
              role="button"
              className="btn btn-link"
              href="tel:+1-410-823-9355"
            >
              <i className="fa fa-phone"></i> (410) 823-9355
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
