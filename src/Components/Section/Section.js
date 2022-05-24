import React from "react";
import "./Section.css";
import TopSection from "./SectionTop";
import MiddleSection from "./MiddleSection";
import LowerSection from "./LowerSection";
import Products from "./Products";
import Cards from "./Cards";
import BottomSection from "./BottomSection";
import Brands from "./Brands";
import BusinessUpdate from './BusinessUpdate'
const Section = () => {
  return (
    <div className="container">
      <TopSection
        img1="https://static.eway.ca/content/sitecontent/Images/1/3/en/2521_GolfEventsCampaign_static%20eway_EN_LEFT.jpg"
        img2="https://static.eway.ca/content/sitecontent/Images/1/3/en/2521_GolfEventsCampaign_static%20eway_EN_RIGHT.jpg"
      />
      <MiddleSection
        img1="https://static.eway.ca/content/sitecontent/Images/1/1/en/VideoConferencing_EN_LEFT.jpg"
        img2="https://static.eway.ca/content/sitecontent/Images/1/1/fr/VideoConferencing_EN.jpg"
      />
      <LowerSection
        img1="https://static.eway.ca/content/landingpage/198/en/EWAY_FLYERICON_LEFT.png"
        img2="https://static.eway.ca/content/landingpage/198/en/EWAY_PUBLICATIONICON_RIGHT.png"
      />
      <Products/>
      <Cards />
      <BottomSection/>
      <Brands />
      <BusinessUpdate />
    </div>
  );
};

export default Section;
