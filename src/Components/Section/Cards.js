import React from "react";
import "./Cards.css";

const Card = [
  {
    img1: "https://static.eway.ca/content/sitecontent/Images/1/1/en/ReimaginedSpacesCampaign_static_eway_EN.jpg",
    img2: "https://static.eway.ca/content/sitecontent/Images/1/1/en/ReimaginedSpacesCampaign_static-eway_EN_R2.jpg",
  },
  {
    img1: "https://static.eway.ca/content/sitecontent/Images/1/3/fr/ONTREND_BANNER_LEFT.jpg",
    img2: "https://static.eway.ca/content/sitecontent/Images/1/3/fr/OnTrend_BANNER_RIGHT.jpg",
  },
  {
    img1: "https://static.eway.ca/content/sitecontent/Images/1/1/fr/Banner_BoxFinder_Left_EN.png",
    img2: "https://static.eway.ca/content/sitecontent/Images/1/1/fr/Banner_BoxFinder_RIGHT_EN.png",
  },
];
const Cards = () => {
  return (
    <div>
      {Card.map((DataList, index) => {
        return (
          <div className="topsection" key={index}>
            <div className="topsecItem">
              <img src={DataList.img1} alt="img" />
            </div>
            <div className="topsecItem">
              <img src={DataList.img2} alt="img" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
