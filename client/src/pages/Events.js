import React, { Component } from "react"
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import Calendar from "../components/Calendar";
import EventCard from "../components/InfoCard";
import Iframe from 'react-iframe'
import "../assets/css/Events.css";

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    // this.iframe = React.createRef()
  }

  // componentDidMount() {
  //   console.log(getElementById)
  // }

  render() {
    return (
      <div>
        <h1 id='page-title'>E V E N T S</h1>
        <div className="container">
          <div className="row">
            <div className='events-div'>
              <div className="col s12 m8">
                <div className="display-cal">
                  {/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
                  <Calendar />
                </div>
              </div>
              <div className="col s12 m4">
                <ul className='collection'>
                  <EventCard
                    title='Astronomical Event 1'
                    date='02/14/2020'
                    description='Insert the description here' />
                  <EventCard
                    title='Astronomical Event 2'
                    date='02/14/2020'
                    description='Insert the description here' />
                  <EventCard
                    title='Astronomical Event 3'
                    date='02/14/2020'
                    description='Insert the description here' />
                  <EventCard
                    title='Astronomical Event 4'
                    date='02/14/2020'
                    description='Insert the description here' />
                  <EventCard
                    title='Astronomical Event 5'
                    date='02/14/2020'
                    description='Insert the description here' />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

// console.log(document.getElementById('event6'))

export default Events;