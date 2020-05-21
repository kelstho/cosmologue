import React, { Component } from "react";
import axios from "axios";
import "../assets/css/Home.css";
import NewsCard from "../components/NewsCard";

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
    axios.get("https://newsapi.org/v2/everything?language=en&domains=nasa.gov&apiKey=9691bd6152c74d149ff1b25eb77a5680")
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
                  <li id="pic-title">
                    {this.state.title}
                  </li>
                  <li id="explanation">
                    {this.state.explanation}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s12 m4" id="news-container">
              <ul className="collection">
                <NewsCard
                  articles={this.state.articles}
                >
                </NewsCard>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

{/* <News articles={this.state.articles} /> */ }

export default Home;