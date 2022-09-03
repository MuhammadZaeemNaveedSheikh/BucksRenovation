import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import testImage from "../Images/test.jpg";
import footerLogo from "../Images/logo_custom_gold.png";
import partners from "../Images/partners.png";
function App() {
  return (
      <div className="footer">
        <div>
          <div className="footer-logo">
            <img src={footerLogo} />
            <p>
              We are committed to delivering perfection in the bathroom and
              kitchen interior designs. We guarantee one hundred percent
              customer satisfaction on the renovation work or the completely new
              designs by our teams. Contact us today to renovate your kitchen
              and bathrooms to whole new levels.
            </p>
            <p>
              Our friendly team is available round the clock to provide the
              ideas you love. Just talk to us about your requirements and we
              will be happy to help you out there.
            </p>
            <img src={partners} />
          </div>
        </div>
        <div>
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Bathroom Remodeling Bucks County PA</a>
            </li>
            <li>
              <a href="#">Complete Home Renovation in Bucks County PA</a>
            </li>
            <li>
              <a href="#">Quality Kitchen Renovation in Bucks County PA</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h4>Call now for a free estimate!</h4>
            <a href="tel:(267) 235-2406" className="footer-telephone-number">
              (267) 235-2406
            </a>
          </div>
          <div>
            <h4>Bucksrenovations@gmail.com</h4>
            <a
              href="mailto:Bucksrenovations@gmail.com"
              className="footer-telephone-number"
            >
              Email us
            </a>
          </div>
          <div>
            <h4>6 Walton Ct, Newtown, PA, 18940</h4>
          </div>
        </div>
      </div>
  );
}

export default App;
