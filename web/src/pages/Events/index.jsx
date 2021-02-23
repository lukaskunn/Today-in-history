import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import api from '../../services/api'

import './styles.css'

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData(e) {
    const response = await api.get('/');
    setEvents(response.data.events);
  }

  return (
    <div className="events-container">
      <Header />
      <main>
        <fieldset className="events">
          <legend>Events</legend>
          {events.map((item, index) => {
            return <ItemCard year={item.year} description={item.description} wikipedia={item.wikipedia[0].wikipedia} key={index} />
          })}
        </fieldset>
      </main>
    </div>

  );
}

export default Events;

