import React, { useState, useEffect } from "react";
import axios from 'axios';


function Horo() {
  const [horo, setHoro] = useState([])
  const [sign, setSign] = useState([])

  useEffect(() => {
    initialize()
  }, [])

  function initialize() {
    axios.post('https://aztro.sameerkumar.website/?sign=aries&day=today')
      .then((response) => {
        console.log(response.data)
        setHoro(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  function handleChange(event) {
    const query = event.target.value
    setSign(query)
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://aztro.sameerkumar.website?sign=' + sign + '&day=today')
      .then((response) => {
        console.log(response.data)
        setHoro(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div>
      <div className='container'>
        <h1>Type your sign here for a horoscope!</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className="card">
        <li>
          {horo.description}
          <br />
          Compatability: {horo.compatibility}
          <br />
          Lucky Number {horo.lucky_number}
          <br />
          Color: {horo.color}
          <br />
          Mood: {horo.mood}
        </li>
      </div>
    </div>
  )
}


export default Horo;