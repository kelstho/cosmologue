import React, { Component } from "react"
import "../assets/css/Signup.css"

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
  }

  handleSignupSubmit = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.username || !this.state.birthday) {
      alert("Please fill out all the required information");
    } else if (this.state.password.length < 6) {
      alert("Please choose a more secure password");
    } else {
      alert(`Hello ${this.state.name}`);
    }

    this.setState({
      name: "",
      username: "",
      birthday: 0,
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
      alert(`Hello ${this.state.name}`);
    }

    this.setState({
      username: "",
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
              <button onClick={this.handleSignupSubmit}>Signup</button>
            </div>
          </form>
        </div>
        <div className="row">
          <h3>Login</h3>
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
                  placeholder="Choose a Password"
                />
              </div>
            </div>
            <div className="row">
              <button onClick={this.handleLoginSubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;