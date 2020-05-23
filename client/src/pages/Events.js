import React, { Component } from "react"
import Calendar from "../components/Calendar";
import EventsCard from "../components/EventsCard";
import "../assets/css/Events.css";
import API from "../utils/API";
import FavoriteList from "../components/favoriteList"

class Events extends Component {
  state = {
    calEvents: [],
    favorites: []
  }

  addFavorite = favorite => {
    const { favorites } = this.state
    console.log(`the favorites button was clicked`)

    if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
      this.setState({
        favorites: [...this.state.favorites, favorite]
      })
    }
  }

  // share = (link) => {
  //   console.log(`${link} copied to clipboard`)
  // }

  getCalEvents = () => {
    API.getCalEvents()
      .then(res => {
        console.log(res)
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
                  // addFavorite={this.addFavorite}
                  ></EventsCard>
                  {/* <EventCard
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
                    description='Insert the description here' /> */}
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