import React, { Component } from "react";
import axios from "axios";
import DailyPic from "../components/DailyPic";
import News from "../components/News";
import "../assets/css/Home.css";
import NewsCard from "../components/InfoCard";

class Home extends Component {
  state = {
    // articles: []
  };

  componentDidMount() {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=h48365nXKWwr83z8vL6gGli8DtlsXafowiWijj4h")
      .then(res => {
        const title = res.data.title;
        const url = res.data.url;
        const explanation = res.data.explanation;
        this.setState({ title });
        this.setState({ url });
        this.setState({ explanation });
      })
    // this.searchNews("");
  }

  // searchNews = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

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
              <ul className="collection">
                <NewsCard
                  title='News Event 1'
                  date='02/14/2020'
                  description='Insert the description here' />
                <NewsCard
                  title='News Event 2'
                  date='02/14/2020'
                  description='Insert the description here' />
                <NewsCard
                  title='News Event 3'
                  date='02/14/2020'
                  description='Insert the description here' />
                <NewsCard
                  title='News Event 4'
                  date='02/14/2020'
                  description='Insert the description here' />
                <NewsCard
                  title='News Event 5'
                  date='02/14/2020'
                  description='Insert the description here' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;