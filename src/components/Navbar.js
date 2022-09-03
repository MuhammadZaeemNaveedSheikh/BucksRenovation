import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../Images/logo.png";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

function App() {
  return (
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <div className="nav-options-container">
          <div className="nav-options">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="tel:(267)-235-2406" className="contact_number">
            <FiPhone className="phone-icon" />
            (267)-235-2406
          </a>
          <div className="social-links">
            <div>
              <BsTwitter className="social-icon" />
            </div>
            <div>
              <FaFacebookF className="social-icon" />
            </div>
            <div>
              <BsPinterest className="social-icon" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
