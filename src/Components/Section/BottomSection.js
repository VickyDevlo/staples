import { ArrowForwardIos } from '@material-ui/icons';
import React from 'react'
import { NavLink } from 'react-router-dom';
import './BottomSection.css'

const DataSet = [
    {
      img1: "https://static.eway.ca/content/landingpage/198/en/EWAY_WFA_LOWER_BANNER_EN.jpg",
      img2: "https://static.eway.ca/content/landingpage/198/en/EWAY_CSW_LOWER_BANNER_EN.jpg",
      textLine1:"The world of work has changed, and we’re keeping pace with solutions to keep you productive in every environment." ,
      textLine2:"Solutions to keep a clean business environment to ensure the safety and wellness of employees and customers." ,
      link1:'/workfromanywhere',
      link2:'/cleansafewell',
      url:'VIEW NOW'
      
    }
    
  ];
const BottomSection = () => {
  return (
    <div>
      <div>
      {
      DataSet.map((DataList, index) => {
        return (
          <div className="Wrapper" key={index}>
            <div className="Img_Container">
              <img src={DataList.img1} alt="img" />
              <div className='imgText'>
              <p>{DataList.textLine1} </p>
              <NavLink to={DataList.link1}>
                  {DataList.url} <ArrowForwardIos style={{fontSize:'small'}}/>
              </NavLink>

             
              </div>
            </div>
            <div className="Img_Container">
              <img src={DataList.img2} alt="img" />
              <div className='imgText'>
              <p>{DataList.textLine2} </p>
              <NavLink to={DataList.link2}>
                  {DataList.url} <ArrowForwardIos style={{fontSize:'small'}}/>
              </NavLink>
              </div>
            </div>
          </div>
        );
      })
      }
    </div>
    </div>
  )
}

export default BottomSection