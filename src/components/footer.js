import React from "react";
// import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-4">
            <h5>
              <u>Links</u>
            </h5>
            <ul class="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="resources.html">Resources</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-4 col-sm-4 text-center">
            <h5>
              <u>Social</u>
            </h5>
            <a
              class="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              class="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              class="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              class="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i class="fa fa-youtube"></i>
            </a>
          </div>
          <div class="col-4 col-sm-4 text-center">
            <a role="button" class="btn btn-link" href="tel:+4108239355">
              <i class="fa fa-phone"></i> (410) 823-9355
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
