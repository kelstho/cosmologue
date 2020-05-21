import React, { Component } from "react";
import Horoscope from "../components/Horoscope";
import SavedEvents from "../components/SavedEvents";
import ClickedEvent from "../components/ClickedEvent"
import FavCard from "../components/InfoCard";
import TabView from "../components/CardTabs";
import "../assets/css/Profile.css";
import axios from "axios";

class Profile extends Component {
  state = {
    // name: "",
    horoscope: "",
    // events: []
  };

  componentDidMount() {
    axios.post("https://aztro.sameerkumar.website?sign=aries&day=today")
      .then(res => {
        this.setState({
          horoscope: res.data.description
        });
      })
    // this.getName("");
    // this.searchEvents("");
  };

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
          <div className="row no-margin">
            <h1>P R O F I L E</h1>
          </div>
          <div className="row">
            <h4 className="no-mt">Welcome User Name!</h4>
          </div>
          <div className="row">
            <div className="col s12" id="horo-container">
              <h4>H O R O S C O P E</h4>
              <Horoscope
                horoscope={this.state.horoscope}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              <TabView>
                {/* <FavCard
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
                    description='Insert the description here' /> */}
              </TabView>
            </div>
            <div className="col s12 m7">
              <div className="row no-mb">
                <h4>Clicked Event Title</h4>
              </div>
              <div className="row">
                <p>Details about clicked event Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

{/* <h4>Welcome {this.state.name}</h4> */ }

{/* <Horoscope horoscope={this.state.horoscope} /> */ }

{/* <SavedEvents events={this.state.events} /> */ }

{/* <ClickedEvent /> */ }

export default Profile;