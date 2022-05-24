import React from 'react';
import './MiddleSection.css';
const MiddleSection = (props) => {
  return (
    <div>
        <div className='top-section'>
        <div className='top_secItem'> 
          <img src={props.img1} alt="heroimg"/>
        </div>
        <div className='right_Text topsecItem'>
        <img src={props.img2} alt="heroimg"/>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection