import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleSection.css';
const MiddleSection = (props) => {
  return (
    <div>
        <div className='top-section'>
        <div className='top_secItem'> 
        <Link to='/productimg'>
          <img src={props.img1} alt="heroimg"/>
        </Link>
        </div>
        <div className='right_Text topsecItem'>
        <Link to='/productimg'>
        <img src={props.img2} alt="heroimg"/> 
        </Link>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection