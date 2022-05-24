import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@material-ui/icons";

const ProductsList = [
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_PAPER.jpg",
    name: "Paper",
    link: "/paper",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_INK_TONER.jpg",
    name: "Ink & Toner ",
    link: "/Ink&Toner",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_TECHNOLOGY.jpg",
    name: "Technology",
    link: "/technology",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_FURNITURE.jpg",
    name: "Furniture",
    link: "/furniture",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_CLEANING.jpg",
    name: "Cleaning & Janitorial",
    link: "/cleaning&janitorial",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_PACK_SHIP.jpg",
    name: "Pack & Ship ",
    link: "/pack&ship",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_KEURIG.jpg",
    name: "Breakroom",
    link: "/breakroom",
  },
  {
    imgsrc:
      "https://static.eway.ca/content/landingpage/198/en/EWAY_PRODUCT_BUSINESS_ESSENTIALS.jpg",
    name: "Business Essentials",
    link: "/businessessentials",
  },
];

const Products = () => {
  return (
    <div>
      <h5 className="Products_Heading">Explore our Products</h5>
      <div className="product">
        {ProductsList.map((data, index) => {
          return (
            <div className="productItem" key={index}>
              <div className="product_img">
                <img src={data.imgsrc} alt="product img" />
              </div>
              <Link to={data.link}>
                {data.name}
                <ArrowForwardIos style={{ fontSize: "small" }} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
