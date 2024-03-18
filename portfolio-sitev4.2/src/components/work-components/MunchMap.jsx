import "./MunchMap.css";
import "./WorkCards.css";

import React from "../../assets/technologies/reactjs.svg";
import Django from "../../assets/technologies/django.svg";
import Vector from "../../assets/icons/vector.svg";
import Graphic from "../../assets/graphics/munch-map.png";

const MunchMap = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/MunchMap";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon-munchMap" alt="" src={Graphic} />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src={React} />
            <img className="django-icon" alt="" src={Django} />
          </div>
          <div className="description-text">
            <div className="project-name">{`MunchMap `}</div>
            <div className="project-summary">{`Online food donation platform for restaurants and shelters. built with React and Django. `}</div>
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

export default MunchMap;
