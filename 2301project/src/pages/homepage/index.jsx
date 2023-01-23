import React from "react";
import AboutSection from "../../components/about";
import HappyCustomers from "../../components/happy-customers";
import LegalSolutions from "../../components/legal-solution";
import PracticesAreas from "../../components/practise-areas";
import BigImg from "../../images/hero_bg_1.jpg.webp"
import "./index.scss"

const HomePage = () => {
  return <div id="home">
        <img src={BigImg} alt="" className="home-img" />
    <div className="container">
        <div className="homepage">
            <h1 className="public-h1">
                <strong>Notary Public &</strong> <br />  Legal Solutions
            </h1>
            <p className="p-public">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
        </div>
        <div className="practices-areas">
            <h2 className="practice_text">Practice <span>Areas</span></h2>
            <p className="practice_p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <PracticesAreas />
        </div>
        <div className="aboutSection">
            <AboutSection />
        </div>
        <div className="happyCustomers">
            <h2 className="happy">Happy Customers</h2>
            <HappyCustomers />
        </div>
        <div className="legalSolutions">
            <LegalSolutions />
        </div>
    </div>


  </div>;
};

export default HomePage;
