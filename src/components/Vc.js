import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import cabinet from "../Images/refinish_kitchen_cabinet.jpg";
function App() {
  return (
      <div className="vc">
        <div className="vc-text">
          <h2>
            Giving perfection to Kitchen and Bath{" "}
            <span style={{ color: "#17a2b8" }}>Remodeling!</span>
          </h2>
          <div className="vc-info">
            <p className="vc-info-title">
              Reliable kitchen & bath company in Bucks County.
            </p>
            <p className="vc-info-text">
              Many people often overlook the need for kitchen and bathroom
              renovation, but these two places need the actual attention. Here
              are the advantages you get out of the renovation:
            </p>
          </div>
          <div className="vc-info">
            <p className="vc-info-title">
              The right renovation of the bathroom and kitchen makes the home
              beautiful.
            </p>
            <p className="vc-info-text">
              <ul>
                <li>
                  {" "}
                  When you have an updated kitchen or bathroom, it can be much
                  more comfortable to cook and take showers in.
                </li>
                <li>
                  {" "}
                  Kitchen and bathroom renovations can also help you save money.
                  Often old kitchens and bathrooms can become inefficient and
                  use more energy and water than newer ones.
                </li>
                <li>
                  {" "}
                  If you are looking to sell your home in the future, an updated
                  kitchen and bathroom can help increase the value of your home.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="vc-image-container">
          <img src={cabinet} className="vc-image" />
        </div>
      </div>
  );
}

export default App;
