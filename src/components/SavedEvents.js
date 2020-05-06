import React from "react";

function SavedEvents(props) {
  return (
    <ul className="collection">
      {props.events.map(event => (
        <li className="collection-item" key={event.id}>
          <a href={event.text}>{event.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default SavedEvents;