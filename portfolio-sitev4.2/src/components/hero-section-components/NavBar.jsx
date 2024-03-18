import "./NavBar.css";
import React from "react";

//Assets
import Logo from "../../assets/icons/logo.png";
import LinkedIn from "../../assets/socials/linkedin.svg";
import GitHub from "../../assets/socials/github.svg";
import X from "../../assets/socials/x.svg";

const AboutContainer = () => {
  const handleLinkClick = (id) => {
    return () => {
      const anchor = document.getElementById(id);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
        console.log(`${id} anchor clicked`);
      }
    };
  };
  return (
    <div className="navbar">
      <div className="links">
        <img className="faceemoji-icon" alt="" src = {Logo} />
        {/* <div className="navbar-links">About</div> */}
        <a href="https://medium.com/@haykyle917" className="navbar-links" target="_blank"><div>Blog</div></a>
        {/* <div className="navbar-links" onClick={handleLinkClick("work-anchor")}>Work</div> */}
        <a href="mailto:haykyle917@gmail.com" className="navbar-links"><div>Contact</div></a>

      </div>
      <div className="socialicons">
        <a href="https://www.linkedin.com/in/kyle-anthonyhay/" target="_blank"><img className="social-icon" alt="LinkedIn" src={LinkedIn} /></a>
        <a href="https://github.com/KyleAnthonyHay" target="_blank"><img className="social-icon" alt="" src={GitHub} /></a>
        <a href="https://twitter.com/KyleAnthonyHay" target="_blank"><img className="social-icon" alt="" src={X} /></a>
        {/* <div className="line" /> */}
        {/* <img className="linkedin-icon" alt="" src="/sun.svg" />
        <div className="whitespace" /> */}
      </div>
    </div>
  );
};

export default AboutContainer;
