import React from "react";
import "./LowerSection.css";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

const LowerSection = (props) => {
  return (
    <div>
      <div className="flyer">
        <div className="topflyer">
          <div className="imgflyer">
            <img src={props.img1} alt="img" />
          </div>
          <div className="textflyer">
            <h4>Flyers</h4>
            <p>Get the latest deals on the products your business needs.</p>
            <Link to="/viewnow">
              VIEW NOW <ArrowForwardIos style={{ fontSize: "small" }} />
            </Link>
          </div>
        </div>
        <div className="topflyer">
          <div className="imgflyer">
            <img src={props.img2} alt="img" />
          </div>
          <div className="textflyer">
            <h4>Catalogues & Product Guides</h4>
            <p>
              Browse our wide range of products and solutions for your business.
            </p>
            <Link to="/viewnow">
              VIEW NOW <ArrowForwardIos style={{ fontSize: "small" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
