import React from "react";

function News(props) {
  return (
    <ul className="collection">
      {props.articles.map(article => (
        <li className="collection-item" key={article.id}>
          {article.name}
        </li>
      ))}
    </ul>
  )
}

export default News;