import React, { useState } from "react";
import { PersonOutlineOutlined, SearchOutlined, ChatBubbleOutlineRounded, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./HeaderMiddleSection.css";
 
const Data = [
  {
    icon: <PersonOutlineOutlined/>, 
    text: "Signin",
  },
  {
    icon: <ChatBubbleOutlineRounded />,
    text: "Help",
  },
  {
    icon: <ShoppingCartOutlined /> ,
    text: "Cart",
  },
];


const HeaderMiddleSection = () => {

  return (
    <div>
      <div className="HeaderContainer">
        <div className="Logo">
          <img
            src="https://www.eway.ca/static/header/logo-en.svg?v2"
            alt="logo img"
          />
        </div>
        <div className="SearchSection">
          <div className="SearchBax">
            <div className="SerchInput">
              <input
                type="text"
                placeholder="Search for all your business needs"
              />
              <button className="SearchBtn">
                <SearchOutlined style={{ fontSize: "midium" }} />
              </button>
            </div>
            <div className="InkBtn">
              <Link to="/inkandtoner">Ink &amp; Toner</Link>
            </div>
          </div>
        </div>
        <div className="Menu-Section">
          <ul>
            {  
            Data.map((item,index) => {
              return (
                <li key={index}>
                    <span className="Icons">{item.icon}</span>
                    <span className="icontext">{item.text}</span>   
                </li>                                
              );
           
            }) 
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddleSection;
