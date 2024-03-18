import NavBar from "../components/hero-section-components/NavBar.jsx";
import ContentSection from "../components/hero-section-components/ContentSection.jsx";
import WorkSection from '../sections/WorkSection.jsx'
import TechnologySlider from "../components/technologies-slider/Technology-slider.jsx";
import Footer from "../components/footer/BaseFrame.jsx";
import AboutSection from "../sections/AboutSection.jsx";

import "./LandingPage.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <NavBar />
      {/* <ContentSection />
      <TechnologySlider />
      <WorkSection />
      <AboutSection />
      <Footer /> */}
    </div>
  );
};

export default Desktop;
