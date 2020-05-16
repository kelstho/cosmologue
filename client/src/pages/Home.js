import React, { Component } from "react";
import axios from "axios";
import DailyPic from "../components/DailyPic";
import News from "../components/News";
import "../assets/css/Home.css";
import NewsCard from "../components/InfoCard";

class Home extends Component {
  state = {
    title: "",
    url: "",
    explanation: "",
    articles: []
  }

  componentDidMount() {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=h48365nXKWwr83z8vL6gGli8DtlsXafowiWijj4h")
      .then(res => {
        this.setState({
          title: res.data.title,
          url: res.data.url,
          explanation: res.data.explanation
        });
      })
    axios.get("https://newsapi.org/v2/everything?language=en&domains=nasa.gov&apiKey=3e287acea75f40dcbc3c4008f443dead")
      .then(res => {
        this.setState({
          articles: res.data.articles
        });
      })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h4>Welcome To Your Own Personal</h4>
            <h1>C O S M O L O G U E</h1>
            <h5>-A Guide To Your Journey Through the Stars-</h5>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <div className="img-container">
                <img alt={this.state.title} src={this.state.url} id="dailyPic" />
              </div>
              <div className="content">
                <ul>
                  <li>
                    {this.state.title}
                  </li>
                  <li>
                    {this.state.explanation}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s12 m4" id="news-container">
              <News articles={this.state.articles} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;