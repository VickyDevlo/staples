import React from "react";
import { Link } from "react-router-dom";
import "./Brands.css";

const imgItem = [
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_TRU_RED.png",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_NXT_TECHNOLOGIES.png",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_UNION_AND_SCALE.png",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_GRYMATTR.png",
  },
  {
    imgsrc: "https://static.eway.ca/content/landingpage/198/en/EWAY_PERK.png",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_COASTWIDE.png",
  },
];
const Brands = () => {
  return (
    <div>
      <p className="BrandText">
        <span>Staples Exclusive.</span>Meet the Brands.
      </p>

      <div  className="brands">
        {imgItem.map((imgvalue, index) => {
          return (
            <div className="BrandItem" key={index}>
                <div className="BrnadImg">
                    <img src={imgvalue.imgsrc} alt="heroimg" />

                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
