
import React from 'react';
import { Carousel } from 'antd';
import './side.css'
const contentStyle = {
  height: '650px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const stylebody = {
  height: '650px',
  width: '100%',
};
export default function Sideapp() {
  return (
  <Carousel autoplay style={stylebody}>
    <div>
      <img className='imageitem'  src={require('../../assets/FKBFdrlXsAIFTD1.jpeg')}/>
    </div>
    <div>
    <img className='imageitem'  src={require('../../assets/FIK2hkUWQAEY5Au.jpeg')}/>
    </div>
    <div>
    <img className='imageitem'  src={require('../../assets/FEEGG5uXMAQDxym.jpeg')}/>
    </div>
  </Carousel>
  )
}
