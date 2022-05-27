import React,{useState,useRef} from "react";
import "./FooterTop.css";
import {
  LinkedIn,
  Twitter,
  Facebook,
  YouTube,
  Instagram,
} from "@material-ui/icons";
import { KeyboardArrowDown} from '@material-ui/icons'
import { Link, NavLink } from "react-router-dom";


const FooterTop = () => {
  const List = useRef(null);

  const [FooteList, setFooteList] = useState(List)
  const [Corporate, setCorporate] = useState(List)
  const [Solution, setSolution] = useState(List)
  const [NewCust, setNewCust] = useState(List)
  const [Join, setJoin] = useState(List)

  const Footerhandler = () => setFooteList(!FooteList);
  const CorporateFooterhandler = () => setCorporate(!Corporate);
  const SolutionFooterhandler = () => setSolution(!Solution);
  const NewcustFooterhandler = () => setNewCust(!NewCust);
  const JoinFooterhandler = () => setJoin(!Join);
  return (
    <div>
      <div className="Footer-Wrapper">
        <div className="footertop">
          
              <div className="footmenu" >
                <h3 onClick={Footerhandler}>Customer Service<KeyboardArrowDown className={`Keyrotate ${FooteList ? "Inactive" : "Active"}`}/></h3> 
              
                <ul className={`footer-menu ${FooteList ? "close" : "open"}`}>
                  <li>
                    <NavLink to="/helpcenter" className="MenuList">
                    Help Center
                    </NavLink>     
                  </li>                                           
                  <li>
                    <NavLink to="/contactus" className="MenuList">
                    Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="recallinformation" className="MenuList">
                    Recall Information
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/safetydatasheets" className="MenuList">
                    Safety Data Sheets
                    </NavLink>
                  </li>                                 
                </ul>
              </div>
              <div className="footmenu" >
                <h3 onClick={CorporateFooterhandler}>Corporate Info<KeyboardArrowDown className={`Keyrotate ${Corporate ? "Inactive" : "Active"}`}/></h3>  
              
                <ul className={`footer-menu ${Corporate ? "close" : "open"}`}>
                  <li>
                    <NavLink to="/staplesprofessionaloverview" className="MenuList">
                    Staples Professional Overview
                    </NavLink>
                    
                  </li>                                           
 
                  <li>
                    <NavLink to="industriesserved" className="MenuList">
                    Industries Served
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" className="MenuList">
                    Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ourbranads" className="MenuList">
                    Our Brands
                    </NavLink>
                  </li>                                 
                </ul>
              </div>
              <div className="footmenu" >
                <h3 onClick={SolutionFooterhandler}>Staples Corporate Solutions<KeyboardArrowDown className={`Keyrotate ${Solution ?  "Inactive" : "Active"}`}/></h3> 
              
                <ul className={`footer-menu ${Solution ? "close" : "open"}`}>
                  <li>
                    <NavLink to="officeproducts" className="MenuList">
                    Office Products
                    </NavLink>        
                  </li>                                            
                  <li>
                    <NavLink to="technologyproducts" className="MenuList">
                    Technology Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/furniture" className="MenuList">
                    Furniture
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/facilities" className="MenuList">
                    Facilities
                    </NavLink>
                  </li>                                 
                  <li>
                    <NavLink to="promotionalproducts" className="MenuList">
                    Promotional Products
                    </NavLink>
                  </li>                                 
                </ul>
              </div>
              <div className="footmenu newcustomer" >
                <h3 onClick={NewcustFooterhandler}>New Customers<KeyboardArrowDown className={`Keyrotate ${NewCust ?  "Inactive" : "Active"}`}/></h3> 
              
                <ul className={`footer-menu ${NewCust ? "close" : "open"}`}>
                  <li>
                    <NavLink to="becomeacutomer" className="MenuList">
                    Become a Customer
                    </NavLink>
                    
                  </li>                                           
       
 
                  <li>
                    <NavLink to="govtcustomers" className="MenuList">
                    Govt. Customers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/membership" className="MenuList">
                    Membership
                    </NavLink>
                  </li>                              
                </ul>
              </div>
              <div className="footmenu LastFoterMenu" >
                <h3 onClick={JoinFooterhandler}>Join the Staples Team<KeyboardArrowDown className={`Keyrotate ${Join ?  "Inactive" : "Active"}`}/></h3> 
              
                <ul className={`footer-menu ${Join ? "close" : "open"}`}>
                  <li>
                    <NavLink to="careers" className="MenuList">
                    Careers
                    </NavLink>
                    
                  </li>                                                       
                </ul>
              </div>
          
             
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
            <Link to='/bullfrogpower'>
              <img
                src="https://www.eway.ca/static/img/bullfrogpower.svg" alt="img" />
            </Link>
            <Link to ='/accessibility'>
              <img src="https://www.eway.ca/static/img/accessibility-logo.svg" alt="img"/>
            </Link>
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
