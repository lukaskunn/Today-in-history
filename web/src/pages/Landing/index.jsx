import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import shuffleArray from '../../functions/shuffleArray';
import SeeMoreButton from '../../components/SeeMoreButton'

import RightArrow from '../../images/right-arrow.svg'
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

    console.log('ok')

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
        <fieldset className="events">
          <legend>Events</legend>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <SeeMoreButton path="/events" />
        </fieldset>
        <fieldset className="births">
          <legend>Births</legend>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </fieldset>
        <fieldset className="deaths">
          <legend>Deaths</legend>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </fieldset>
        <img src={RightArrow} alt="seta pra direita" width="100"/>
      </main>

    </div>
  );
}

export default Landing;