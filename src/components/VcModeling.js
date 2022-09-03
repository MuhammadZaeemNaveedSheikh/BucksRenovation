import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import testImage from "../Images/test.jpg";
function App() {
  return (
      <div className="vc-2 remodeling">
        <div className="vc-image-container">
          <img src={testImage} className="vc-image" />
        </div>
        <div className="vc-text">
          <h2>
            Bucks Renovation and{" "}
            <span style={{ color: "#17a2b8" }}>Kitchen Remodeling</span>
          </h2>
          <p>
            Remodeling your kitchen is a big decision. You want to ensure you're
            getting the most out of your investment, which means finding a
            reliable, experienced contractor who can get the job done right.
          </p>
          <p style={{ marginBottom: "3rem" }}>
            At Bucks Renovations, we have years of experience helping homeowners
            in Bucks County, PA transform their kitchens. We'll work with you to
            understand your vision and create a space that meets your needs and
            fits your budget. Whether you're looking for a complete kitchen
            makeover or just a few updates, we can help. We specialize in custom
            kitchen cabinetry, countertops, backsplashes, and flooring.
          </p>
          <div className="vc-button">
            <a href="#" className="free-estimate-link">
              Discover More
            </a>
          </div>
        </div>
      </div>
  );
}

export default App;
