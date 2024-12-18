import React, { useState } from 'react'; 
import "./ColorfulConnectContainer.css";
import "./WorkCards.css";

import Swift from "../../assets/technologies/swift.svg";
import Firebase from "../../assets/technologies/firebase.svg";
import Figma from "../../assets/technologies/figma.svg";
import Vector from "../../assets/icons/vector.svg";
import GraphicLight from "../../assets/graphics/expense-light.png";
import GraphicDark from "../../assets/graphics/expense-dark.png";

const ColorfulConnectContainer = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/ExpenseTracker/tree/main/ExpenseTracker";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  // Switch Image on Hover
  const [graphic, setGraphic] = useState(GraphicLight);
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="colorfulPhone-icon" alt="" src={graphic} 
        onMouseEnter={() => setGraphic(GraphicDark)} // Change to dark on hover
        onMouseLeave={() => setGraphic(GraphicLight)} // Revert to light when not hovered
        />
        
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src={Swift} />
          </div>
          <div className="description-text">
            <div className="project-name">{`Expense Tracker `}</div>
            <div className="project-summary">{`A modern budgeting app that tracks user spending and displays the monthly total. `}</div>
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
