import React, { Component } from "react";
import Horoscope from "../components/Horoscope";
import SavedEvents from "../components/SavedEvents";
import ClickedEvent from "../components/ClickedEvent"
import FavCard from "../components/InfoCard";
import TabView from "../components/CardTabs";
import favoriteList from "../components/favoriteList";
import "../assets/css/Profile.css";
import axios from "axios";
import FavoriteList from "../components/favoriteList";
import API from "../utils/API"

class Profile extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  state = {
    username: "",
    description: "",
    color: "",
    compatibility: "",
    luckyNumber: "",
    luckyTime: "",
    mood: "",
   //favorites: []
  };

  // display favorite events/articles
  // addFavorite = favorite => {
  //   const { favorites } = this.state
  //   if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
  //     this.setState({
  //       favorites: [...this.state.favorites, favorite]
  //     })
  //   }
  // }
  getInfo = () => {
    API.getUserInfo()
      .then(res => {
        const sign = res.data.sign;
        axios.post("https://aztro.sameerkumar.website?sign=" + sign + "&day=today")
          .then(res => {
            this.setState({
              description: res.data.description,
              color: res.data.color,
              compatibility: res.data.compatibility,
              luckyNumber: res.data.lucky_number,
              luckyTime: res.data.lucky_time,
              mood: res.data.mood
            })
          })
        this.setState({ username: res.data.username })
      })
  }

  componentDidMount() {
    this.getInfo()
    // this.addFavorite()
  };

  render() {
    //const { favorites } = this.props
    return (
      <div>
        <div className="container">
          <div className="row no-margin">
            <h1>P R O F I L E</h1>
          </div>
          <div className="row">
    <h4 className="no-mt">Welcome {this.state.username}!</h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              <ul>
                {/* {() => <FavoriteList favorites={this.state.favorites}/>} */}
                {/* {favorites.map(events => {
                  return (
                    <li key={events.id}>
                      <div>
                        <p>{events.title}</p>
                      </div>
                    </li>
                  )
                })} */}
              </ul>
              <TabView>
                <FavCard
                  title='News Event 1'
                  date='02/14/2020'
                  description='Insert the description here' />
                <FavCard
                  title='News Event 2'
                  date='02/14/2020'
                  description='Insert the description here' />
                <FavCard
                  title='News Event 3'
                  date='02/14/2020'
                  description='Insert the description here' />
                <FavCard
                  title='News Event 4'
                  date='02/14/2020'
                  description='Insert the description here' />
                <FavCard
                  title='News Event 5'
                  date='02/14/2020'
                  description='Insert the description here' />
              </TabView>
            </div>
            <div className="col s12 m7">
              <div className="col s12" id="horo-container">
                <h4>H O R O S C O P E</h4>
                <Horoscope
                  description={this.state.description}
                  color={this.state.color}
                  compatibility={this.state.compatibility}
                  luckyNumber={this.state.luckyNumber}
                  luckyTime={this.state.luckyTime}
                  mood={this.state.mood}
                />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
};

export default Profile;
