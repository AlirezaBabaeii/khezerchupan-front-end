import React from "react";
import "./style.css";
import Sideapp from "./component/side/side";
import Cardnote from "./component/card/cardnote";
import Twitter from "./component/card/twitter";
import Member from "./component/card/member";
import Fouter from "./component/fouter";
export default function App() {
  return (
    <div className="appbody">
      <nav className="navmain">
        <div className="logo">مدرسه مهر خضرچوپان</div>
        <ul>
          <li className="navitem"> وبلاگ </li>
          <li className="navitem"> عوامل </li>
          <li className="navitem"> امکانات </li>
          <li className="navitem"> رسانه </li>
        </ul>
      </nav>

      <div className="sliders">
        <Sideapp />
      </div>

      <div className="cardbody">
        <div className="headercomponent-0">امکانات</div>
        <Cardnote />
      </div>

      <div className="twitter-body">
        <div className="headercomponent-1">ما در رسانه ها</div>
        <Twitter />
      </div>

      <div className="mamberbody">
        <div className="headercomponent-2">عوامل</div>
        <Member />
      </div>
      <Fouter/>
    </div>
  );
}
