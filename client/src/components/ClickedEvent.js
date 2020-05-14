import React from "react";

function ClickedEvent(props) {
  return <p id="clickedEvent">{props.events.event}</p>
  // document.getElementById()
}

export default ClickedEvent;