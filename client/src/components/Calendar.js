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

export default Calendar;