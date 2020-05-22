var axios = require("axios");
const db = require("../models");

module.exports = {
  updateDB: async function() {

    var arr = [];
    // call the source
    axios.get("https://newsapi.org/v2/everything?language=en&domains=nasa.gov&apiKey=3e287acea75f40dcbc3c4008f443dead")
    .then(res => {
        console.log(res.data.articles);
        res.data.articles.forEach(article => {
          let data = {
            title: article.title,
            description: article.description,
            link: article.url,
            publishDate: article.publishedAt,
            data: {
              source: article.source,
              author: article.author,
              img: article.urlToImage,
              content: article.content
            }
          };
          db.Article.updateOne({
            publishDate: data.publishDate,
            title: data.title
            },
            data,
            {upsert: true},
            (err, writeOpResult) => {
              if (err) {
                console.log(err)
              }
            }
          )
        });
    })
  }
};

