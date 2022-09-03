import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import testImage from "../Images/test.jpg";
function App() {
  return (
      <div className="renovations">
        <div className="renovations-text">
          <h2>
            We are well capable of taking up the{" "}
            <span style={{ color: "#17a2b8" }}>Home Renovation</span> job in
            Bucks County, PA.
          </h2>
          <p>
            As one of the renowned interior renovation companies in Bucks
            county, PA, we offer our exemplary services for the renovation of
            your kitchen & bathrooms. We have the right expertise for perfectly
            upgrading your kitchen and bathroom. Right from the designs of
            cabinets, and fixtures to paint jobs and décor, our experts deliver
            one hundred percent customer satisfaction. Talk to us with your raw
            ideas and we will give them reality. If you aren’t sure of what
            remodeling design would suit the best for your kitchen and bath, you
            can check our design gallery. You will find a wide variety of
            kitchen and bath décor and interior designs to make the finest
            selection. We provide a variety of interior design categories
            ranging from classic, modern, traditional, and many more to suit
            your needs.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE
          </a>
        </div>
        <div className="renovations-image-container">
          <img src={testImage} className="renovations-image" />
        </div>
      </div>
  );
}

export default App;
