import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from '@material-ui/icons'
import "./BusinessUpdate.css";

const imgItem = [
    {
        imgsrc: "https://static.eway.ca/content/sitecontent/Images/1/1/en/Business_Update_EN.png",
        para:'Staples Professional is here to serve you. Read our latest updates.',
        links:'learn more'
    },
   
]

const BusinessUpdate = () => {
  return (
    <div>
      <div className='ImgWrapper secbottom'>
        {
        imgItem.map((imgvalue, index) => {
          return (
        <React.Fragment key={index}>

              <div className='secbottom topsecItem'>
                <Link to='/businessupdate'>
                  <img src={imgvalue.imgsrc} alt="heroimg"/>
                </Link>
              </div>
              <div className='secbottom_Text'>
                <p>{imgvalue.para}</p>
               <Link to='businessupdate'>
                    {imgvalue.links} <ArrowForwardIos style={{fontSize:'small'}}/>
               </Link>
              </div>
          </React.Fragment>
          
           
          );
        })
        }
      </div>
    </div>
  );
};

export default BusinessUpdate;
