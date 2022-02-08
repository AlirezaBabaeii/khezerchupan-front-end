import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main';
import A from "./component/router/a";
import B from "./component/router/b";
import 'antd/dist/antd.css';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="A" element={<A />} />
      <Route path="B" element={<B />} />
    </Routes>
 </BrowserRouter>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
