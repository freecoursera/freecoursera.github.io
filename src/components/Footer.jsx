import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer>
      <div className="foot-panel1">
        <ul>
          <p>Coursera</p>
          <Link to="">About</Link>
          <Link to="">What We Offer</Link>
          <Link to="">Leadership</Link>
          <Link to="">Careers</Link>
          <Link to="">Catalog</Link>
          <Link to="">Coursera Plus</Link>
          <Link to="">Professional Certificates</Link>
          <Link to="">MasterTrack® Certificates</Link>
          <Link to="">Degrees</Link>
          <Link to="">For Enterprise</Link>
          <Link to="">For Campus</Link>
          <Link to="">Become a Partner</Link>
          <Link to="">Coronavirus Response</Link>
          <Link to="">Free Courses</Link>
          <Link to="">All Courses</Link>
        </ul>

        <ul>
          <p>Community</p>
          <Link to="">Learners</Link>
          <Link to="">Partners</Link>
          <Link to="">Beta Testers</Link>
          <Link to="">Translators</Link>
          <Link to="">Blog</Link>
          <Link to="">Tech Blog</Link>
          <Link to="">Teaching Center</Link>
        </ul>

        <ul>
          <p>More</p>
          <Link to="">Press</Link>
          <Link to="">Investors</Link>
          <Link to="">Terms</Link>
          <Link to="">Privacy</Link>
          <Link to="">Help</Link>
          <Link to="">Accessibility</Link>
          <Link to="">Contact</Link>
          <Link to="">Articles</Link>
          <Link to="">Directory</Link>
          <Link to="">Affiliates</Link>
          <Link to="">Modern Slavery Statement</Link>
          <Link to="">Do Not Sell/Share</Link>
        </ul>
        <ul className="mobile-app-link">
          <p>Mobile App</p>
          <Link to="">
            <img src="../images/app-store.png" alt="app-store" />
          </Link>
          <Link to="">
            <img src="../images/google play image.png" alt="google-play" />
          </Link>
          <img src="../images/ceritfied corp.png" alt="Certified corp" />
        </ul>
      </div>

      <div className="foot-panel2">
        <p>&copy; Coursera Clone </p>
        <div className="footer-social-icons">
          <Link to="">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-square-twitter"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-square-youtube"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-square-instagram"></i>
          </Link>
        </div>
      </div>
      <div className="discord-server-invite">
        <Link to="https://discord.gg/kR573YBTAU">Discord Server Invite ✉️</Link>
      </div>
    </footer>
  );
};

export default Footer;
