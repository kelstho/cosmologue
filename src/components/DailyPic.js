import React from "react";

function DailyPic(props) {
  return (
    <div>
      <img className="responsive-img" id="daily-pic" src={props.image} alt={props.title} />
      <br></br>
      <h5 id="pic-title">{this.results.title}</h5>
    </div>
  )
}

export default DailyPic;