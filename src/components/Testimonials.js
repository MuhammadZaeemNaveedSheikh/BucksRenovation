import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { VscStarFull } from "react-icons/vsc";
function App() {
  return (
      <div className="testimonials">
        <p>Kitchen & Bath Experts Bucks County, PA.</p>
        <h2>What People Say About Our Remodeling Services</h2>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div className="testimon">
            <span className="quote">
              “I was so impressed with work done by Bucks renovations team! I
              love coming home from work to a modern house that feels very
              special to us. I recommend Bucks Renovations if you want the best
              around!”
            </span>
            <h4 className="testimon-name">Andy Walsh</h4>
            <span className="testimon-stars">
              <VscStarFull className="testimon-star-icon" />
              <VscStarFull className="testimon-star-icon" />
              <VscStarFull className="testimon-star-icon" />
              <VscStarFull className="testimon-star-icon" />
            </span>
          </div>
          <div className="testimon">
            <span className="quote">
              “Bucks Renovations has provided excellent renovation services for
              turning our old bath into a magnificent luxury shower space. Now I
              can have company over, and show off my updated home.”
            </span>
            <h4 className="testimon-name">Melissa Brown</h4>
            <span className="testimon-stars">
              {" "}
              <VscStarFull className="testimon-star-icon" />
              <VscStarFull className="testimon-star-icon" />
              <VscStarFull className="testimon-star-icon" />
              <VscStarFull className="testimon-star-icon" />
            </span>
          </div>
        </Carousel>
      </div>
  );
}

export default App;
