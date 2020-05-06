import React from "react";

function News(props) {
  return (
    <ul className="collection">
      {props.articles.map(article => (
        <li className="collection-item" key={article.id}>
          <a href={article.source}>{article.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default News;