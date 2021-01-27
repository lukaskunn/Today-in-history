import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'

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

    console.log(response.data.events);

    setEvents(response.data.events);
    setBirths(response.data.births);
    setDeaths(response.data.deaths);
  }


  return (
    <div className="landing">
      <Header className="header"/>
      <div className="main-content">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default Landing;