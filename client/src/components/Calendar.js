import React from "react"
import Iframe from 'react-iframe'

function Calendar() {

    return (
        <Iframe
        url="https://in-the-sky.org/widgets/newscal.php?skin=1"
        width="860px"
        height="1000px"
        id="events-cal-id"
        className="events-cal"
        display="initial"
        position="relative"
        frameBorder="0" />
    )
}

//    const myIframe = document.getElementsByClassName('events-cal')
//    const iframeContent = myIframe.contentWindow

//    console.log(iframeContent)
//     // console.log(document.getElementsByClassName('events-cal'))
//     // console.log(document.getElementById('events-cal-id'))

export default Calendar;