import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function App() {
  return (
      <div className="contact">
        <div className="contact-container">
          <h2>Get Your Free Quote from Bucks Renovations</h2>
          <div className="contact-info-box">
            <label>Your name*</label>
            <input className="input-box" />
          </div>
          <div className="contact-info-box">
            <label>Your email*</label>
            <input type={"email"} className="input-box" />
          </div>
          <div className="contact-info-box">
            <label>Your message*</label>
            <textarea rows={4} cols={2} className="input-box text-area" />
          </div>
          <a href="#" className="free-estimate-link">
            Send Message
          </a>
        </div>
      </div>
  );
}

export default App;
