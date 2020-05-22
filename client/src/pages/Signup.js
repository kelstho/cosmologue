import React, { Component } from "react";
import Select from "../components/Select";
import Button from "../components/Button";
import "../assets/css/Signup.css";
import axios from "axios";

class Signup extends Component {

  state = {
    name: "",
    username: "",
    sign: "",
    password: ""
  }

  handleInputChange = event => {
    console.log(event);
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    };
    console.log(this.state);
    this.setState({
      [name]: value
    });
  }

  handleSignupSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.username || !this.state.sign) {
      alert("Please fill out all the required information");
    } else if (this.state.password.length < 6) {
      alert("Please choose a more secure password");
    } else {
      alert(`Welcome ${this.state.username}`);
    }

    axios.post(
      "/api/user",
      {
        username: this.state.username,
        sign: this.state.sign,
        password: this.state.password
      }
    )

    this.setState({
      name: "",
      username: "",
      sign: "",
      password: ""
    });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    if (!this.state.username) {
      alert("Please enter your username");
    } else if (!this.state.password) {
      alert("Please enter your password");
    } else {
      alert(`Hello ${this.state.username}`);
    }

    axios.post(
      "/api/user/login",
      {
        username: this.state.username,
        password: this.state.password
      }
    ).then(res => console.log(res));

    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row no-margin">
          <h2>S I G N U P</h2>
        </div>
        <div className="row no-margin">
          <h5 className="no-margin">-Start your journey today!-</h5>-
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Your Username"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.sign}
                  name="sign"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Enter your Astrological Sign"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Choose a Password"
                />
              </div>
            </div>
            <div className="row">
              <button
                onClick={this.handleSignupSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <h2>L O G I N</h2>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Your Username"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
            <div className="row">
              <button
                onClick={this.handleLoginSubmit}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;