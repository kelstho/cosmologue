import React, { Component } from "react";
import Horoscope from "../components/Horoscope";
import SavedEvents from "../components/SavedEvents";
import ClickedEvent from "../components/ClickedEvent"

class Profile extends Component {
  // state = {
  //   name: "",
  //   horoscope: "",
  //   events: []
  // };

  // componentDidMount() {
  //   this.getName("");
  //   this.searchScope("");
  //   this.searchEvents("");
  // };

  // function getName() {

  // };

  // searchScope = query => {
  //   API.search(query)
  //     .then(res => this.setState({ image: res.data.horoscope }))
  //     .catch(err => console.log(err));
  // };

  // function searchEvents() {

  // };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1>Profile</h1>
          </div>
          <div className="row">
            {/* <h4>Welcome {this.state.name}</h4> */}
          </div>
          <div className="row">
            <div className="col s12">
              {/* <Horoscope horoscope={this.state.horoscope} /> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              {/* <SavedEvents events={this.state.events} /> */}
            </div>
            <div className="col s12 m7">
              {/* <ClickedEvent /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Profile;