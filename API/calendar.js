var cheerio = require("cheerio");
var axios = require("axios");
const db = require("../models");

module.exports = {
  updateDB: async function() {
    var d = new Date();
    let currentYear = d.getFullYear().toString();
    const months = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    var calEvents = [];
    // call the source
    for (currentMonth of months) {
      await axios.get(`https://in-the-sky.org/newscal.php?year=${currentYear}&month=${currentMonth}&maxdiff=7`)
        .then(function (response) {  
        // Load the Response into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(response.data);
    
        // With cheerio, find each newcalitem div that contains an 'a' tag
        $("div.newscalitem > a").each(function (i, element) {
    
          // Save the text of the element in variables
    
          var link = $(element).attr("href");
    
          var year = link.slice(35, -11);
          var month = link.slice(39, -9);
          var day = link.slice(41, -7);
    
          var dateYear = year;
          var dateMonth = month;
          var dateDay = day;
          var titleStr = $(element).text();
          var title = titleStr;
          var summaryStr = $(element).attr("title");
          var summary = summaryStr;
    
          const eventsData =
            {
              year: dateYear,
              month: dateMonth,
              day: dateDay,
              title: title,
              link: link,
              summary: summary,
            };
    
          calEvents.push(eventsData)
    
        })    
      })
    }
    await calEvents.forEach((event) => {
      db.CalEvent.updateOne({
        year: event.year,
        month: event.month,
        day: event.day,
        title: event.title
      },
      event,
      {upsert: true},
      (err, writeOpResult) => {
        if (err) {
          console.log(err)
        }
      })
    });
  }
};
