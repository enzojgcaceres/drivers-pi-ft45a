import { Link } from "react-router-dom";

import "./landing.css";

function Landing() {
    return (
        <div className="landin">
        <div className="button-container"></div>
        <Link to="/home">
          <button className="landin button">Get Started</button>
        </Link>
      </div>
    );
}

export default Landing;