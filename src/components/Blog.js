import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import testImage from "../Images/test.jpg";
function App() {
  return (
      <div className="blog">
        <h2>Blog</h2>
        <div className="cards">
          <div className="card">
            <div className="card-image">
              <img src={testImage} className="blog-card-image" />
            </div>
            <div className="card-content">
              <a href="#" className="blog-card-heading">
                Luxury Kitchen Remodel In Bucks County, PA
              </a>
              <div className="blog-card-subheading-container">
                <a href="#" className="blog-card-subheading">
                  Kitchen Renovation, Our kitchen & bathroom renovation projects
                </a>
                <span className="blog-card-date">. August 7, 2022</span>
              </div>
              <p>
                Kitchen Remodeling Bucks County PA The kitchen is the focal
                point of every house. While…
              </p>
              <a href="#" className="learn-more-link">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={testImage} className="blog-card-image" />
            </div>
            <div className="card-content">
              <a href="#" className="blog-card-heading">
                Keeping Your Home Updated and Modern
              </a>
              <div className="blog-card-subheading-container">
                <a href="#" className="blog-card-subheading">
                  Bathroom renovation, Kitchen Renovation, Our kitchen &
                  bathroom renovation projects
                </a>
                <span className="blog-card-date">. August 7, 2022</span>
              </div>
              <p>
                Decluttering & Vacating Space A cluster of valuable fittings and
                accessories in a bathroom or…
              </p>
              <a href="#" className="learn-more-link">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={testImage} className="blog-card-image" />
            </div>
            <div className="card-content">
              <a href="#" className="blog-card-heading">
                Choose the right Kitchen & Bath remodeler in Bucks County, PA.
              </a>
              <div className="blog-card-subheading-container">
                <a href="#" className="blog-card-subheading">
                  Kitchen Renovation, Our kitchen & bathroom renovation projects
                </a>
                <span className="blog-card-date">. August 7, 2022</span>
              </div>
              <p>
                Remodeling your home sounds like an exciting job. Many
                homeowners want to remodel their homes…
              </p>
              <a href="#" className="learn-more-link">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
