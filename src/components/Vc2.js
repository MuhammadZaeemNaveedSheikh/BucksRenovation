import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import testImage from "../Images/test.jpg";
import { TiTick } from "react-icons/ti";
function VC2() {
  return (
     
      <div className="vc-2">
        <div className="vc-image-container">
          <img src={testImage} className="vc-image" />
        </div>
        <div className="vc-text">
          <div className="vc-info vc-bullet">
            <div style={{ display: "flex" }}>
              <TiTick className="tick-icon" />
              <a className="vc-info-title" href="#">
                Bonded and Insured Home Remodeling Contractors in Bucks County,
                PA
              </a>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <p className="vc-info-text">
                If you are thinking of upgrading your kitchen or bathroom, many
                reputable companies in Bucks county PA can help but only a few
                can be trusted.
              </p>
            </div>
          </div>
          <div className="vc-info vc-bullet">
            <div style={{ display: "flex" }}>
              <TiTick className="tick-icon" />
              <a className="vc-info-title" href="#">
                Giving Perfection to Kitchen & Bath Remodeling!
              </a>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <p className="vc-info-text">
                As one of the renowned interior renovation companies in Bucks
                county, PA, we offer our exemplary services for the renovation
                of your kitchen & bathrooms.
              </p>
            </div>
          </div>
          <div className="vc-info vc-bullet">
            <div style={{ display: "flex" }}>
              <TiTick className="tick-icon" />
              <a className="vc-info-title" href="#">
                Achieve Your Renovation Dreams!
              </a>
            </div>
            <div style={{ paddingLeft: "32px" }}>
              <p className="vc-info-text">
                We work on the practicality of your dreams. Everyone has a
                vision for the targeted…
              </p>
            </div>
          </div>
          <div className="vc-button">
            <a href="#" className="free-estimate-link">
              Discover More
            </a>
          </div>
        </div>
      </div>
      
  );
}

export default VC2;
