import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import shuffleArray from '../../functions/shuffleArray'

import './styles.css'

function Landing() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');

    let tempEvents = shuffleArray(response.data.events, 10);
    let tempBirths = shuffleArray(response.data.births, 10);
    let tempDeaths = shuffleArray(response.data.deaths, 10);

    setEvents(tempEvents);
    setBirths(tempBirths);
    setDeaths(tempDeaths);
  }


  return (
    <div id="landing">
      <Header className="header" />
      <main>
        <fieldset className="main-content">
          <legend>Events</legend>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </fieldset>
      </main>

    </div>
  );
}

export default Landing;