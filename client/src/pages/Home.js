import React, { Component } from "react";
import axios from "axios";
import "../assets/css/Home.css";
import NewsCard from "../components/NewsCard";
import API from "../utils/API";

class Home extends Component {
  state = {
    title: "",
    url: "",
    explanation: "",
    articles: []
  }

  componentDidMount() {
    this.getPic("");
    this.getNews("");
  }

  getPic = () => {
    API.getDailyPic()
      .then(res => {
        this.setState({
          title: res.data.title,
          url: res.data.url,
          explanation: res.data.explanation
        })
      })
  }

  getNews = () => {
    API.getAllNews()
    .then(res => {
      console.log(res)
      this.setState({
        articles: res.data
      })
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
              <h3 id="news-title">NASA News</h3>
              <ul className="collection">
                <NewsCard
                  articles={this.state.articles}
                >
                </NewsCard>
              </ul>
              <a href="https://newsapi.org" target="_blank" rel="noreferrer noopener">Powered by News API</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;