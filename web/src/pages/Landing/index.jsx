import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import EventItem from '../../components/EventItem'
import Header from '../../components/Header'

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
    <div className="landing">
      <Header />
      <div className="main-content">
        
      </div>
    </div>
  );
}

export default Landing;