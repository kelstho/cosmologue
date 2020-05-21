import React from "react";

function News(props) {
  return (
    <ul className="collection">
      <li className="collection-header"><h4>NASA News</h4></li>
      {props.articles.map(results => (
        <li className="collection-item newsItem" key={results.publishedAt}>
          <div>
            <a href={results.url} className="title" target="_blank" rel="noreferrer noopener">
              {results.title}
            </a>
            <a href="#" className="secondary-content star">
              <i className="material-icons">star</i>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default News;