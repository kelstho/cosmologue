import React, { Component } from "react";
import "../assets/css/Signup.css";
import axios from "axios";

class Signup extends Component {

  state = {
    name: "",
    username: "",
    birthday: 0,
    password: ""
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.username || !this.state.birthday) {
      alert("Please fill out all the required information");
    } else if (this.state.password.length < 6) {
      alert("Please choose a more secure password");
    } else {
      alert(`Hello ${this.state.name}`);
    }

    axios.post(
      "/api/user",
      {
        username: this.state.username,
        sign: this.state.birthday,
        password: this.state.password
      }
      )

    this.setState({
      name: "",
      username: "",
      birthday: 0,
      password: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Start Your Journey Today!</h1>
        </div>
        <div className="row">
          <h3>Signup</h3>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div class="input-field col s12">
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
              <div class="input-field col s12">
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
              < div className="input-field col s6">
                <input
                  value={this.state.birthday}
                  name="birthday"
                  onChange={this.handleInputChange}
                  type="date"
                  placeholder="Your Username"
                />
                <label for="birthday">Your Birthday</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12">
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
              <button onClick={this.handleFormSubmit}>Signup</button>
            </div>
          </form>
        </div>
        <div className="row">
          <h3>Login</h3>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div class="input-field col s12">
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
              <div class="input-field col s12">
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
              <button onClick={this.handleFormSubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;