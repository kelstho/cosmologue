import React from "react";

function DailyPic(props) {
  return (
    <div>
      <img className="responsive-img" id="daily-pic" src={props.results.image} alt={props.results.title} />
      <br></br>
      <h5 id="pic-title">{this.results.title}</h5>
    </div>
  )
}

export default DailyPic;