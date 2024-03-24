import React, { useState } from 'react'; 

import "./SocialMediaApp.css";
import "./WorkCards.css";

import Flutter from "../../assets/technologies/flutter.svg";
import Firebase from "../../assets/technologies/firebase.svg";
import Vector from "../../assets/icons/vector.svg";
import GraphicLight from "../../assets/graphics/social-media-app-light.png";
import GraphicDark from "../../assets/graphics/social-media-app-dark.png";

const SocialMediaApp = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/socialmedia-appV2.0";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };

  // Switch Image on Hover
  const [graphic, setGraphic] = useState(GraphicLight);
  return (
    <div className="colorconnect-card">
      <div className="project-card">
                <img className="social-media-app-icon" alt="" src={graphic} 
             onMouseEnter={() => setGraphic(GraphicDark)} // Change to dark on hover
             onMouseLeave={() => setGraphic(GraphicLight)} // Revert to light when not hovered
        />
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src={Flutter} />
            <img className="firebase-icon" alt="" src={Firebase} />
          </div>
          <div className="description-text">
            <div className="project-name">{`Social Media App `}</div>
            <div className="project-summary">{`A social media app with a real-time collective post feed. Built with Flutter and Firebase. `}</div>
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

export default SocialMediaApp;
