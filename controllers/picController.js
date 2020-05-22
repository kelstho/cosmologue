const axios = require("axios");

module.exports = {
  find: function(req, res) {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=h48365nXKWwr83z8vL6gGli8DtlsXafowiWijj4h")
      .then(pic => {
        let data = {
          title: pic.data.title,
          url: pic.data.url,
          explanation: pic.data.explanation
        };
        res.json(data);
      });
  }
};
