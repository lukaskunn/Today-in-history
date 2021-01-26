import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function Landing() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');

    console.log(response.data.events);

    setEvents(response.data.events);
    setBirths(response.data.births);
    setDeaths(response.data.deaths);
  }


  return (
    <div>
      {events.map((item, index) => {
        return (
          <div>
            <h4 key={index}>year: {item.year}</h4>
            <h4 key={index}>{item.description}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default Landing;