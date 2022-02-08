import React from 'react';
import { Card,Alert } from 'antd';
import './card.css'

export default function cardnote() {
  return (
    <div className='cardmain'>
{/* <div>
  test
</div> */}
<div className="site-card-border-less-wrapper waperscard">
  <Card title="سیستم گرمایشی" bordered={false} style={{ width: 300 }}>
      <img className='cardimage-title' src={require('../../assets/hot.png')} />
      <Alert message="بخاری نفتی فرسوده" type="error" showIcon />
        <Alert
      message="دو عدد شوفاژ برقی"
      type="success"
      showIcon
    />
  </Card>
</div>



<div className="site-card-border-less-wrapper waperscard">
  <Card title="دانش اموزان" bordered={false} style={{ width: 300 }}>
      <img className='cardimage-title' src={require('../../assets/student.png')} />
      <Alert message="۲۶ نفر" type="success" />
  </Card>
</div>



<div className="site-card-border-less-wrapper waperscard">
  <Card title="کلاس" bordered={false} style={{ width: 300 }}>
      <img className='cardimage-title' src={require('../../assets/rom.png')} />
      <Alert message="یک کلاس چند پایه ای" type="error" />
  </Card>
</div>


    </div>
)
}
