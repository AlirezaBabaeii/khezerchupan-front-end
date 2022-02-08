// import React, { createElement, useState } from "react";
// import { Comment, Tooltip, Avatar, Card } from "antd";
// import moment from "moment";
// import {
//   DislikeOutlined,
//   LikeOutlined,
//   DislikeFilled,
//   LikeFilled,
// } from "@ant-design/icons";
// import './twitter.css'
// const Twitter = () => {
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);
//   const [action, setAction] = useState(null);

//   const like = () => {
//     setLikes(1);
//     setDislikes(0);
//     setAction("liked");
//   };

//   const dislike = () => {
//     setLikes(0);
//     setDislikes(1);
//     setAction("disliked");
//   };

//   const stylescard = {
//     width: 300 ,
//     height:300,
//     margin:'5px'
//   }

//   const actions = [
//     <Tooltip key="comment-basic-like" title="Like">
//       <span onClick={like}>
//         {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
//         <span className="comment-action">{likes}</span>
//       </span>
//     </Tooltip>,
//     <Tooltip key="comment-basic-dislike" title="Dislike">
//       <span onClick={dislike}>
//         {React.createElement(
//           action === "disliked" ? DislikeFilled : DislikeOutlined
//         )}
//         <span className="comment-action">{dislikes}</span>
//       </span>
//     </Tooltip>,
//     <span key="comment-basic-reply-to">Reply to</span>,
//   ];

//   return (
//     <div className="twitterbody">
//       <Card style={stylescard}>
//         <Comment
//           actions={actions}
//           author={<a>khezerchupan</a>}
//           avatar={
//             <Avatar src={require('../../assets/twitter/pro.jpg')} alt="@khezerchupan" />
//           }
//           content={
//             <p>
//          چقدر امروز خوب بودو بچه ها خوشحال شدن دم یوسف و دوستاش گرم که چهارصد کیلومتر راه پا به پای ما اومد دور روز تو راه بود و هزینه کرد و کتاب و لوازم التحریر گرفت و شادی رو به روستا آورد.

//             </p>
//           }
//           datetime={
//             <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
//               <span>{moment().fromNow()}</span>
//             </Tooltip>
//           }
//         />
//       </Card>
//       <Card style={stylescard}>
//         <Comment
//           actions={actions}
//           author={<a>Han Solo</a>}
//           avatar={
//             <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
//           }
//           content={
//             <p>
//               We supply a series of design principles, practical patterns and
//               high quality design resources (Sketch and Axure), to help people
//               create their product prototypes beautifully and efficiently.
//             </p>
//           }
//           datetime={
//             <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
//               <span>{moment().fromNow()}</span>
//             </Tooltip>
//           }
//         />
//       </Card>

//       <Card style={stylescard}>
//         <Comment
//           actions={actions}
//           author={<a>Han Solo</a>}
//           avatar={
//             <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
//           }
//           content={
//             <p>
//               We supply a series of design principles, practical patterns and
//               high quality design resources (Sketch and Axure), to help people
//               create their product prototypes beautifully and efficiently.
//             </p>
//           }
//           datetime={
//             <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
//               <span>{moment().fromNow()}</span>
//             </Tooltip>
//           }
//         />
//       </Card>


//       <Card style={stylescard}>
//         <Comment
//           actions={actions}
//           author={<a>Han Solo</a>}
//           avatar={
//             <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
//           }
//           content={
//             <p>
//               We supply a series of design principles, practical patterns and
//               high quality design resources (Sketch and Axure), to help people
//               create their product prototypes beautifully and efficiently.
//             </p>
//           }
//           datetime={
//             <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
//               <span>{moment().fromNow()}</span>
//             </Tooltip>
//           }
//         />
//       </Card>
//     </div>
//   );
// };

// export default Twitter;


import React from 'react';
import './twitter.css'
export default function twitter() {
  return(
   <div className='bodytwiterscard'>

      <div  className='cardtwitters'>
  <img className='imagetwiter' src={require('../../assets/scren/tw1.jpg')} />
  </div >

  <div  className='cardtwitters'>
  <img className='imagetwiter' src={require('../../assets/scren/tw2.jpg')} />
  </div >

  <div  className='cardtwitters'>
  <img className='imagetwiter' src={require('../../assets/scren/tw3.jpg')} />
  </div >

  </div>
  )
}
