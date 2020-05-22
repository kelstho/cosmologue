var axios = require("axios");
const db = require("../models");

module.exports = {
  updateDB: async function() {

    var arr = [];
    // call the source
    axios.get("https://newsapi.org/v2/everything?language=en&domains=nasa.gov&apiKey=3e287acea75f40dcbc3c4008f443dead")
      .then(res => {
        console.log(res);
    })
    
    //       arr.push(eventsData)
    
    //     })    
    //   })
    // }
    // arr.forEach((event) => {
    //   db.CalEvent.updateOne({
    //     year: event.year,
    //     month: event.month,
    //     day: event.day,
    //     title: event.title
    //   },
    //   event,
    //   {upsert: true},
    //   (err, writeOpResult) => {
    //     if (err) {
    //       console.log(err)
    //     }else {
    //       console.log("Successful update!");
    //     }
    //   })
    // });
  }
};
