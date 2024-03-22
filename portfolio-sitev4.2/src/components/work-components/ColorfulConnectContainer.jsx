import "./ColorfulConnectContainer.css";
import "./WorkCards.css";

import Swift from "../../assets/technologies/swift.svg";
import Firebase from "../../assets/technologies/firebase.svg";
import Figma from "../../assets/technologies/figma.svg";
import Vector from "../../assets/icons/vector.svg";
import Graphic from "../../assets/graphics/colorful-connect.png";

const ColorfulConnectContainer = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/ColorfulConnect";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="colorfulPhone-icon" alt="" src={Graphic} />
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src={Swift} />
            <img className="firebase-icon" alt="" src={Firebase} />
            <img className="swift-icon" alt="" src={Figma} />
          </div>
          <div className="description-text">
            <div className="project-name">{`Colorful Connect (In Progress) `}</div>
            <div className="project-summary">{`Modern social media app built with SwiftUI, adapted from Figma design. `}</div>
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

export default ColorfulConnectContainer;
