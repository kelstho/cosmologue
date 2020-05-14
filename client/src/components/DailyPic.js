// import React, { Component } from "react";
// import axios from 'axios';

// class PicoftheDay extends Component {
//   state = {}

//   componentDidMount() {
//       axios.get("https://api.nasa.gov/planetary/apod?api_key=h48365nXKWwr83z8vL6gGli8DtlsXafowiWijj4h")
//       .then(res => {
//         const title = res.data.title;
//         const url = res.data.url;
//         const explanation = res.data.explanation;
//         this.setState({title});
//         this.setState({url});
//         this.setState({explanation});        
//       })
//   }

// render() {
//   return (
//     <div className="card">
//     <div className="img-container">
//       <img alt={this.state.title} src={this.state.url} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//           {this.state.title}
//         </li>
//         <li>
//           {this.state.explanation}
//         </li>
//       </ul>
//     </div>
//   </div>
//   )
// }

// }

// export default PicoftheDay;