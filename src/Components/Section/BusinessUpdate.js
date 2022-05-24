import React from "react";
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
        imgItem.map((imgvalue,index) => {
          return (
          <>
              <div className='secbottom topsecItem'>
                <img src={imgvalue.imgsrc} alt="heroimg"/>
              </div>
              <div className='secbottom_Text'>
                <p>{imgvalue.para}</p>
               <Link to='businessupdate'>
                    {imgvalue.links} <ArrowForwardIos style={{fontSize:'small'}}/>
               </Link>
              </div>
          </>
           
          );
        })
        }
      </div>
    </div>
  );
};

export default BusinessUpdate;
