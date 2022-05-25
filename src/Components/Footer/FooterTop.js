import React from "react";
import "./FooterTop.css";
import {
  LinkedIn,
  Twitter,
  Facebook,
  YouTube,
  Instagram,
} from "@material-ui/icons";
import { KeyboardArrowDown} from '@material-ui/icons'
import { NavLink } from "react-router-dom";

const footerItem = [
  {
    text: "Customer Service",
    link1: "Help Center",
    link2: "Contact Us",
    link3: "Recall Information",
    link4: "Safety Data Sheets",
  },
  {
    text: "Corporate Info",
    link1: "Staples Professional Overview",
    link2: "Industries Served",
    link3: "Blog",
    link4: "Our Brands",
  },
  {
    text: "Staples Corporate Solutions",
    link1: "Office Products",
    link2: "Technology Products",
    link3: "Furniture",
    link4: "Facilities",
    link5: "Promotional Products",
  },
  {
    text: "New Customers",
    link1: "Become a Customer",
    link2: "Govt. Customers",
    link3: "Membership",
    
  },
  {
    text:"Join the Staples Team",
    link1:"Careers"
  }
 
];

const FooterTop = () => {
  return (
    <div>
      <div className="Footer-Wrapper">
        <div className="footertop">
          {
              footerItem.map((FooterData,index) => { 
                  return (
                   
                <div className="footmenu" key={index}>
                  <h3>{FooterData.text} <KeyboardArrowDown className="KeyDownArrow"/></h3> 
               
                  <ul>
                    <li>
                      <NavLink to="#" className="MenuList">
                        {FooterData.link1}
                        
                      </NavLink>
                      
                    </li>
                    <li>
                      <NavLink to="#" className="MenuList">
                        {FooterData.link2}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="MenuList">
                        {FooterData.link3}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="MenuList">
                        {FooterData.link4}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="MenuList">
                            {FooterData.link5}
                        </NavLink>  
                    </li>
                    
                     
                    
                  </ul>
                </div>
            
            );
          })}
        </div>
      </div>

      <div className="foot_top">
        <div className="footmid">
          <div className="miditem">
            <h5>Join us on</h5>
            <div className="socialMedia">
              <NavLink to="/linkedin" className="SocialMediaIcons">
                <LinkedIn />
              </NavLink>
              <NavLink to="/twitter" className="SocialMediaIcons">
                <Twitter />
              </NavLink>
              <NavLink to="/facebook" className="SocialMediaIcons">
                <Facebook />
              </NavLink>
              <NavLink to="/youtube" className="SocialMediaIcons">
                <YouTube />
              </NavLink>
              <NavLink to="/instagram" className="SocialMediaIcons">
                <Instagram />
              </NavLink>
            </div>
          </div>
          <div className="midImg">
            <img
              src="https://www.eway.ca/static/img/bullfrogpower.svg"
              alt="img"
            ></img>
            <img
              src="https://www.eway.ca/static/img/accessibility-logo.svg"
              alt="img"
            ></img>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>
          <p>© Copyright 2022 Staples Professional Inc. All rights reserved.</p>

          <div className="Footer-list">
            <NavLink to="/termsandconditions">Terms & Conditions</NavLink>

            <NavLink to="/privacynotice" className="Links">
              Privacy Notice
            </NavLink>

            <NavLink to="/staplesprofessional" className="Links">
              Staples Professional
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
