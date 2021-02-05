import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import shuffleArray from '../../functions/shuffleArray';
import seeMoteButton from '../../components/SeeMoreButton'

import './styles.css'
import SeeMoreButton from '../../components/SeeMoreButton';

function Landing() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');

    let size = 5;
    
    setEvents(shuffleArray(response.data.events, size));
    setBirths(shuffleArray(response.data.births, size));
    setDeaths(shuffleArray(response.data.deaths, size));
  }

  return (
    <div id="landing">
      <Header className="header" />
      <main>
      <fieldset className="events">
          <legend>Events</legend>
          {events.map((item, index) => {
            return <ItemCard year={item.year} description={item.description} key={index} />
          })}
          <SeeMoreButton path="/events"/>
        </fieldset>
        <fieldset className="births">
          <legend>Births</legend>
          {births.map((item, index) => {
            return <ItemCard year={item.year} description={item.description} key={index} />
          })}
          <SeeMoreButton path="/births"/>
        </fieldset>
        <fieldset className="deaths">
          <legend>Deaths</legend>
          {deaths.map((item, index) => {
            return <ItemCard year={item.year} description={item.description} key={index} />
          })}
          <SeeMoreButton path="/deaths"/>
        </fieldset>
      </main>

    </div>
  );
}

export default Landing;