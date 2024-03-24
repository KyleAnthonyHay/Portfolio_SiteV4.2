import "./QuizCraft.css";
import "./WorkCards.css";

import Flutter from "../../assets/technologies/flutter.svg";
import Firebase from "../../assets/technologies/firebase.svg";
import Vector from "../../assets/icons/vector.svg";
import Graphic from "../../assets/graphics/quiz-craft.png";

const ColorfulConnectContainer = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/QuizCraftAI";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="quizCraft-graphic" alt="" src={Graphic} />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src={Flutter} />
            <img className="firebase-icon" alt="" src={Firebase} />
          </div>
          <div className="description-text">
            <div className="project-name">{`QuizCraft AI `}</div>
            <div className="project-summary">{`An AI-Powered customizable quiz generator built with Flutter and Firebase. `}</div>
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
