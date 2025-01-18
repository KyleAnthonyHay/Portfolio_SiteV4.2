import React from 'react';
import './AboutSection.css'; // Importing the CSS file

import Image from "../assets/portraits/NewProfile-3.jpg";

const AboutSection = () => {
  const aboutText = "K"  

  
  return (
    <div className="about-container" id="about-anchor">
        <div className="text-container">
            <h3 className='about-container-header'>About Me</h3>  
            <p>My name is Kyle-Anthony, and I am a <span>Software</span> <span>Developer</span> based in Brooklyn, NYC. I specialize in <span>Swift</span>, <span>Flutter</span>, and <span>Web</span> development. Additionally, I research and implement <span>AI/ML</span> solutions.</p>
            <p>I enjoy making <a href="https://www.instagram.com/annointedbeats/" target="_blank"><span>music</span></a>, <a href="https://www.instagram.com/annointedproductions/" target="_blank"><span>digital content</span></a>, and visually pleasing designs. I love brands like <a href="https://www.apple.com" target="_blank"><span>Apple</span></a> and <a href="https://arc.net/" target="_blank"><span>The Arc Browser</span></a>; I try to model my designs to resemble their aesthetic.</p>
            <p>In the next couple of years, I plan to become a senior/staff software engineer.</p>
        </div>
        <div className="image-container">
            <img src={Image} alt="Profile" className="about-profile-image"/>
        </div>
    </div>
  );
}

export default AboutSection;
