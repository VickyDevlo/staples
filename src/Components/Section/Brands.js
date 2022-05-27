import React from "react";
import { Link } from "react-router-dom";
import "./Brands.css";

const imgItem = [
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_TRU_RED.png",
    link:'/trured',
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_NXT_TECHNOLOGIES.png",
    link:'/nxttechnologes',
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_UNION_AND_SCALE.png",
    link:'/unionscale',
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_GRYMATTR.png",
    link:'/grymatter',
  },
  {
    imgsrc: "https://static.eway.ca/content/landingpage/198/en/EWAY_PERK.png",
    link:'/perk',
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_COASTWIDE.png",
    link:'/coastwide'
  },
];
const Brands = () => {
  return (
    <div>
      <p className="BrandText">
        <span>Staples Exclusive.</span>Meet the Brands.
      </p>

      <div  className="brands">
        {imgItem.map((itmes, index) => {
          return (
            <div className="BrandItem" key={index}>
                <div className="BrnadImg">
                  <Link to={itmes.link}>
                    <img src={itmes.imgsrc} alt="heroimg" />
                  </Link>

                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
