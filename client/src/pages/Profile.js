import React, { Component } from "react";
import Horoscope from "../components/Horoscope";
import FavCard from "../components/EventsCard";
import TabView from "../components/CardTabs";
import "../assets/css/Profile.css";
import axios from "axios";
import API from "../utils/API"

class Profile extends Component {
  state = {
    username: "",
    description: "",
    color: "",
    compatibility: "",
    luckyNumber: "",
    luckyTime: "",
    mood: "",
  };

  getInfo = () => {
    API.getUserInfo()
      .then(res => {
        if (res.data.message = "No user") {
          window.location.pathname = "/signup";
        } else {
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
        }
      })
  }

  componentDidMount() {
    this.getInfo()
  };

  render() {
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
            {/* <div className="col s12 m5">
              <TabView>

              </TabView>
            </div> */}
            <div className="col s12">
            {/* <div className="col s12 m7"> */}
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
