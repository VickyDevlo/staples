import React, { useState, useRef } from "react";
import {
  PersonOutlineOutlined,
  SearchOutlined,
  ChatBubbleOutlineRounded,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import "./HeaderMiddleSection.css";

 
const HeaderMiddleSection = () => {
  const DropDown = useRef(null);
  const [isOpen, setIsOpen] = useState(DropDown, false);
  const [isActive, setIsActive] = useState(DropDown, false);
  const [isLoad, setIsLoad] = useState(DropDown, false);
  const cartmouseover = () => setIsLoad(!isLoad);
  const onmouseover = () => setIsActive(!isActive);
  const signmouseover = () => setIsOpen(!isOpen);

  const searchHandle = (e) => {
    console.log(e.target.value);
  };

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
                onChange={searchHandle}
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

            <li className="signsec">
              <span className="Icons" onMouseEnter={signmouseover}>
                <PersonOutlineOutlined />
              </span>

              <span className="icontext" >
                Signin
              </span>

            </li>

            <li className="helpsec"  >

              <span className="Icons" onMouseEnter={onmouseover}>
                <ChatBubbleOutlineRounded />
              </span>

              <span className="icontext menu-trigger">Help</span>
              
            </li>

            <li className="cartsec">
              <span className="Icons" onMouseEnter={cartmouseover}>
                <ShoppingCartOutlined />
              </span>

              <span className="icontext">Cart</span>
              
            </li>
          </ul>
        </div>
      </div>
      <div ref={DropDown} className={`form ${isOpen ? "close" : "open"}`}>
        <div className="Form-Container">
          <div className="Header">
            <label className="Signin-span">Sign in</label>
            <label className="Close-btn-span" onClick={() => setIsOpen(!isOpen)}>
              Close
            </label>
          </div>
          <div onMouseLeave={() => setIsOpen(!isOpen)}>
            <div className="Input-Field">
              <label className="User-Span">User ID</label> <br />
              <input type="text" className="Pass" /> <br />
              <label className="Pass-Span">Password</label> <br />
              <input type="Password" className="Pass" /> <br />
              <br />
              <input type="checkbox" className="Check-box" />{" "}
              <label className="Save-User">Save User ID</label>
            </div>
            <button className="Signup-btn">Sign in</button> <br />
            <div className="Lower-sec">
              <label className="Forgot">
                Forget<label className="Forgot-User">User ID</label>
                <label className="Or">or</label>
                <label className="Forgot-Password">Password?</label>
              </label>
            </div>
          </div>
        </div>
      </div>
      <nav
        ref={DropDown}
        className={`menu ${isActive ? "Inactive" : "Active"}`}
      >
        <div className="Link-Btn" onMouseLeave={() => setIsActive(!isActive)}>
          <NavLink to="/contactus">Contact Us</NavLink>
          <NavLink to="/helpcenter">Help Center</NavLink>
          <NavLink to="/recallinformation">Recall Information</NavLink>
        </div>
      </nav>
      <div ref={DropDown} className={`cart ${isLoad ? "hide" : "show"}`}>
        <div className="Cart-Data" onMouseLeave={() => setIsLoad(!isLoad)}>
          <label className="Cart-msg">
            To use this feature, please sign in or become a customer
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddleSection;
