import React, { useEffect } from 'react';
import ColorfulConnectContainer from "../components/work-components/ColorfulConnectContainer";
import QuizCraft from "../components/work-components/QuizCraft";
import MakeItSnow from "../components/work-components/MakeItSnow";
import "./WorkSection.css";
import CountriesApp from "../components/work-components/CountriesApp";
import MunchMap from "../components/work-components/MunchMap";
import SocialMediaApp from '../components/work-components/SocialMediaApp';

const WorkSection = () => {
  return (
    <div id = "work-anchor" className="worksection">
      <b className="work" id = "work-anchor">Work</b>
      <div className="work-container">
        <MakeItSnow />
        <SocialMediaApp />
        <CountriesApp/>
        <QuizCraft/>
        <MunchMap/>
        <ColorfulConnectContainer />
      </div>
     
    </div>
  );
};

export default WorkSection;
