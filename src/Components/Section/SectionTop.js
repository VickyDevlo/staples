import React from "react";
import { Link } from "react-router-dom";
import "./SectionTop.css";
const SectionTop = (props) => {
  return (
    <>
      <div className='topsection'>
        <div className='topsecItem'>
          <Link to='/'>
            <img src={props.img1} alt="heroimg"/>
          </Link>
        </div>
        <div className='rightText topsecItem'>
          <Link to='/'>
            <img src={props.img2} alt="heroimg"/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionTop;
