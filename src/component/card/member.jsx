import React from 'react';
import {Badge} from 'antd'
import './member.css'
export default function member() {
  return(
      <div className='bodycardmember'>
            <Badge.Ribbon text="عوامل مدرسه" color='red'>
   <div className='cardmembers'>
       <img src={require('../../assets/member/hojat.jpg')} className='imgmember' />
<h4 className='name'>حجت الله آقای حسنی</h4> 
<p className='description'>راهبر مدرسه</p>
  </div>
  </Badge.Ribbon>

  {/* <div className='cardmembers'>
       <img src={require('../../assets/member/mohammad.jpg')} className='imgmember' />
<h4 className='name'>mohammad</h4> 
<p className='description'>admin school</p>
  </div> */}

  <Badge.Ribbon text="عوامل مدرسه" color='red'>
  <div className='cardmembers'>
       <img src={require('../../assets/member/mohammad.jpg')} className='imgmember' />
<h4 className='name'>محمد حسن بابایی</h4> 
<p className='description'>مدیرآموزگار مدرسه</p>
  </div>

    </Badge.Ribbon>
    <Badge.Ribbon text="عوامل مدرسه" color='red'>
  <div className='cardmembers'>
       <img src={require('../../assets/member/behzad.jpg')} className='imgmember' />
<h4 className='name'>بهزاد فراری</h4> 
<p className='description'>معلم مدرسه</p>
  </div>
</Badge.Ribbon>
<Badge.Ribbon text="عوامل روستا" color='red'>
  <div className='cardmembers'>
       <img src={require('../../assets/member/abas.jpg')} className='imgmember' />
<h4 className='name'>عباس فرهادی نیا</h4> 
<p className='description'>شورای روستا</p>
  </div>
  </Badge.Ribbon>
  </div>
  )
}
