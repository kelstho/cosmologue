import React from "react";

function News(props) {
  return (
    <ul className="collection">
      {props.articles.map(results => (
        <li className="collection-item" key={results.publishedAt}>
          <a href={results.url} target="_blank" rel="noreferrer noopener">{results.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default News;