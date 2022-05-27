import React from "react";
import './Banner.css'
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className="Slider" >
      <Carousel>
        <Carousel.Item interval={1500}>
          <NavLink to="/https://static.eway.ca/images/banners/en/2949_GMxECCampaign_Revolvingeway_EN">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src="https://static.eway.ca/images/banners/en/2949_GMxECCampaign_Revolvingeway_EN.jpg" alt="Slide-one" />
            </abbr>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <NavLink to="/https://static.eway.ca/images/banners/en/2892_OwnBrandR">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src="https://static.eway.ca/images/banners/en/2892_OwnBrandR.jpg" alt="Slide-two" />
            </abbr>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <NavLink to="/https://static.eway.ca/images/banners/en/AlwaysOn_April_Campaign_PackShip_Revolvingeway_W17_EN">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src="https://static.eway.ca/images/banners/en/AlwaysOn_April_Campaign_PackShip_Revolvingeway_W17_EN.jpg" alt="Slide-three" />
            </abbr>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <NavLink to="/https://static.eway.ca/images/banners/en/2901_Coastwide_EwayBanner_W16_EN">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src="https://static.eway.ca/images/banners/en/2901_Coastwide_EwayBanner_W16_EN.jpg" alt="Slide-four" />
            </abbr>
          </NavLink>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};

export default Slider;