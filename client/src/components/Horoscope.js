import React from "react";

function Horoscope(props) {
  return (
    <div>
      <div className="row">
        <p>{props.description}</p>
      </div>
      <div className="row">
        <div className="col m4 s12">
          <p>Color: <br></br> {props.color}</p>
        </div>
        <div className="col m4 s12">
          <p>Compatibility: <br></br> {props.compatibility}</p>
        </div>
        <div className="col m4 s12">
          <p>Mood: <br></br> {props.mood}</p>
        </div>
      </div>
      <div className="row">
        <div className="col m6 s12">
          <p>Lucky Number: {props.luckyNumber}</p>
        </div>
        <div className="col m6 s12">
          <p>Lucky Time: {props.luckyTime}</p>
        </div>
      </div>
    </div>
  )
}

export default Horoscope;