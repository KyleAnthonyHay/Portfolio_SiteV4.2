import "./CountriesApp.css";
import "./WorkCards.css";

import Swift from "../../assets/technologies/swift.svg";
import Vector from "../../assets/icons/vector.svg";
import Graphic from "../../assets/graphics/CountriesApp.png";

const CountriesApp = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/Countries-App";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="countries-icon" alt="" src={Graphic} />
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src={Swift} />
          </div>
          <div className="description-text">
            <div className="project-name">{`Countries App `}</div>
            <div className="project-summary">{`A comprehensive app designed in Swift that offers detailed insights into countries. `}</div>
            <a href={githubRepoUrl} className="card-button" style={linkStyle} target="_blank" rel="noopener noreferrer">
                <div className="go-to-code">Go to Code</div>
                <img className="vector-icon" alt="" src={Vector} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesApp;
