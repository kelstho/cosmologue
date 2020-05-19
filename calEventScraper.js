// npm install cheerio

var cheerio = require("cheerio");
var axios = require("axios");

// call the source
axios.get("https://in-the-sky.org/widgets/newscal.php?skin=1").then(function (response) {

  // Load the Response into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

  // A variable to parse the URL for retrieving dates
  // var url = new URL('https://in-the-sky.org/news.php?id=20200610_10_100')
  // var dateParams = url.searchParams
  // var dateStr = toString(dateParams)

  // console.log()

  // function dateGetter () {

  // }

  var arr = []
  // With cheerio, find each newcalitem div that contains an 'a' tag
  $("div.newscalitem > a").each(function (i, element) {

    // Save the text of the element in variables

    // var url = "https://in-the-sky.org/news.php?id=20200610_10_100"
    var link = $(element).attr("href")

    var year = link.slice(35, -11)
    var month = link.slice(39, -9)
    var day = link.slice(41, -7)

    var dateYear = year
    var dateMonth = month
    var dateDay = day
    var titleStr = $(element).text()
    var title = titleStr
    var summaryStr = $(element).attr("title")
    var summary = summaryStr

    //  console.log(`${dateYear} | ${dateMonth} | ${dateDay} | ${title} | ${link} | ${desc}`)

    const eventsData =
    {
      year: dateYear,
      month: dateMonth,
      day: dateDay,
      title: title,
      link: dateYear,
      summary: summary,
    }
      ;

    arr.push(eventsData)

  })


  // var eventsArr = arr.concat(eventsData)

  console.log(arr)

})
