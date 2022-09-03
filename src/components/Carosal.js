import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import testImage from "../Images/test.jpg";
function App() {
  return (
      <div className="hero-container">
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          className="presentation-mode"
        >
          <div>
            <img src={testImage} className="hero-image" />
            <div class="hero-slide-content">
              <h1>We Provide Best Kitchen & Bath Remodeling</h1>
              <p>Service Bucks Count, PA and its surrounding.</p>
              <p style={{ marginBottom: "100px" }}>
                Help you take another step in building your dream home.
              </p>
              <a href="#" className="free-estimate-link">
                Get In Touch
              </a>
            </div>
          </div>
          <div>
            <img src={testImage} className="hero-image" />
            <div class="hero-slide-content">
              <h1>We Provide Best Kitchen & Bath Remodeling</h1>
              <p>Service Bucks Count, PA and its surrounding.</p>
              <p style={{ marginBottom: "100px" }}>
                Help you take another step in building your dream home.
              </p>
              <a href="#" className="free-estimate-link">
                Get In Touch
              </a>
            </div>
          </div>
        </Carousel>
      </div>
  );
}

export default App;
