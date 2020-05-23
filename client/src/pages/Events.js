import React, { Component } from "react"
import Calendar from "../components/Calendar";
import EventsCard from "../components/EventsCard";
import "../assets/css/Events.css";
import API from "../utils/API";

class Events extends Component {
  state = {
    calEvents: []
  }

  getCalEvents = () => {
    API.getCalEvents()
      .then(res => {
        this.setState({
          calEvents: res.data
        })
      })
  }

  componentDidMount() {
    this.getCalEvents()
  }

  render() {
    return (
      <div>
        <h1 id='page-title'>E V E N T S</h1>
        <div className="container">
          <div className="row">
            <div className='events-div'>
              <div className="col s12 m8">
                <div className="display-cal">
                  <Calendar />
                </div>
              </div>
              <div className="col s12 m4">
                <ul className='collection'>
                  <EventsCard
                    calEvents={this.state.calEvents}
                  ></EventsCard>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Events;