import React, { Component } from "react"
import DailyPic from "../components/DailyPic";
import News from "../components/News";

class Home extends Component {
  // state = {
  //   image: "",
  //   title: "",
  //   articles: []
  // };

  // componentDidMount() {
  //   this.searchPic("");
  //   this.searchNews("");
  // }

  // searchPic = query => {
  //   API.search(query)
  //     .then(res => this.setState({ 
  //       image: res.data.image,
  //       title: res.data.title
  //     }))
  //     .catch(err => console.log(err));
  // };

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
              {/* <DailyPic
                image={this.state.image}
                title={this.state.title}
              /> */}
            </div>
            <div className="col s12 m4">
              {/* <News articles={this.state.articles} /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;