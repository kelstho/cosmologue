import React, { Component } from "react"
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import Iframe from 'react-iframe'
import "../assets/css/Events.css";


class Events extends Component {
  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <h1>Calendar of Events</h1>
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <div className="display-cal">
                {/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
                <Iframe url="https://in-the-sky.org/widgets/newscal.php?skin=1"
                  width="860px"
                  height="1000px"
                  id="events-cal-id"
                  className="events-cal"
                  display="initial"
                  position="relative"
                  frameBorder="0"/>
              </div>
            </div>
            <div className="col s12 m4">
              <ul className="collection">
                <li className="collection-item">
                  <a href="#">Event 1</a>
                </li>
                <li className="collection-item">
                  <a href="#">Event 2</a>
                </li>
                <li className="collection-item">
                  <a href="#">Event 3</a>
                </li>
                <li className="collection-item">
                  <a href="#">Event 4</a>
                </li>
                <li className="collection-item">
                  <a href="#">Event 5</a>
                </li>
                <li className="collection-item">
                  <a href="#">Event 6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Events;