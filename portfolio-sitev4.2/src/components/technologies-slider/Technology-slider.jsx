import React, { useEffect } from 'react';
import "./Technology-slider.css"

// Assets
import Swift from "../../assets/technologies/swift.svg";
import React2 from "../../assets/technologies/reactjs.svg";
import Flutter from "../../assets/technologies/flutter.svg";
import Cplusplus from "../../assets/technologies/c++.svg";
import Python from "../../assets/technologies/python.svg";
import Tailwind from "../../assets/technologies/tailwindcss.svg";
import Django from "../../assets/technologies/django.svg";
import Figma from "../../assets/technologies/figma.svg";
import MongoDB from "../../assets/technologies/mongodb.svg";
import Typescript from "../../assets/technologies/typescript.svg";
import Firebase from "../../assets/technologies/firebase.svg";

const TechnologySlider = () => {
    const loopScroll = () => {
  const workContainer = document.querySelector('.slider');
  let scrollAmount = 0;

  // Clone slider contents
  const sliderContents = workContainer.innerHTML;
  workContainer.innerHTML += sliderContents; // Append cloned contents

  function scroll() {
    const maxScrollLeft = workContainer.scrollWidth / 2; // Divide by 2 because the content is now doubled

    if (scrollAmount < maxScrollLeft) {
      scrollAmount += .3; // Adjust scrolling speed here
      workContainer.scrollLeft = scrollAmount;
    } else {
      // Reset scroll position to start (smooth transition)
      scrollAmount = 0; // Might need adjustment for seamless looping
      workContainer.scrollLeft = scrollAmount;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};
  
    useEffect(() => {
      loopScroll(); //uncomment line to start loop
      // Include any cleanup code if necessary, for example:
      // return () => { /* Cleanup actions here */ };
    }, []); // The empty array ensures this effect runs only once after the initial render
  
  return (
    <div className='technology-slider-section'>
        <div className='slider'>
          <img className="tech-icon" alt="" src={Swift} />
          <img className="tech-icon" alt="" src={React2} />
          <img className="tech-icon" alt="" src={Flutter} />
          <img className="tech-icon" alt="" src={Cplusplus} />
          <img className="tech-icon" alt="" src={Python} />
          <img className="tech-icon" alt="" src={Tailwind} />
          <img className="tech-icon" alt="" src={Django} />
          <img className="tech-icon" alt="" src={Figma} />
          <img className="tech-icon" alt="" src={MongoDB} />
          <img className="tech-icon" alt="" src={Typescript} />
          <img className="tech-icon" alt="" src={Firebase} />
        </div>
    </div>
  );
};

export default TechnologySlider;
